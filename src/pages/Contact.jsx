import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" w-[85%] m-auto">
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
      <div className="mb-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30705.021240297705!2d74.50612048566846!3d15.84988663410584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf673b37dc96d9%3A0xd9b3ddc37c147997!2sMagic%20Sporting%20Club!5e0!3m2!1sen!2sin!4v1713364614251!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full md:h-[400px] h-[350px]"></iframe>
      </div>
    </div>
  );
};

export default Contact;
