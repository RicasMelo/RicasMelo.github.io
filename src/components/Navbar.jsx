import logo from "../assets/kevinRushLogo.png";
import { GoHome } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { LuSchool } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-50  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,34,51,0.3),rgba(28,27,40,0))]">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#hero" className="hover:text-blue-500">
          <GoHome />
        </a>
        <a href="#experience" className="hover:text-blue-500">
          <IoSchoolOutline />
        </a>
        <a href="#technologies" className="hover:text-blue-500">
          <VscTools />
        </a>
        <a href="#academic" className="hover:text-blue-500">
          <LuSchool />
        </a>
        <a href="#contact" className="hover:text-blue-500">
          <MdOutlineLocalPhone />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
