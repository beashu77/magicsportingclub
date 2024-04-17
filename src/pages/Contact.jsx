import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border border-black w-[85%] m-auto">
      <h2 className="text-center text-light_blue underline text-5xl font-figtreeBold my-20">Contact</h2>
      {/* contactinfo setion */}
      <div className=" items-center grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-4 mb-20">
        <div className="border md:h-72 h-40 p-[1rem] rounded-lg bg-light_blue text-white items-center flex flex-col justify-center">
          <FaLocationDot className="text-white text-5xl" />
          <span className="block text-center md:text-xl text-md">1 km, NH-54,
         St Paul's High school bground,
          Belagavi District
         Karnataka, India - 590009</span>
        </div>
        <div className=" md:h-72 h-40 rounded-lg shadow-lg cursor-pointer border border-yellow_dark items-center flex flex-col justify-center  text-black">
          <FaPhoneAlt className="text-yellow_dark text-5xl" />
          <span className="block text-xl">+917019006683</span>
        </div>
        <div className=" md:h-72 h-40  rounded-lg shadow-lg cursor-pointer  border border-yellow_dark items-center flex flex-col justify-center   text-black">
          <MdEmail className="text-yellow_dark inline text-5xl" />
          <span className="block text-xl"> bhushandhuri86@gmail.com</span>
        </div>
        <div className=" md:h-72 h-40 rounded-lg shadow-lg cursor-pointer  border border-yellow_dark items-center flex flex-col justify-center   text-black">
          <FaWhatsapp className="text-yellow_dark text-5xl"/>
          <span className="block text-xl">+917019006683</span>
        </div>
      </div>

      {/* map section */}
    </div>
  );
};

export default Contact;
