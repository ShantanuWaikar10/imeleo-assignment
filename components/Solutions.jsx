import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "../public/battery-swap.webp";
import image2 from "../public/cattle-insurance-platform.webp";
import image3 from "../public/ev-renting.webp";
import image4 from "../public/hospital-system.webp";
import image5 from "../public/lawyer-marketplace.webp";
import image6 from "../public/last-mile-delivery.webp";
import { ChevronRight } from "lucide-react";

const Solutions = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center mt-10">
      <div className="text-4xl text-blue-700 mb-3">Solutions</div>
      <p className="w-[350px] lg:w-[450px] text-center mb-10">
        Innovative software solutions tailored to streamline your business
        operations and maximize efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image1} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Content Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image2} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Employee Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image3} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Vehicle Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image4} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Hospital Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image5} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Lead Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={image6} className="rounded-md" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-blue-600"
              >
                Inventory Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id quos sequi distinctio rerum, ullam nulla expedita obcaecati
                earum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <button className="bg-white py-2 px-6 text-black rounded-lg border border-blue-600 flex mt-7">
        <span>View More</span> <ChevronRight />
      </button>
    </div>
  );
};

export default Solutions;
