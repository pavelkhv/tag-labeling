import React from "react";

import "./header.css";

function Header({getInputProps, open}) {
  return (
    <header className="header">
      <input {...getInputProps()} />
      <button className="header__upload" onClick={open}>
        Upload image
      </button>

      <div className="header__wrap">
        <input className="header__search" type="text" />
        <button className="header__login">Login</button>
      </div>
    </header>
  );
}

export default Header;
