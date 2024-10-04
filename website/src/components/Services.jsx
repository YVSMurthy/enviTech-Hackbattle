// import React from "react";
// import p1 from "../assets/p1.png";
// import p2 from "../assets/p2.png";
// import p3 from "../assets/p3.png";

// import "../css/Services.css"; // Importing the CSS file for styling

// const Services = () => {
//   return (
//     <div className="services-section">
//       {/* Left Side: Services List */}
//       <div className="services-list">
//         <div className="service-item">
//           <img
//             src={p3}
//             alt="Camera installing and upgrading"
//             className="service-icon"
//             id="service-icon-1" // Unique ID for the first image
//           />
//           <div className="service-text">
//             <h3>
//               Camera installing and
//               <br />
//               upgrading
//             </h3>
//           </div>
//         </div>

//         <div className="service-item reverse">
//           <div className="service-text">
//             <h3 id="abc">
//               24 x 7 call and
//               <br />
//               chat support
//             </h3>
//           </div>
//           <img
//             src={p1}
//             alt="24 x 7 call and chat support"
//             className="service-icon"
//             id="service-icon-2" // Unique ID for the second image
//           />
//         </div>

//         <div className="service-item">
//           <img
//             src={p2}
//             alt="Full data privacy"
//             className="service-icon"
//             id="service-icon-3" // Unique ID for the third image
//           />
//           <div className="service-text">
//             <h3>Full data privacy</h3>
//           </div>
//         </div>
//       </div>

//       {/* Right Side: Our Services Text */}
//       <div className="services-banner">
//         <h1>
//           Our
//           <br />
//           Services
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from 'react';
import Install from "../assets/247.png";
import Monitor from "../assets/autoLight.png";
import Alerts from "../assets/privacy.png";

const featuresData = [
  {
    title: "24x7 call & chat support",
    description:
      "",
    icon: "fas fa-lightbulb",
    bgImage: Install,
  },
  {
    title: "Automated Light Control",
    description:
      "",
    icon: "fas fa-video",
    bgImage: Monitor,
  },
];

const Services = () => {
  return (
    <>
      <section
        id="features"
        className="h-[100vh] w-[100vw] py-20 bg-gradient-to-r from-lightBlue2 via-lightBlue1  to-white"
      >
        <div className="container mx-auto">
          <h2 className="text-[3vw] font-extrabold mb-[5vw] ml-[6vw]">
            Our Services
          </h2>
          <div className=" grid md:grid-cols-2 gap-10 ml-[6vw] mr-[3vw]">
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
                    <i
                      className={`text-5xl text-indigo-600 ${feature.icon}`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <p className="mt-[3vw] ml-[6vw] mr-[3vw] text-black">
              24x7 Call & Chat Support provides round-the-clock assistance,
              ensuring customers receive help anytime via phone or live chat.
              This service guarantees prompt solutions, enhancing customer
              satisfaction and convenience.
            </p>
            <p className="mt-[3vw] text-black">
              It allows lights to be managed automatically based on preset
              schedules, motion detection, or environmental conditions. This
              system enhances energy efficiency and convenience by eliminating
              the need for manual operation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services