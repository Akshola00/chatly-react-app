import React from "react";
import bgimg from "../assets/bgimg.jpg";

import { TypeAnimation } from "react-type-animation";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const {signInWithGoogle, currentUser} = UserAuth();
  console.log(currentUser)
  const handleLogin = async () => {
// implement signin with google form
try {
  await signInWithGoogle()
} catch (error) {
  console.log(error)
}
  }
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ background: `url(${bgimg})` }}
      >
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center ">
          <TypeAnimation
            className=" text-green-800 font-bold text-3xl"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "We produce food for Mice",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "ChatLy By NIIT",
              1000,
              "Meet Millions Arround the World",
              1000,
              "Send Instant Messages To The Whola World",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block", color: "blue" }}
            repeat={Infinity}
          />{" "}
        </div>
      </div>
      {/* the other half of the screen  */}
      <div className="flex w-1/2 items-center justify-center bg-amber-100">
        <div className="max-w-md w-full p-8 bg-white rounded lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">
            welcome back <span className="text-amber-400">buddy</span>
          </h2>
          <div className="space-y-4">
          <button className="w-full bg-blue-400 rounded-full shadow-lg hover:bg-blue-200">
            Login With Facebook
          </button>
          <button onClick={handleLogin} className="w-full bg-red-400 rounded-full shadow-lg hover:bg-blue-200">
            Login With Google
          </button>
          <button className="w-full text-white bg-black rounded-full shadow-lg hover:bg-blue-200">
            Login With Twitter
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
