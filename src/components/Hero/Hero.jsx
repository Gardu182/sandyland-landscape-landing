import manImage from "../../assets/man-wearing-safety-vest.png";
import Carousel from "../UI/Carousel";
import About from "../About/About";
import Services from "../UI/Services";
import Card from "../UI/Card";

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
          <div className="md:w-1/2 md:h-full">
            <img
              src={manImage}
              alt="Landscape contractor at work in San Diego"
              className="object-cover w-full md:h-full"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 text-[#FFFFFF] justify-center flex-col py-10 px-6 md:py-5 md:px-5 text-center lg:py-8 lg:px-8 mx-auto max-w-screen-sm">
            <div className="tracking-normal">
              <h1 className="font-bold mb-3 md:py-3 text-lg md:text-2xl lg:text-3xl break-words">
                SANDYLAND LANDSCAPE CONSTRUCTION INC.
              </h1>
              <div className="flex flex-col">
                <div className="mb-3 text-sm lg:text-lg">
                  <h2 className="break-words">
                    Your Dream Outdoor Space, Designed to Impress!
                  </h2>
                </div>
                <div className="text-justify font-normal text-base lg:text-lg break-words">
                  <p>
                    Luxury landscaping isn’t just about aesthetics—it’s about
                    creating an experience. At Sandyland Landscape Contractor
                    Company Inc., we craft high-end outdoor spaces that enhance
                    your lifestyle and property value.
                  </p>
                  <div>
                    <div className="mt-3 mb-3 text-base lg:text-lg lg:py-2 xl:mb-10 break-words">
                      <p>
                        <strong>Let’s make your vision a reality.</strong> Fill
                        out our form today and let’s create a space that
                        reflects your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={scrollToSection4}
              className="mt-3 px-5 py-2 md:mb-3 inset-ring-2 text-sm lg:text-lg rounded-lg shadow-lg hover:bg-emerald-800 transition w-auto"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section id="about">
        <div className="bg-white relative overflow-hidden pt-10 pb-15 p-5">
          <About />
        </div>
      </section>

      {/* Section Services */}
      <section id="services">
        <div className="py-20 bg-primary/5 relative bg-[#f0eee8]">
          <Services />
        </div>
      </section>

      {/* Section Gallery */}
      <section id="gallery">
        <div className="text-center items-center py-20 bg-primary/5 relative">
          <h5 className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary lg:order-1 sm:text-base lg:text-lg">
            Gallery
          </h5>
          <Carousel />
        </div>
      </section>

      {/* Section Testimonials */}
      <section id="testimonials">
        <div className="text-center items-center py-5 px-5 relative">
          <h5 className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary mb-10 lg:order-1 sm:text-base lg:text-lg">
            Testimonials
          </h5>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#00452E]">
            Read What Others Have to Say
          </h1>
          <div className="max-w-5xl mx-auto gap-8 block md:flex lg:flex-row xl:flex-row p-5">
            <Card />
          </div>
        </div>
      </section>

      {/* Section Contacts */}
      <section id="contact">
        <div className="flex flex-col md:flex-row mt-8 mb-8 lg:px-8 gap-3 md:px-5 p-5 sm:text-base lg:text-lg">
          <div class="w-full md:w-1/2 text-center pb-8 pt-8 p-6 rounded-xl border border-gray-100">
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#00452E]">
              Contact sales
            </h3>
            <p class="mt-4 text-left text-lg text-black">
              Please tell us about your next project and how we can make it
              happen together. We offer free quotes for irrigation systems,
              hardscape, fencing, and more. Get started today!
            </p>
            <form
              action="send.php"
              method="POST"
              className="text-left mt-8"
              enctype="multipart/form-data"
            >
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

              <div class="sm:col-span-2">
                <label
                  for="file"
                  class="block text-sm font-semibold text-gray-900 mb-2 mt-2"
                >
                  Attachment
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              <div class="mt-5">
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
          <div class="md:w-1/2 flex flex-col h-full px-4 py-10 md:py-0">
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
                  <p class="wrap-anywhere md:text-base lg:text-lg mb-2">
                    richard.muro@sandylandlandscape.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div class="font-semibold">
                  <i class="bi bi-geo-alt-fill mr-2"></i>
                </div>
                <div>
                  <h2 class="font-semibold">Location</h2>
                  <p class="lg:text-lg mb-2">
                    San Diego, California
                    <br />
                    Service in the entire California.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t flex">
                <div>
                  <i className="bi bi-clock-fill mr-2"></i>
                </div>
                <div>
                  <h2 className="font-semibold">Business Hours</h2>
                  <p className="lg:text-lg text-black mb-3">
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
