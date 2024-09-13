import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { ChevronRight, Cloud, Database, GitFork, Laptop, Smartphone, UserRoundPen } from "lucide-react";

const Services = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center mt-5 pb-5 pt-5 bg-gray-50">
            <div className="text-4xl text-blue-700 mb-3">Services</div>
            <p className="w-[350px] lg:w-[450px] text-center mb-10">
                Comprehensive business services designed to support growth and enhance your competitive edge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Laptop className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                Web App Development
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Smartphone className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                App Development
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Crafting exceptional mobile experiences that revolutionize user engagement on the go. Our solutions deliver intuitive, high-performance.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <UserRoundPen className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                IT Consultancy
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Strategic IT consulting services to guide businesses through the dynamic technology landscape. We provide expert insights and solutions to optimize.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <GitFork className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                Software Development
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Enterprise-grade, bespoke solutions that perfectly align with your business needs and goa
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Cloud className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                Cloud Services
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Empower businesses to harness the full potential of cloud computing with solutions that ensure flexibility, scalability.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="border border-gray-200 p-4" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <Database className="bg-slate-200 p-3 rounded-full" color="blue" size={50} />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="text-blue-600"
                            >
                                Data Engineering
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale.
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

export default Services;
