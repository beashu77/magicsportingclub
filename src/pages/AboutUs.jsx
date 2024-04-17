import React from "react";
import AboutUsHero from "../asset/images/AboutUs.webp";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-light_grey p-24">
        <p className="text-5xl text-center">
          <span className="relative">
            ABOUT US
            <span className="absolute inset-x-0 bottom-[-10px] h-[3px] w-[70%] bg-yellow_dark m-auto"></span>
          </span>
        </p>
      </div>

      <div className="w-[85%] m-auto">
        <p className="p-10 block">
          {" "}
          <Link to="/">Home</Link> <FaChevronRight className="inline" />
          <Link to="/aboutus">AboutUs</Link>
        </p>

        <div className="flex flex-col space-between lg:flex-row-reverse gap-5">
          <div className="lg:w-[50%]">
            <img
              src={AboutUsHero}
              alt="Hero image"
              className="w-[100%] rounded-2xl lg:h-[500px]"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col justify-center gap-5">
            <p className="text-2xl">MISSION</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quis obcaecati, necessitatibus quaerat enim iste mollitia
              exercitationem esse quas, officiis provident assumenda sed tempora
              quos odio quo aliquam omnis animi.
            </p>

            <p className="text-2xl">VISION</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              tenetur tempora soluta id deleniti, sunt dolor praesentium sit,
              repudiandae nihil possimus animi quibusdam commodi impedit velit
              odio quae enim reprehenderit.
            </p>
          </div>
        </div>

        <div className="w-[85%] m-auto text-center mt-40">
          <p className="text-5xl font-light pb-10">
            {" "}
            WHY
            <span className="font-bold"> CHOOSE MSC</span>
          </p>

          <p className="pb-10">
            Experience Khelo India Recognised Sports Education at JASE for
            Grades 5-12, featuring comprehensive sports programmes. Our top-tier
            facilities, pro-level coaching, and a tailored nutrition plan ensure
            unparalleled high-performance training. Opt for educational eminence
            at JAIN Public School with a superior CBSE syllabus
          </p>

          <div className="flex flex-col lg:flex-row gap-10 text-center">
            <div className="border border-light_grey">
              <img src={AboutUsHero} alt="images"/>

              <p className="pt-5 text-2xl">Strategic Synergy</p>

              <p className="text-left p-5 text-dark_grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel voluptas nesciunt libero velit sunt, pariatur itaque sit deserunt earum magnam! Voluptas quo blanditiis sit quos temporibus animi minima quod.</p>
            </div>
            <div className="border border-light_grey">
              <img src={AboutUsHero} alt="images"/>

              <p className="pt-5 text-2xl">Strategic Synergy</p>

              <p className="text-left p-5 text-dark_grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel voluptas nesciunt libero velit sunt, pariatur itaque sit deserunt earum magnam! Voluptas quo blanditiis sit quos temporibus animi minima quod.</p>
            </div>
            <div className="border border-light_grey">
              <img src={AboutUsHero} alt="images"/>

              <p className="pt-5 text-2xl">Strategic Synergy</p>

              <p className="text-left p-5 text-dark_grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel voluptas nesciunt libero velit sunt, pariatur itaque sit deserunt earum magnam! Voluptas quo blanditiis sit quos temporibus animi minima quod.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
