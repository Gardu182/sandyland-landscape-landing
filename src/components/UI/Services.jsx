import React, { useState } from "react";

import {
  PenTool,
  TreePine,
  Shovel,
  Calendar,
  Leaf,
  Sprout,
  Flower2,
} from "lucide-react";

const services = [
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Landscape Design",
    description:
      "We create custom designs that reflect your style and adapt to your space.",
    details:
      "Our design process begins with an initial consultation to understand your needs, followed by site analysis, and finally creating a detailed plan that includes plant selection, materials and decorative elements.",
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Tree & Plant Installation",
    description:
      "We select and install the ideal vegetation for San Diego's climate.",
    details:
      "We work with local nurseries to select healthy plants suitable for San Diego's Mediterranean climate, prioritizing native and low-water species that will thrive in your garden for many years.",
  },
  {
    icon: <Shovel className="h-8 w-8" />,
    title: "Hardscape Construction",
    description:
      "Patios, walkways, retaining walls and other structures built with precision.",
    details:
      "Our specialized team builds durable elements using high-quality materials like pavers, natural stone, stamped concrete and treated wood, creating functional spaces that perfectly complement green areas.",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Regular Maintenance",
    description:
      "Ongoing care to keep your garden in perfect condition year-round.",
    details:
      "We offer customized maintenance plans that include pruning, fertilization, organic pest control, irrigation system maintenance, and seasonal cleanup to keep your garden healthy and beautiful in every season.",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Low-Water Gardens",
    description:
      "Sustainable solutions that save water and adapt to California's climate.",
    details:
      "We design xeriscape landscapes that conserve water using drought-resistant plants, efficient irrigation systems, and landscaping techniques that minimize evaporation, helping you reduce your environmental footprint and water bills.",
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Irrigation Systems",
    description:
      "Installation and repair of efficient systems to optimize water use.",
    details:
      "We install drip irrigation systems, smart controllers and rain sensors that automatically adjust watering schedules based on weather conditions, ensuring your plants receive exactly the water they need.",
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Organic Gardening",
    description:
      "Environmentally friendly methods for a healthy and sustainable garden.",
    details:
      "We use organic practices like composting, natural mulching, biological pest control and organic fertilizers to create healthy garden ecosystems that promote biodiversity and protect people, pets and wildlife.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleDetail = (index) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="inline-block px-10 py-2 bg-emerald-900/10 rounded-full text-primary mb-12">
        Our Services
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00452E] scroll-reveal">
        Complete solutions for your outdoor space
      </h2>
      <p className="text-lg font-bold text-[#191818] scroll-reveal mb-16">
        We offer comprehensive landscaping services to create and maintain
        exceptional outdoor spaces.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-left"
          >
            <div className="mb-4 text-emerald-700">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[#191818] mb-2">{service.description}</p>

            {/* Shows only if is expanded*/}
            {expanded[index] && (
              <p className="text-sm text-[#191818] mb-2">{service.details}</p>
            )}

            <button
              onClick={() => toggleDetail(index)}
              className="flex items-center text-sm text-emerald-700 hover:underline mt-2"
            >
              {expanded[index] ? "Show less" : "Learn more"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
