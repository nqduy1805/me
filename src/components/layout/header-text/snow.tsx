'use client';
import { useEffect, useState } from 'react';

export default function Snow() {
    const [snowflakes, setSnowflakes] = useState<{ id: number; duration: number }[]>([]);
    useEffect(() => {
        const snowflakes = Array.from({ length: 50 }, (_, i) => ({
          id: i,
          duration: 0.5+Math.random() * 2, // 3s đến 7s
        }));
      setSnowflakes(snowflakes);
      
    }, []);
  return (
    <div className="absolute flex z-[1] w-full ">
        {snowflakes.map((flake) => (
                <span
                key={flake.id}
                    className="relative w-[3px] h-[3px] bg-white m-[0_1px] rounded-[50%] animate-snowing "
                style={{
                    animationDuration: `${flake.duration}s`,
                }}
                ></span>
            ))}
    </div>
  );
}
