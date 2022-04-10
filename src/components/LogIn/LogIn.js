import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import SignIn from "../../images/btn_google_signin_dark_focus_web.png";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const LogIn = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="w-1/2 mx-auto pt-5 border-green-300 border py-3 px-3">
        <h1 className="text-2xl font-bold">Please Log In!</h1>
        <form className="py-3">
          <label className="font-bold">Your Email</label>
          <br />
          <input
            className="border border-green-200 w-full my-2 pl-2"
            type="email"
            name=""
            id=""
            placeholder="Enter email"
          />
          <label className="font-bold">Your Password</label>
          <br />
          <input
            className="border border-green-200 w-full my-2 pl-2"
            type="password"
            name=""
            id=""
            placeholder="Enter password"
          />
          <input
            className="bg-green-300 px-3 rounded py-2"
            type="submit"
            value="Log In"
          />
        </form>
        <button onClick={() => signInWithGoogle}>
          <img src={SignIn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
