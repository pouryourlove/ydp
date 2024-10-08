import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <span>Router tutorial</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
