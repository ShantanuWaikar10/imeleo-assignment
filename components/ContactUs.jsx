import React from "react";
import { ChevronRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import contact_img from "../public/contact-img.webp";

const ContactUs = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center mt-10 mx-3 lg:mx-32">
            <div className="text-4xl text-blue-700 mb-3">Contact Us</div>
            <p className="w-[350px] lg:w-[450px] text-center mb-10">
                Reach out to discuss how we can transform your business with tailored solutions and expert support.
            </p>
            <div className="bg-blue-600 grid grid-cols-1 lg:grid-cols-2 items-center px-20 rounded-3xl pt-10 ">
                <div className="mb-3 lg:mb-0">
                    <Image src={contact_img} alt="Contact image" width={300} height={300} />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-4xl">We help you to grow your business faster & easier.</h1>
                    <p className="text-gray-50 text-sm">Partner with us to simplify the path to your success. We'll make reaching your business goals faster and easier than ever</p>
                    <div className="flex gap-2 text-white"><Phone /> +91-8873-33-8873</div>
                    <div className="flex gap-2 text-white"><Mail /> contact@imeleo.com</div>
                    <button className="bg-white py-2 px-6 text-blue-600 rounded-lg border w-40 flex mt-7">
                        <span>Contact Us</span> <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
