import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "../public/battery-swap.webp";
import image2 from "../public/cattle-insurance-platform.webp";
import image3 from "../public/ev-renting.webp";
import { ChevronRight } from "lucide-react";

const Blogs = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center pt-10 pb-5">
            <div className="text-4xl text-blue-700 mb-3">Blogs</div>
            <p className="w-[350px] lg:w-[450px] text-center mb-10">
                Explore our blog for expert tips, industry insights, and engaging content on the latest trends. Stay informed and inspired!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Image src={image1} className="rounded-md" />
                        <div className="bg-white w-40 py-1 px-5 text-black rounded-2xl border border-blue-600 flex mt-7">
                            January 10, 24
                        </div>
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
                        <div className="bg-white w-44 py-1 px-5 text-black rounded-2xl border border-blue-600 flex mt-7">
                            September 1, 24
                        </div>
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
                            <div className="bg-white w-40 py-1 px-5 text-black rounded-2xl border border-blue-600 flex mt-7">
                                January 10, 24
                            </div>
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

            </div>
            <button className="bg-white py-2 px-6 text-black rounded-lg border border-blue-600 flex mt-7">
                <span>View More</span> <ChevronRight />
            </button>
        </div>
    );
};

export default Blogs;
