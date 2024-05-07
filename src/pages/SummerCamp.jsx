import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import summerimg1 from "../asset/images/summer_img1.webp";
import summerimg2 from "../asset/images/summer_img2.webp";
import summerimg3 from "../asset/images/summer_img3.webp";
import summerimg4 from "../asset/images/summer_img4.webp";
import summerimg5 from "../asset/images/summer_img5.webp";
import summerimg6 from "../asset/images/summer_img6.webp";
import summerimg7 from "../asset/images/summer_img7.webp";
import { FaTag } from "react-icons/fa6";

const SummerCamp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
    `${summerimg1}`,
    `${summerimg2}`,
    `${summerimg3}`,
    `${summerimg4}`,
    `${summerimg5}`,
    `${summerimg6}`,
    `${summerimg7}`,
  ];

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    mobile: "",
    childName: "",
    childDOB: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Clear form fields after submission if needed
    setFormData({
      parentName: "",
      email: "",
      mobile: "",
      childName: "",
      childDOB: "",
      location: "",
      message: "",
    });
  };
  return (
    <div className="border border-black box-content overflow-hidden z-0">
      {/* slider for summer camp */}
      <div className="bg-light_grey">
        <Slider {...settings} className="pt-6 pb-6 m-auto">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="summer-camp"
                className="h-[400px] w-[95%] rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className=" items-center flex justify-center gap-3 border w-[50%] text-xl rounded-lg m-auto my-20 py-5 bg-light_blue text-white">
        <span>
          <FaTag style={{ color: "red", height: "30px", width: "30px" }} />
        </span>{" "}
        Attractive discounts for multiple sports or additional packs
      </div>

      {/* forms for packages */}
      <div className="border items-center flex justify-between gap-5 w-[85%] m-auto">
        {/* packages section */}
        <div className="border border-yellow w-[50%] bg-[#455531] p-10 rounded-lg text-white">
          <h1 className="text-center text-2xl font-figtreeBold">
            BUY SUMMER CAMP MEMBERSHIP
          </h1>
          <h2 className="text-center text-xl font-figtreeMedium mb-10">
            Select preferences & purchase your pack below.
          </h2>

          <div className="mx-auto bg-white text-black shadow-md rounded-lg overflow-hidden flex justify-between">
            <div className="px-4 py-2">
              <div className="text-xl font-bold text-gray-800">Camp 2</div>
              <div className="text-sm text-gray-600">
                April 22nd to May 12th
              </div>
              <div className="mt-2">
                <span className="text-green-600 font-bold text-xl">₹5,499</span>
                <span className="text-gray-600"> / 5,500</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-800 font-bold">Swimming</span>
                <span className="text-gray-600"> (Mon-Sun)</span>
              </div>
              <div className="text-sm text-gray-600">
                16 classes + 2 compensation classes
              </div>
            </div>
            <div className="px-4 py-2 items-center flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* form details section */}
        <div className=" bg-light_grey w-[50%] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-2xl font-figtreeBold text-[#D12325]">
            REACH OUT TO US
          </h1>
          <h2 className="text-center font-figtreeRegular mb-10 text-yellow">
            Fill in the details and our expert will call you soon!
          </h2>
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="parentName"
              >
                Parent's Name
              </label>
              <input
                className="shadow appearance-none border border-light_grey  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="parentName"
                type="text"
                name="parentName"
                placeholder="Enter parent's name"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile
              </label>
              <input
                className="shadow appearance-none border border-light_grey rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="number"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="childName"
              >
                Child's Name
              </label>
              <input
                className="shadow appearance-none border border-light_grey rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="childName"
                type="text"
                name="childName"
                placeholder="Enter child's name"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="childDOB"
              >
                Child's Date of Birth
              </label>
              <input
                className="shadow appearance-none border border-light_grey rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="childDOB"
                type="date"
                name="childDOB"
                value={formData.childDOB}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="shadow appearance-none border border-light_grey rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-light_grey rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-yellow_dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[40%]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SummerCamp;
