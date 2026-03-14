import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#">
            <img src="../Abhi_logo (2).png" alt="Abhishek Goyal" className="h-20" />
          </a>
          {/*button*/}
          <a
            href="#contact"
            className="btn btn-sm flex justify-center items-center"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
