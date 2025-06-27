import manImage from "../../assets/man-wearing-safety-vest.png";
import Carousel from "../UI/Carousel";
import About from "../About/About";
import Services from "../UI/Services";

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
              className="h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 text-[#FFFFFF] justify-center flex-col py-8 px-4 md:py-5 md:px-5 text-center text-content lg:py-8 lg:px-8">
            <div className="tracking-normal">
              <h1 className="font-bold mb-3 md:py-3 text-xl lg:text-3xl">
                SANDYLAND LANDSCAPE CONTRACTOR COMPANY
              </h1>
              <div className="flex-col">
                <div className="mb-3 text-lg lg:text-lg">
                  Your Dream Outdoor Space, Designed to Impress!
                </div>
                <div className="text-justify font-normal text-base lg:text-lg">
                  <p>
                    Luxury landscaping isn’t just about aesthetics—it’s about
                    creating an experience. At Sandyland Landscape Contractor
                    Company Inc., we craft high-end outdoor spaces that enhance
                    your lifestyle and property value.
                  </p>
                  <div>
                    <div className="mt-3 mb-3 text-base lg:text-lg lg:py-2 xl:mb-10">
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
              className="mt-3 px-2 py-2 inset-ring-2 text-sm lg:text-lg rounded-lg shadow-lg hover:bg-emerald-800 transition w-2/3 md:w-auto"
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
          <h5 className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary">
            Gallery
          </h5>
          <Carousel />
        </div>
      </section>

      {/* Section Testimonials */}
      <section id="testimonials">
        <div className="text-center items-center py-10 px-5 relative">
          <h5 className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary mb-12">
            Testimonials
          </h5>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#00452E]">
            Read What Others Have to Say
          </h1>
          <div className="max-w-5xl mx-auto gap-8 block md:flex lg:flex-row xl:flex-row">
            <div className="bg-[#f0eee8] p-8 rounded-xl">
              <img
                class="w-24 h-24 mb-3 rounded-full mx-auto shadow-lg"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                Their knowledge of California native plants and efficient
                irrigation systems transformed our garden into an oasis that
                requires very little maintenance."
              </p>
            </div>
            <div className="bg-[#f0eee8] p-8 rounded-xl">
              <img
                class="w-24 h-24 mb-3 rounded-full mx-auto shadow-lg"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                Their knowledge of California native plants and efficient
                irrigation systems transformed our garden into an oasis that
                requires very little maintenance."
              </p>
            </div>
            <div className="bg-[#f0eee8] p-8 rounded-xl">
              <img
                class="w-24 h-24 mb-3 rounded-full mx-auto shadow-lg"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                Their knowledge of California native plants and efficient
                irrigation systems transformed our garden into an oasis that
                requires very little maintenance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contacts */}
      <section id="contact">
        <div className="flex flex-col md:flex-row mt-8 mb-8 mx-5 lg:px-8 gap-5 md:px-5 sm:text-base lg:text-lg">
          <div class="w-full md:w-1/2 text-center px-6 md:px-10 pb-8 pt-8 rounded-xl border border-gray-100">
            <h3 class="text-3xl md:text-4xl font-semibold tracking-tight text-[#00452E]">
              Contact sales
            </h3>
            <p class="mt-4 text-left text-lg text-black">
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
          <div class="md:w-1/2 flex flex-col h-full">
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
