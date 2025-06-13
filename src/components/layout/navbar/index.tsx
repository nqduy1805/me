'use client';



export default function Navbar() {
    const categorys = ["Home", "About", "Project","Photograps","Achivements","News Porfolio","Service","Contact"];
  return (
    <nav className="flex justify-between items-center">
        <img className='w-[100px] h-[41px]' src="/navbar/cover.png"/>
        <ul className="block " >
             {categorys.map((link) => {
              return (
                 <li key={link} className="inline-block m-[20px] leading-[100%]"><a className="">{link}</a></li>
             )})}
        </ul>
    </nav>
  );
}
