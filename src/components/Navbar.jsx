import React, { useState } from "react";
import { Link } from "react-router-dom";
import clublogo from "../asset/images/magic_logo1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when a menu item is clicked
    // Perform additional actions if needed
  };

  return (
    <nav className=" h-24 bg-dark_blue z-50  text-white font-figtreeRegular top-0 w-full  shadow-lg sticky">
      <div className="mx-auto w-[85%]">
        <div className="items-center flex  justify-between">
          <div className=" inset-y-0 left-0 items-center flex  md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {/* <span className="sr-only">Toggle menu</span> */}
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="items-center flex justify-between h-24 w-full">
           <Link to='/'>
           <div className="flex items-center cursor-pointer">
              <img
                className="md:h-[70px] md:w-[70px] w-[60px] h-[60px] rounded-full"
                src={clublogo}
                alt="club_logo"
              />{" "}
              <span className="lg:text-xl ml-4 font-figtreeMedium lg:block md:hidden">
                <span className="text-[#D12325] lg:text-2xl font-figtreeBold">
                  MAGIC{" "}
                </span>{" "}
                SPORTING <br /> CLUB BELGAUM
              </span>
            </div></Link> 

            <div className="hidden md:block font-figtreeMedium">
              <div className="flex lg:gap-10 gap-5">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/aboutus">
                  <div
                    className={`hover:text-yellow_dark ${
                      activeItem === "aboutus" ? "text-yellow_dark" : ""
                    }`}
                    onClick={() => handleItemClick("aboutus")}
                  >
                    ABOUT US
                  </div>
                </Link>
                <Link to="/batches">
                  <div
                    className={`hover:text-yellow_dark ${
                      activeItem === "batches" ? "text-yellow_dark" : ""
                    }`}
                    onClick={() => handleItemClick("batches")}
                  >
                    {" "}
                    BATCHES
                  </div>
                </Link>{" "}
                <Link to="/tournaments">
                  <div
                    className={`hover:text-yellow_dark ${
                      activeItem === "tournaments" ? "text-yellow_dark" : ""
                    }`}
                    onClick={() => handleItemClick("tournaments")}
                  >
                    TOURNAMENTS
                  </div>
                </Link>
                <Link to="/summercamp">
                  <div
                    className={`bg-light_blue hover:text-pink-900 h-6 w-32 rounded-lg items-center flex justify-center  ${
                      activeItem === "summercamp" ? "text-pink-900" : ""
                    }`}
                    onClick={() => handleItemClick("summercamp")}
                  >
                    SUMMER CAMP
                  </div>
                </Link>
                <Link to="/contact">
                  <div
                    className={`hover:text-yellow_dark ${
                      activeItem === "contact" ? "text-yellow_dark" : ""
                    }`}
                    onClick={() => handleItemClick("contact")}
                  >
                    {" "}
                    CONTACT US
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`md:hidden bg-dark_blue ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link to="/aboutus">
            <div
              className="hover:text-yellow_dark py-2"
              onClick={() => {
                handleMenuItemClick();
                // Add additional actions for this menu item
              }}
            >
              ABOUT US
            </div>
          </Link>
          <Link to="/batches">
            <div
              className="hover:text-yellow_dark pb-2"
              onClick={() => {
                handleMenuItemClick();
                // Add additional actions for this menu item
              }}
            >
              {" "}
              BATCHES
            </div>
          </Link>{" "}
          <Link to="/tournaments">
            <div
              className="hover:text-yellow_dark pb-2"
              onClick={() => {
                handleMenuItemClick();
                // Add additional actions for this menu item
              }}
            >
              TOURNAMENTS
            </div>
          </Link>
          <Link to="/summercamp">
            <div
              className="hover:text-yellow_dark mb-2"
              onClick={() => {
                handleMenuItemClick();
                // Add additional actions for this menu item
              }}
            >
              SUMMER CAMP
            </div>
          </Link>
          <Link to="/contact">
            <div
              className="hover:text-yellow_dark pb-2"
              onClick={() => {
                handleMenuItemClick();
                // Add additional actions for this menu item
              }}
            >
              {" "}
              CONTACT US
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
