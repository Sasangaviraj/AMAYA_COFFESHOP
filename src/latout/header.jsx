import { useState } from "react";
import MobileMenu from "../components/mobilemenu";
import {
  MdOutlineKeyboardArrowDown,
  MdMenu,
  MdSearch,
  MdClose,
} from "react-icons/md";
import { FaFacebookF, FaInstagram, FaSearch, FaTripadvisor } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const homeDropdownItems = [
    "HOME 2",
    "HOME 3",
    "HOME 4",
    "HOME 5",
    "HOME 6",
    "DEMO 2",
    "NEW: DEMO 3 (DARK SKIN)",
  ];

  const AboutDropDownItems = [
    "ABOUT",
    "FAQ",
    "CUSTOM BLOCKS",
    "MENU EXAMPLES",
    "CONTENT BOXES EXAMPLES",
    "RECOMENDED",
    "SUPPORT PLUGINS",
  ];

  const ArticleDropDownItems = [
    "ALL ARTICLES",
    "LATEST",
    "FEATURED",
    "GUIDES",
    "REVIEWS",
    "ANOUNCEMENT",
  ];

  const shopDropDownItems = ["CART"];

  const allNavItems = {
    home: homeDropdownItems,
    about: AboutDropDownItems,
    articles: ArticleDropDownItems,
    shop: shopDropDownItems,
  };

  return (
    <div className="sticky">
      {/* Top Bar */}
      <div className="relative bg-button-blue flex justify-end items-center p-4">
       
          <p className="absolute left-1/2 text-white uppercase font-semibold text-link-p3 transform -translate-x-1/2 ">
            free shipping on orders of
            <span className="font-Raleway">$35+</span>
          </p>
     
        {/* Social Section */}
        <div className="flex gap-7" >
          <div className="flex  md:justify-start gap-3  items-center ">
            <a href="#">
              <FaInstagram className="hover:text-h1 w-4 h-4 text-white" />
            </a>
            <a href="#">
              <FaFacebookF className="hover:text-h1 w-4 h-4 text-white" />
            </a>
            <a href="#">
              <FaTripadvisor className="hover:text-h1 w-4 h-4 text-white" />
            </a>
           
          </div>
           <a href="#">
              <FaSearch  className="hover:text-h1 w-4 h-4 text-white " />
            </a>
        </div>
      </div>

      <header className=" top-0 left-0 z-[100] flex items-center justify-between w-full py-6 px-4 sm:px-6 md:px-8 lg:px-12 bg-white shadow-md">
        {/* mobile leftside */}
        {!isMobileMenuOpen && (
          <div className="lg:hidden flex items-center gap-4">
            <div
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MdMenu size={24} className="text-gray-800" />
            </div>
          </div>
        )}
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={allNavItems}
          />
        )}

        {/* Desktop Left Side Navigation */}
        <div className="hidden  lg:flex items-center gap-10">
          <HeaderUi title="HOME" icon={<MdOutlineKeyboardArrowDown />}>
            <HeaderUiList items={homeDropdownItems} />
          </HeaderUi>

          <HeaderUi title="ABOUT" icon={<MdOutlineKeyboardArrowDown />}>
            <HeaderUiList items={AboutDropDownItems} />
          </HeaderUi>

          <HeaderUi title="ARTICLES" icon={<MdOutlineKeyboardArrowDown />}>
            <HeaderUiList items={ArticleDropDownItems} />
          </HeaderUi>
        </div>

        {/* Desktop Center */}
        <div className="">
          <img
            src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/01/Amaya-logo.png"
            className="lg:h-14 h-11 md:12 object-contain cursor-pointer"
            alt="Logo"
          />
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-10">
          <p className="text-xs font-semibold tracking-widest cursor-pointer hover:text-orange-400">
            WHOLESALE
          </p>

          <HeaderUi title="SHOP" icon={<MdOutlineKeyboardArrowDown />}>
            <HeaderUiList items={shopDropDownItems} />
          </HeaderUi>

          <p className="text-xs font-semibold tracking-widest cursor-pointer hover:text-orange-400">
            LOCATIONS
          </p>
        </div>

        {/* Mobile Right Side */}
        {!isMobileMenuOpen && (
          <div className="lg:hidden cursor-pointer">
            <MdSearch size={30} className="text-gray-800" />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

// Headerui sub components

const HeaderUi = ({ title, icon, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-0.5 cursor-pointer h-full hover:text-orange-400">
        <p className="text-link-p3 font-semibold tracking-widest">{title}</p>
        {icon}
      </div>

      {isHovered && children && (
        <div className="absolute top-full left-0 min-w-[200px] bg-gray-800 text-gray-300 shadow-md overflow-hidden z-50 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

// headeruilist sub component
const HeaderUiList = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={index}>
          <p className="px-4 py-2 text-xs hover:text-orange-400 cursor-pointer">
            {item}
          </p>
          {index < items.length - 1 && (
            <hr className="border-gray-700 mx-4 w-4" />
          )}
        </div>
      ))}
    </div>
  );
};
