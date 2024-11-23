import HLogo from "./assets/IconHH.svg";
import HambergerNav from "./assets/hambergerbar.svg";
import { Linkedin,Github, } from 'lucide-react';


export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg[#DAD6D1] border-b ">
      <div>
      <img src="/src/assets/IconHH.svg"  alt="Icon H" className="w-10 h-10" />
      </div>
      <div className="xl:hidden">
      <img src="/src/assets/hambergerbar.svg"  alt="hambergerBar" className="w-5 h-5" />
      </div>
    </nav>
  );
}





export default NavBar
