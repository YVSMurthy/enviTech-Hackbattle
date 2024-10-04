import React, {useState} from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      // Add form submission logic here (e.g., API call)
      // bg-gradient-to-r from-lightGreen1 via-lightGreen2 to-lightGreen6
    };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex bg-gradient-to-r from-lightBlue2 via-lightBlue1  to-white">
        <div className="leftcontact h-[70vh] w-[40vw] mt-[8vw] ml-[5vw]">
          <h2 className="text-[1vw]">SEND US YOUR QUERY</h2>
          <h1 className="text-[3vw] font-bold mb-[2vw]">Feel Free To Write</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group mb-[2vw] border-gray-500">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-input p-[0.5vw] w-[40vw]"
                required
              />
            </div>
            <div className="form-group mb-[2vw]">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="form-input p-[0.5vw] w-[40vw]"
                required
              />
            </div>
            <div className="form-group mb-[2vw]">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="form-input p-[0.5vw] w-[40vw]"
                required
              />
            </div>
            <div className="form-group mb-[2vw]">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a Message"
                className="form-textarea p-[0.5vw] w-[40vw]"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn p-[1vw] bg-green-400">
              SEND A MESSAGE
            </button>
          </form>
        </div>
        <div className="rightcontact h-[70vh] w-[40vw] mt-[8vw] ml-[8vw]">
          <h2 className="text-[1vw]">NEED ANY HELP?</h2>
          <h1 className="text-[3vw] font-bold mb-[2vw]">
            Get in Touch with us
          </h1>
          <p className="mb-[2vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            sit similique? Quasi inventore et maxime. Fuga nam inventore nobis
            iusto voluptatum dicta velit molestiae officiis, minus, nemo magnam,
            voluptatem doloremque?
          </p>
          <div className="iconanddetails flex-col">
            <div className="flex">
              <p className="mr-[1vw] mb-[3vw]">
                <BiSolidPhoneCall size={40} />
              </p>
              <p>
                <h1 className="text-[1.2vw] font-semibold">
                  Have any question?
                </h1>
                <p className="text-gray-500">Free +91 1234567890</p>
              </p>
            </div>
            <div className="flex">
              <p className="mr-[1vw] mb-[3vw]">
                <MdEmail size={40} />
              </p>
              <p>
                <h1 className="text-[1.2vw] font-semibold">Write Email</h1>
                <p className="text-gray-500">envitechhelp@gmail.com</p>
              </p>
            </div>
            <div className="flex">
              <p className="mr-[1vw] mb-[2vw]">
                <FaLocationDot size={40} />
              </p>
              <p>
                <h1 className="text-[1.2vw] font-semibold">Visit anytime</h1>
                <p className="text-gray-500">66, MG Rd, Bengaluru</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact