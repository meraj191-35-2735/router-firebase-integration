import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-end py-3">
        <Link
          className="mr-5 hover:text-orange-700 hover:font-bold font-serif"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mr-5 hover:text-orange-700 hover:font-bold  font-serif"
          to="login"
        >
          Log In
        </Link>
      </nav>
    </div>
  );
};

export default Header;
