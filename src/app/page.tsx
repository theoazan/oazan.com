import AboutMe from "@/components/AboutMe";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import FooterContent from "@/components/FooterContent";
import { Testimonials } from "@/components/Testimonial";
import { HomeBackground } from "@/components/Home";
import Navbar from "@/components/Navbar";

import { Team } from "@/components/Team";
import Image from "next/image";


export default function Home() {
  return (
   <>
   <Navbar />
   <HomeBackground/>
   <AboutMe/>
   <Services/>
   {/* <Testimonials/> */}
   <ContactUs/> 
   <FooterContent/>
   </>
  );
}
