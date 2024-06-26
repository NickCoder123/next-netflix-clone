import * as React from "react";
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import { NavbarItem } from "./NavbarItem";
import { MobileMenu } from "./MobileMenu";
import { AccountMenu } from "./AccountMenu";

const TOP_OFFSET = 66;

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const [showBackground, setShowBackground] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = React.useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  const toggleAccountMenu = React.useCallback(() => {
    setShowAccountMenu((prev) => !prev);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-neutral-600 bg-opacity-90" : ""
        }`}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="h-5 w-5" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-slate.png" alt="" />
            </div>
            <ChevronDownIcon
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
