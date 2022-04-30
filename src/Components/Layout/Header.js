import React from 'react';
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>WHAT'S YOUR MBTI?</h1>
        <a href='https://www.16personalities.com/ko'><img
          src="https://static.neris-assets.com/images/system/logo.svg"
          alt=""
        /></a>
      </header>
    </>
  );
};

export default Header;
