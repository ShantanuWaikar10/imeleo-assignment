import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Cloud, Database, GitFork, Laptop, Smartphone, UserRoundPen } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center mt-10">
            <div className="text-4xl text-blue-700 mb-3">Why Choose Us</div>
            <p className="w-[350px] lg:w-[450px] text-center mb-10">
                rusted expertise, cutting-edge technology, and a customer-first approach to drive your success.
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
                                Technical Expertise
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,
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
                                Business Centric Approach
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Putting business first, providing tailored IT solutions based on the unique needs of each business
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
                                Process & Quality Assurance
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.
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
                                Support
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Offering timely support and quick resolution of issues to minimize downtime and disruptions.
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
                                Innovation
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions.
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
                                Scalability
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Providing scalable IT infrastructure and services that grow as the client's business grows.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default WhyChooseUs;
