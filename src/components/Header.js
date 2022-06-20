// Kalian bisa menambahkan CSS di src/components/Header.css
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div id="title">Call a Friend</div>
      <div id="sub-title">your friendly contact app</div>
      <hr id="line-break" />
    </div>
  );
};

export default Header;
