import React from "react";
import Image from "next/image";
import image1 from "../public/battery-swap.webp";
import { Check, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col min-h-[90vh] justify-center items-center mx-5 lg:mx-20 ">
        <div className="text-4xl text-blue-700 mb-3">About Imeleo</div>
        <p className="w-[350px] lg:w-[450px] text-center mb-2">
          Imeleo provides cutting-edge solutions and expert insights to drive your
          business success in the digital age.
        </p>
        <div className="m-10 lg:m-20 grid grid-cols-1 lg:grid-cols-2">
          <Image src={image1} className="rounded-lg" />
          <div className="flex flex-col gap-2">
            <div className="text-4xl mt-5 lg:mt-0">
              We Are Increasing <span className="text-blue-600">Business</span>{" "}
              Success With <span className="text-blue-600">Technology</span>
            </div>
            <p>
              At Imeleo, we use technology to help businesses grow, work smarter,
              and get better results. Our goal is to make it easier for companies
              to succeed in today's digital world.
            </p>
            <div className="flex flex-row gap-2 font-bold">
              <Check color="blue" /> Problem Solving
            </div>
            <div className="flex flex-row gap-2 font-bold">
              <Check color="blue" /> Stratagic Growth
            </div>
            <div className="flex flex-row gap-2 font-bold">
              <Check color="blue" /> Enhanced Performance
            </div>
            <button className="bg-blue-600 w-40 py-2 px-6 text-black rounded-lg border flex mt-4">
              <span className="text-white">View More</span>{" "}
              <ChevronRight color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
