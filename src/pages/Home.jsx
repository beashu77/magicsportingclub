import React from "react";
import kickoff from "../asset/images/home_img2.jpg";
// import "index.css"; // Import your Tailwind CSS file

const Home = () => {
  return (
    <div
      className="border border-black  m-auto h-[600px]"
      style={{
        backgroundImage: `url(${kickoff})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" items-center flex justify-center lg:justify-start  text-black relative text-center h-[100%] w-[100%] lg:p-24  bg-[#091c29] bg-opacity-40">
        <div className="relative lg:w-[50%] w-[85%]">
          <span className="lg:text-5xl ml-4 text-white font-figtreeMedium lg:block md:hidden">
            <span className="text-[#D12325] lg:text-5xl font-figtreeBold">
              MAGIC{" "}
            </span>{" "}
            SPORTING <br /> CLUB BELGAUM
          </span>
          <h2 className="md:text-xl text:xl text-white font-poppinsMedium pt-10">
            Feed your love for the game with our comprehensive football programs
            and expert coaching.
          </h2>
          <button
            // onClick={handleClick}
            className="bg-[#163246] font-poppinsSemibold text-yellow_dark w-48 h-14 text-xl mt-5 bg-opacity-60 rounded-lg hover:bg-richblue-800"
          >
            Join Magic
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
