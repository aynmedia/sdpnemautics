/** @format */

import ContactForm from "@/components/contactForm";
import PageHeader from "@/components/ui/page_header";
import React from "react";
import { FaPhone } from "react-icons/fa";

const page = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        currentPage="Contact Us"
        imageSrc="/images/ContactUs_Img.webp"
      />
      <div className="relative w-full  p-4 md:p-16 ">
        {/* <Image
        src={warehouse}
        alt='contact'
        width={500}
        height={300}
        className='absolute inset-0 w-full h-full object-cover'
      /> */}

        <div className="z-10 grid grid-cols-1 md:grid-cols-3 flex-col bg-white rounded-lg h-full shadow-2xl -mt-[200px]">
          <div className="flex md:col-span-2 flex-col text-left  shadow-inner-xl shadow-gray-500/80 p-6 md:p-24">
            <p className="text-3xl font-bold text-black">Get In Touch</p>
            <p className="text-gray-500 my-8 text-md">
              Please complete the form below, to request a quote, and we’ll be
              in touch. Or you can call us <b>+91 9986523331</b> and our
              specialists will provide the necessary help!
            </p>
            <ContactForm />
          </div>
          <div className="text-left md:col-span-1 z-10 shadow-2xl p-24">
            <p className="text-lg text-black">
              We take great pride in everything that we do, control over
              products allows us to ensure our customers receive the best
              quality service.
            </p>
            <p className="text-gray-500 my-8 text-lg font-bold">
              S.D. PNEUMATICS
            </p>
            <p className="text-gray-500 my-8 text-lg">
              456, 4th Main, 1st Stage, 2nd Phase, Manjunath Nagar, Rammurthy
              Nagar, Bangalore, Karnataka, India - 560010
            </p>
            <p className="text-gray-500 my-8 text-lg flex items-center">
              <FaPhone className="text-green mr-4" size={18} />
              08069247354-095 <br />
              +91-9986523331
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default page;
