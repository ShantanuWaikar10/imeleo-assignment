import Image from "next/image";
import founder from "../public/founder.webp";
import React from "react";
import { Linkedin, Sparkles } from "lucide-react";

const Founder = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-5 lg:mx-20 bg-gray-50">
        <div className="p-10 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="flex flex-col gap-2">
            <div className="text-4xl mt-5 lg:mt-0 flex items-center gap-0 lg:gap-2">
              <span>
                <Sparkles color="blue" />
              </span>
              Meet Our <span className="text-blue-600">Founder</span>{" "}
            </div>
            <p>
              With decades of industry experience, Mayank is a highly skilled
              software developer, solution architect and technology
              entrepreneur. He specializes in building modular and scalable
              cross platform software solutions. <br /> <br /> Over the past, he
              has worked with numerous business, helping them overcome complex
              business challenges by building innovative technology solutions.{" "}
              <br /> <br />
              Admired by clients, developers and designers alike, his
              entrepreneurial vision drives Imeleo, empowering businesses with
              cutting-edge technology solutions, thus fueling growth and
              innovation.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Image
              src={founder}
              width={370}
              height={370}
              className="rounded-lg"
            />
            <div className="text-2xl text-blue-600 flex items-center gap-3 mt-2">
              Mayank Mahajan{" "}
              <span className="bg-blue-600 p-1 rounded-md">
                <Linkedin color="white" />
              </span>
            </div>
            <p className="font-bold">Founder Imeleo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
