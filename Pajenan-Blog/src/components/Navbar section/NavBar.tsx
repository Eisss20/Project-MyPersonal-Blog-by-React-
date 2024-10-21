import HLogo from "./IconHH.svg";
import HambergerNav from "./hambergerbar.svg";
import { Linkedin,Github, } from 'lucide-react';


export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg[#DAD6D1] border-b ">
      <div>
        <img src={HLogo} alt="Icon H" className="w-10 h-10" />
      </div>
      <div className="xl:hidden">
        <img src={HambergerNav} alt="hambergerBar" className="w-5 h-5" />
      </div>
    </nav>
  );
}


export function Footer() {
  return (
    <> 
    <div className="bg-[#EFEEEB] flex justify-around p-10"> 
      <p> Get in touch  </p>
      <a href = "#" className ="flex items-center justify-center rounded-full bg-[#43403B] w-8 h-8 text-center"> <Linkedin className=" text-white text-sm" /> </a> 
      <a href = "#" className ="flex items-center justify-center rounded-full bg-[#43403B] w-8 h-8 text-center"> <Github className=" text-white text-sm" /> </a> 
      
    </div>  
    </>
  )
}



export default NavBar
