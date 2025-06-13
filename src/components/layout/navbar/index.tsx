'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import clsx from 'clsx';



export default function Navbar() {
      const [categorys, setCategorys] = useState<string[]>([]);
      const [isMenuVisible, setIsMenuVisible] = useState(false);

      useEffect(() => {
          const categorys = ["Home", "About", "Project","Photograps","Achivements","News ","Service","Contact"];
          setCategorys(categorys);
           
        }, []);

      
 const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
    };

  return (
    <nav className="flex justify-between items-center">
        <img className='w-[200px] lg:w-[100px] lg:h-[41px]' src="/navbar/cover.png"/>
            <ul className={clsx("fixed top-0 right-0 h-full w-[200px] bg-[#3d3b3c] pt-[50px] overflow-y-scroll transition-[right] duration-700 lg:static lg:top-auto lg:right-auto lg:h-auto lg:w-auto lg:bg-transparent lg:pt-0 lg:overflow-visible",
              isMenuVisible ? "md:rigt-0" : "right-[-250px]")}   >
             {categorys.map((link) => {
              return (
                 <li key={link} className="group bg-black m-[15px] text-center rounded-[5px] p-[17px] shadow-[5px_5px_5px_rgb(38,39,39)] bg-black m-[15px] text-center rounded-[5px] p-[17px] shadow-[5px_5px_5px_rgb(38,39,39)] lg:bg-transparent lg:m-0 lg:text-left lg:rounded-none lg:p-0 lg:shadow-none lg:inline-block lg:m-[20px] lg:leading-[100%]  transition duration-500 hover:scale-110 ">
                  <a className="cursor-pointer relative">{link}
                        <span className="absolute  left-0 -bottom-[10px] h-[3px] w-0 bg-[#dbc7cd] transition-all duration-500 group-hover:w-full"></span>
                  </a>
                  </li>
             )})}
            <span  onClick={toggleMenu} className="absolute top-[25px] left-[25px] cursor-pointer text-[25px] lg:hidden"><FontAwesomeIcon className=" cursor-pointer " icon={faTimes} /></span>

        </ul>
       {!isMenuVisible && <span className="text-[25px] lg:hidden" 
       onClick={toggleMenu}><FontAwesomeIcon className=" cursor-pointer " icon={faBars} /></span>}
    </nav>
  );
}
