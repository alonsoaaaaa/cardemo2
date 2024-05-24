// src/app/about/page.tsx
import React from "react";
import NavBar from "../components/nav-bar";
import Reviews from "../components/reviews";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="relative bg-custom-bg bg-cover bg-center h-screen p-8 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative z-10 text-white max-w-4xl mx-auto p-8 bg-opacity-75 bg-black rounded-lg shadow-lg max-h-full overflow-y-auto">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <h2 className="text-3xl font-semibold mb-4">
            We are a car company that specializes in the sale, purchase, and
            trading of semi-new cars.
          </h2>
          <p className="text-lg mb-6">
            Our mission is to provide our customers with the best service and
            quality in the market. We are a company that is committed to
            providing the best service to our customers, and we are always
            looking for new ways to improve our services and products.
          </p>
          <div className="mb-6">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
