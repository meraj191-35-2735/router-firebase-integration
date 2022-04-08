import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, signOutUser } = useFirebase();
  return (
    <div>
      <nav className="flex justify-end py-3">
        <Link
          className="mr-5 hover:text-orange-700 font-bold font-serif"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mr-5 hover:text-orange-700 font-bold font-serif"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="mr-5 hover:text-orange-700 font-bold font-serif"
          to="/orders"
        >
          Orders
        </Link>
        <Link
          className="mr-5 hover:text-orange-700 font-bold font-serif"
          to="/register"
        >
          Register
        </Link>
        {user?.photoURL && (
          <img className="w-10 rounded-full mr-3" src={user.photoURL} alt="" />
        )}

        {user?.uid ? (
          <Link
            onClick={signOutUser}
            className="mr-5 hover:text-orange-700 font-bold  font-serif"
            to="login"
          >
            Sign Out
          </Link>
        ) : (
          <Link
            className="mr-5 hover:text-orange-700 font-bold  font-serif"
            to="login"
          >
            Log In
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
