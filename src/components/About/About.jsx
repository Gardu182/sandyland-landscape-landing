import React from "react";
import { useEffect, useRef } from "react";
import { Award, CheckCircle, Calendar, Users } from "lucide-react";

const About = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-[#00452E]" />,
      title: "10+ Years of Experience",
      description: "Over a decade transforming outdoor spaces in California.",
    },
    {
      icon: <Award className="h-6 w-6 text-[#00452E]" />,
      title: "Certified & Licensed",
      description: "We hold all necessary licenses and certifications.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#00452E]" />,
      title: "Professional Team",
      description: "Skilled personnel with extensive landscaping experience.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00452E]" />,
      title: "Custom Designs",
      description: "We create unique designs tailored to your needs and style.",
    },
  ];

  return (
    <div className="text-base">
      <div className="flex flex-col items-center lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/2 lg:order-1 sm:text-base lg:text-lg">
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="scroll-reveal"
          >
            <span className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary mb-12">
              About Us
            </span>

            <h2 className="text-2xl md:text-4xl text-center font-bold mb-6 text-[#00452E]">
              Landscaping Experts Transforming Outdoor Spaces
            </h2>

            <p className="text-gray-700 mb-12 leading-relaxed">
              At Sandyland Landscape Construction Inc., we specialize in turning
              outdoor spaces into natural works of art. Our passionate and
              experienced team brings your vision to life through services like
              <strong>
                irrigation systems, grading, hardscape installations, drainage
                solutions, welding, DG pathways, artificial turf, retaining
                walls, chain link fencing,
              </strong>
              and <strong>wood & steel fences</strong>. With attention to detail
              and high-quality materials, we deliver long-lasting outdoor
              transformations across California.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (elementsRef.current[index + 1] = el)}
                  className="flex items-start space-x-4 scroll-reveal"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-2 rounded-full bg-emerald-900/15">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-base sm:text-xl lg:text-2xl md:w-xl lg:w-1/2 order-1 lg:order-2 lg:p-5">
          <div
            ref={(el) => (elementsRef.current[5] = el)}
            className="relative scroll-reveal"
          >
            <div className="absolute inset-0 bg-emerald-900/20 rounded-2xl transform rotate-3 scale-105"></div>
            <img
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1035&auto=format&fit=crop"
              alt="Landscaping team at work"
              className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl z-20">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-emerald-900">100+</span>
                <span className="text-gray-600 font-medium leading-tight">
                  Completed
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
