import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { menuItems } from "./menuItems";
import SubMenu from "./SubMenu";
import { useState } from "react";
import MobileDropdown from "./MobileDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div
      className="header fixed sm:top-0 sm:right-0 sm:left-0 px-[1%] sm:px-[10%] w-full text-[14px] z-999 bg-white pt-5"
      dir="rtl"
    >
      <HeaderLogo />
      <br />

      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden p-2 border rounded"
      >
        {isMobileOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/*desktop*/}
      <div className="hidden w-full lg:flex items-center gap-10">
        <div className="flex cursor-pointer gap-10 relative">
          {menuItems?.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>

      </div>

      {/*mobile*/}
      {isMobileOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <MobileDropdown key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Header;
