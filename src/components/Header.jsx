import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import '../styles/Header.scss'
const Header = ({handleDarkMode, darkMode}) => {
  return (
    <header>
      <h1>My Lovely Notes</h1>
      { darkMode ? (
        <MdLightMode className="themeToggle" onClick={handleDarkMode} style={{color: "white"}}></MdLightMode>
      ) : (
       <MdDarkMode className="themeToggle" onClick={handleDarkMode}></MdDarkMode>
      )}
    </header>
  );
};

export default Header;
