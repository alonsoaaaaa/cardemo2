// src/app/about/page.tsx
import React from "react";
import NavBar from "../components/nav-bar";

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
            restoration of classic vehicles.
          </h2>
          <p className="text-lg mb-6">
            Founded in 1990, Chrome Motorcars has been dedicated to preserving
            the legacy of classic automobiles. Our team of experts is passionate
            about bringing vintage cars back to their former glory and helping
            enthusiasts find their dream vehicles.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Our Services:</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Classic Car Sales</li>
              <li>Vehicle Restoration</li>
              <li>Customization and Upgrades</li>
              <li>Maintenance and Repairs</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Our Mission:</h3>
            <p className="text-lg">
              To provide exceptional service and expertise to classic car
              enthusiasts, ensuring that each vehicle we handle is treated with
              the utmost care and attention to detail.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
            <p className="text-lg">
              With over 30 years of experience, a dedicated team of
              professionals, and a passion for classic cars, Chrome Motorcars is
              your trusted partner in the world of vintage automobiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
