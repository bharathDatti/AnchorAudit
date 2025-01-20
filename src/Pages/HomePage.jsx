import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faUsers,faClock,faCheck,} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import "../css/style.css";
import { TextRevealTW } from "../componenets/TextRevealTW";
const HomePage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Hero section */}
      <section className="flex flex-col-reverse font-Parkinsans text-lg lg:flex-row items-center justify-between bg-gradient-to-r from-black to-[#2D3436] text-white text-center lg:text-left py-10 px-4 sm:px-6 md:px-8 lg:px-1 overflow-hidden">
        <div className=" p-9  py-19 pt-16 space-y-4 ">
          <h1 className="text-3xl gradient-text sm:text-4xl md:text-3xl lg:text-7xl xl:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-text bg-[length:200%_auto] animate-gradient-x">
            Find Expert Chartered Accountant <br /> Near You
          </h1>
          <TextRevealTW
            className="text-sm sm:text-lg md:text-sm  text-gray-100 "
            text=" Your one-stop platform for trusted financial guidance and accounting solutions.
 Let us connect you with the best professionals."
          />
          {/* NavLink container */}
          <div className="flex justify-center py-3 lg:justify-start">
            <NavLink
              to="/account"
              className=" button  relative px-6 py-3 rounded-lg text-white  hover:scale-95 transition-transform shadow-md"
            >
              Find Now
            </NavLink>
          </div>
        </div>
      </section>
      {/* Hero section end */}

      {/* What We Offer section start */}
      <div className="py-16 px-8 bg-gradient-to-r font-Parkinsans  from-black to-[#2D3436]">
        <h2 className="text-4xl  font-extralight text-center mb-10 text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-10 font-Parkinsans ">
          <div className="card">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-6xl text-green-600 mb-4"
            />
            <h3 className="heading">Verified Accountants</h3>
            <p>
              All accountants are certified and reviewed for trust and
              reliability.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-6xl text-blue-600 mb-4"
            />
            <h3 className="heading">Comprehensive Search</h3>
            <p>
              Easily find and filter accountants based on your specific needs.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-6xl text-red-600 mb-4"
            />
            <h3 className="heading">Detailed Profiles</h3>
            <p>Access complete information about each accountant.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faClock} className="text-6xl  mb-4" />
            <h3 className="heading">24/7 Support</h3>
            <p>Get assistance anytime with our responsive support team.</p>
          </div>
        </div>
      </div>

      {/* What We Offer section end */}

      {/* How It Works section start */}
      <div className="py-6 px-6 font-Parkinsans bg-gradient-to-r from-black to-[#2D3436]">
        <h2 className="text-4xl font-thin text-center mb-10 text-gray-100">
          How It Works
        </h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card-container">
            <div className="card-content">
              <p className="card-title">Search Accountants</p>
              <p className="card-description">
                Use our advanced search bar to find qualified professionals.
              </p>
            </div>
            <NavLink to="/" className="card-action-btn text-center">
              More info
            </NavLink>
          </div>
          <div className="card-container">
            <div className="card-content">
              <p className="card-title">
                View <br />
                Profiles
              </p>
              <p className="card-description">
                Review detailed profiles and connect with experts that suit your
                requirements.
              </p>
            </div>
            <NavLink to="/account" className="card-action-btn text-center">
              More info
            </NavLink>
          </div>
          <div className="card-container">
            <div className="card-content">
              <p className="card-title">Contact & Collaborate</p>
              <p className="card-description">
                Directly reach out to chartered accountants and start working
                together.
              </p>
            </div>
            <NavLink to="/contact" className="card-action-btn text-center">
              More info
            </NavLink>
          </div>
        </div>
      </div>

      {/* How It Works section end */}

      {/* Users Say section start */}
      <div className="py-16 px-8 bg-gradient-to-r font-Parkinsans from-black to-[#2D3436] bg-white">
        <h2 className="text-4xl font-thin text-center mb-10 text-gray-100">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg">
            <p className="italic text-gray-700">
              "This platform helped me find the right accountant for my startup
              quickly and efficiently!"
            </p>
            <h4 className="font-semibold mt-6">— John Doe</h4>
          </div>
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
            <p className="italic text-gray-700">
              "Highly recommend! The accountants I found here were professional
              and knowledgeable."
            </p>
            <h4 className="font-semibold mt-6">— Jane Smith</h4>
          </div>
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
            <p className="italic text-gray-700">
              "Fantastic user experience and excellent customer support. Truly
              top-notch."
            </p>
            <h4 className="font-semibold mt-6">— Sarah Lee</h4>
          </div>
        </div>
      </div>
      {/* Users Say section end */}
    </div>
  );
};

export default HomePage;
