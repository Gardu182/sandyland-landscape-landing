import React from "react";
import manImage from "../../assets/man-wearing-safety-vest.png";
import Carousel from "../UI/Carousel";
import About from "../About/About";

const Hero = () => {
  const scrollToSection4 = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    "Irrigation Systems",
    "Grading & Leveling",
    "Hardscape Installation",
    "Drainage Solutions",
    "Custom Welding",
    "DG Pathways",
    "Artificial Turf",
    "Retaining Walls",
    "Chain Link Fencing",
    "Wood & Steel Fencing",
  ];

  return (
    <div>
      {/* Main Section */}
      <section id="home">
        <div className="bg-[#006242] flex flex-col md:flex-row justify-center items-center my-5 mr-5 ml-5 md:h-screen">
          {/* Image */}
          <div className="w-full md:w-1/2 h-90 md:h-full">
            <img
              src={manImage}
              alt="Landscape contractor at work in San Diego"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 justify-center items-center flex flex-col text-center px-6 md:px-9 py-8">
            <div className="text-white text-base md:text-lg tracking-normal">
              <h1 className="font-extrabold mb-8">
                <span className="text-center text-3xl md:text-5xl leading-tight">
                  SANDYLAND LANDSCAPE CONTRACTOR COMPANY
                </span>
              </h1>
              <div className="text-white flex flex-col px-4 md:px-10">
                <div className="mb-4 text-lg md:text-xl">
                  Your Dream Outdoor Space, Designed to Impress!
                </div>
                <div className="text-justify mb-4 flex flex-col text-base md:text-lg">
                  <p>
                    Luxury landscaping isn’t just about aesthetics—it’s about
                    creating an experience. At Sandyland Landscape Contractor
                    Company Inc., we craft high-end outdoor spaces that enhance
                    your lifestyle and property value.
                  </p>
                  <div>
                    <div className="mt-4">
                      <strong>Let’s make your vision a reality.</strong> Fill
                      out our form today and let’s create a space that reflects
                      your success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={scrollToSection4}
              className="mt-6 px-6 py-3 inset-ring-2 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-900 transition w-2/3 md:w-auto"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section id="about">
        <div className="bg-white relative overflow-hidden pt-10 pb-15">
          <About />
        </div>
      </section>

      {/* Section Services */}
      <section id="services">
        <div className="min-h-screen flex flex-col md:flex-row items-center my-5 bg-[#f0eee8] rounded-tr-[8vw] rounded-l-lg px-4 md:px-8">
          <div className="w-full md:w-[70%] px-4 md:px-8 pt-8 pb-8">
            <Carousel />
          </div>
          <div class="w-full md:w-1/3 px-4 py-8 md:px-8">
            <div className="text-center font-semibold tracking-tight">
              <h3 className="text-3xl md:text-4xl text-[#006242] mb-3">
                Complete solutions for your outdoor space
              </h3>
            </div>
            <div className="pt-8">
              <ul className="space-y-4 w-full">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[#006242] mt-1">
                      <i className="bi bi-check-circle-fill text-xl"></i>
                    </div>
                    <p className="text-lg font-medium">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contacts */}
      <section id="contact">
        <div className="flex flex-col md:flex-row mt-8 mb-8 mx-5 lg:px-8 gap-5">
          <div class="w-full md:w-1/2 text-center px-6 md:px-10 pb-8 pt-8">
            <h3 class="text-3xl md:text-5xl font-semibold tracking-tight text-[#006242]">
              Contact sales
            </h3>
            <p class="mt-4 text-left text-lg text-black pb-6">
              Please tell us about your next project and how we can make it
              happen together. We offer free quotes for irrigation systems,
              hardscape, fencing, and more. Get started today!
            </p>
            <form action="send.php" method="POST" className="text-left mt-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="first-name"
                    class="block text-sm font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    class="block text-sm font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autocomplete="family-name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="subject"
                    class="block text-sm font-semibold text-gray-900"
                  >
                    Subject or Company
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    autocomplete="subject"
                    className="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    htmlFor="email"
                    class="block text-sm font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Enter a valid email address"
                    autocomplete="email"
                    class="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    required
                    pattern="^\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
                    title="Enter a valid phone number (e.g., 555-123-4567)"
                    placeholder="123-456-7890"
                    className="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    class="block w-full rounded-md bg-white px-3.5 py-2 mt-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  ></textarea>
                </div>
              </div>
              <div class="mt-8">
                <button
                  type="submit"
                  class="block w-full md:w-auto px-9 py-3.5 rounded-md text-white text-center text-sm font-semibold bg-[#006242] hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>

          {/* contact information */}
          <div class="w-full md:w-1/2 flex flex-col p-6 md:p-8 h-full">
            <div class="bg-[#f0eee8] p-8 rounded-tl-[4vw] rounded-br-[4vw] rounded-l-lg shadow-md">
              <span className="block mb-6 d-inline-flex mt-3">
                We’re here to help with all your urban landscape design needs.
                For questions, consultations, or to get started on your project,
                please use the contact information below.
              </span>
              <div className="flex items-start">
                <div className="font-semibold">
                  <i class="bi bi-telephone-fill mr-2"></i>
                </div>
                <div>
                  <h2 class="font-semibold">Call Us</h2>
                  <p class="mb-2"> (619) 546-3214 </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="font-semibold">
                  <i class="bi bi-envelope-at-fill mr-2"></i>
                </div>
                <div>
                  <h2 class="font-semibold">Email Us</h2>
                  <p class="text-lg/8 mb-2"> sandylandcinc@outlook.com </p>
                </div>
              </div>

              <div className="flex items-start">
                <div class="font-semibold">
                  <i class="bi bi-geo-alt-fill mr-2"></i>
                </div>
                <div>
                  <h2 class="font-semibold">Location</h2>
                  <p class="text-lg/8 mb-2">
                    San Diego, California
                    <br />
                    Service in the entire metropolitan area.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t flex">
                <div>
                  <i className="bi bi-clock-fill mr-2"></i>
                </div>
                <div>
                  <h2 className="font-semibold">Business Hours</h2>
                  <p className="text-lg text-black mb-3">
                    Monday - Friday: 7:00 AM - 7:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
