
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

 function Footer() {
  return (
    <> 
    <section className="bg-[#EFEEEB]   py-10  flex-row items-center">     
    <div className=" flex justify-center  gap-4 "> 
      <div className="mt-1"> <span> Get in touch  </span> </div>
      <a href = "#" className ="flex items-center justify-center rounded-full bg-[#43403B] w-8 h-8 text-center"> <GrLinkedinOption className=" text-white text-sm" /> </a> 
      <a href = "#" className ="flex items-center justify-center rounded-full bg-[#43403B] w-8 h-8 text-center"> <FaGithub  className=" text-white text-sm" /> </a> 
      <a href = "#" className ="flex items-center justify-center rounded-full bg-[#43403B] w-8 h-8 text-center"> <FaGoogle  className=" text-white text-base w-auto" /> </a> 
    </div>  
    <div className="bg-[#EFEEEB] flex justify-center pt-4 underline">
      <a href = "Home page" > <p className="text-md"> Home page </p> </a>
    </div>
    </section>  
    </>
  )
}




export default Footer
