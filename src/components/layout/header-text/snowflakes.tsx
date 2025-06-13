'use client';
import Snow  from './snow';
import LightningStrike  from './lightning-strike';

export default function Snowflakes() {
  return (
    <div className="relative bg-white h-[40px] w-[127px] rounded-[100px] float-right before:content-[''] before:absolute before:top-[-20px] before:left-[20px]  before:w-[30px]  before:h-[30px]  before:bg-white  before:rounded-[50%] before:shadow-[40px_0_0_20px_#fff]">
        {[...Array(2)].map((_, index) => (
            <Snow key={index}/>
        ))}
         {[...Array(2)].map((_, index) => (
            <LightningStrike key={index}/>
        ))}
    </div>
  );
}
