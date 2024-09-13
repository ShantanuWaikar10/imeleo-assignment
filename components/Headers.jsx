import React from "react";
import bg from "../public/bg.webp";

const Headers = () => {
  return (
    <div className="container">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="text-3xl lg:text-5xl text-blue-700 mb-3 font-extrabold">
          Business Software
        </div>
        <div className="text-3xl lg:text-5xl text-blue-700 mb-3 font-semibold">
          Solution And Services
        </div>
        <p className="tracking-wider mb-5 px-14 lg:px-0 text-center">
          <span className="font-bold underline">Software</span> services and
          solutions to take your{" "}
          <span className="font-bold underline">Business</span> to the next level
        </p>
        <div className="flex gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-white rounded-lg">
            Know More
          </button>
          <button className="bg-white py-2 px-6 text-black rounded-lg border border-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
