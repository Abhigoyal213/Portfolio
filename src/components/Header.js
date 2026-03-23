import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center flex-nowrap gap-x-2">
          {/*logo*/}
          <a href="/" className="shrink-0">
            <img src="/logo.png" alt="Abhishek Goyal" className="h-10 md:h-20" />
          </a>
          {/*button group*/}
          <div className="flex items-center gap-x-3 md:gap-x-6 shrink-0">
            <ThemeSwitcher />
            <a
              href="#contact"
              className="btn btn-sm flex justify-center items-center whitespace-nowrap text-xs md:text-sm"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
