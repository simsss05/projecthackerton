import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="#">For cal we Sweat</a>
      </h1>
      <nav>
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
        <a href="#">프로필</a>
      </nav>
    </header>
  );
};

export default Header;
