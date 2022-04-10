import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1 className=" text-center">
        Welcome{" "}
        <span className="text-2xl ml-3 font-bold font-mono">
          {user ? user.displayName + "!" : "to home!"}
        </span>
      </h1>
    </div>
  );
};

export default Home;
