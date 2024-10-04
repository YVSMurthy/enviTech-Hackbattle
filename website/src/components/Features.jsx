// Features.jsx
import React from "react";
import Install from "../assets/camera3.png";
import Monitor from "../assets/environment.png";
import Alerts from "../assets/privacy.png";

const featuresData = [
  {
    title: "Detection via Camera",
    description:
      "Installed cameras used to detect presence and automatically turn off lights and fans if none is detected.",
    icon: "fas fa-lightbulb",
    bgImage: Install,
  },
  {
    title: "Energy Savings & Automation",
    description:
      "This setup cuts energy use by automating appliances based on occupancy.",
    icon: "fas fa-video",
    bgImage: Monitor,
  },
  {
    title: "Privacy & Security",
    description:
      "All data is processed locally on the user's device, ensuring privacy with no external transmission.",
    icon: "fas fa-mobile-alt",
    bgImage: Alerts,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="h-[100vh] w-[100vw] py-20 bg-gradient-to-r from-lightBlue2 via-lightBlue1  to-white"
    >
      <div className="container mx-auto">
        <h2 className="text-[3vw] font-extrabold mb-[5vw] ml-[6vw]">Product</h2>
        <div className=" grid md:grid-cols-3 gap-10 ml-[6vw] mr-[3vw]">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="feature-box relative bg-white p-6 shadow-md rounded-lg text-center overflow-hidden h-[50vh]"
              style={{
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <i className={`text-5xl text-indigo-600 ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
