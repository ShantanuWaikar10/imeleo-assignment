import About from "@/components/About";
import Blogs from "@/components/Blogs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Headers from "@/components/Headers";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Headers/>
      <Solutions/>
      <Services/>
      <Blogs/>
      <About/>
      <Founder/>
      <WhyChooseUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

// bug in blogs card
