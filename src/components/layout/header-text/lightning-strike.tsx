'use client';

import { useEffect, useState } from 'react';

function generateLightningPoints(): string {
  const segments = Math.floor(Math.random() * 10)+1;
  const points = [];

  let x = 100;
  let y = 100;

  for (let i = 0; i <= segments; i++) {
    const spread = (50 - i * 4);
    const deltaX = (Math.random() - 0.5) * spread;
    x = 50 + deltaX;
    y = (i / segments) * 100;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return points.join(' ');
}

export default function LightningStrike() {
  const [isMounted, setIsMounted] = useState(false);
  const [lightning, setLightning] = useState<{
    path: string;
    left: number;
  } | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const triggerLightning = () => {
      const path = generateLightningPoints();
      const left = 20 + Math.random() * 65;
      setLightning({ path, left });

      setTimeout(() => setLightning(null), 400);
    };

    const interval = setInterval(() => {
      triggerLightning();
    }, Math.random() * 2000 + 500);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {lightning && (
        <div
          className="absolute top-[40px] left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-none"
          style={{ left: `${lightning.left}%` }}
        >
          <svg
            width="100"
            height="60"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-strike-lightning drop-shadow-[0_0_10px_gold]"
          >
            <polyline
              points={lightning.path}
              fill="none"
              stroke="yellow"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
}
