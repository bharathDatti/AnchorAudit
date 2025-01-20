import React from "react";
import accountimg from "../assets/accimg.webp";
import { TextRevealTW } from '../componenets/TextRevealTW';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-black to-[#2D3436] text-white py-10 font-Parkinsans">
      <div className="min-h-screen flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-semibold text-center  mb-6">
            About Us
          </h1>

          {/* Introduction Section */}
          <TextRevealTW className="text-center font-Parkinsans font-thin text-l mb-12" text="
            Welcome to CharteredPro, your trusted platform for connecting with highly qualified Chartered Accountants. Our mission is to empower individuals, entrepreneurs, and businesses with reliable financial
            solutions and expert advice." />

          {/* Main Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Vision</h2>
              <p className="text-lg mb-4">
                We envision a future where accessing professional financial
                services is seamless, efficient, and personalized. Through
                innovation and commitment, we aim to foster financial literacy
                and elevate global standards in accountancy.
              </p>
            </div>

            {/* Image Section */}
            <div>
              <img
                src={accountimg}
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
           {/* Additional Section */}
           <div className="mt-12 text-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Our Commitment to You
            </h2>
            <p className=" text-lg mb-4">
              At CharteredPro, we are committed to upholding the highest
              standards of integrity, professionalism, and customer
              satisfaction. Whether you are seeking assistance for personal
              financial matters or complex business strategies, we have the
              expertise and passion to guide you.
            </p>
            <p className=" text-lg">
              Join our growing community and experience a platform where your
              financial goals and success are our priority.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
