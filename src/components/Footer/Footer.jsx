import React from "react";

const footerSocial = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61568125952923",
    icon: "bi bi-facebook",
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: "bi bi-instagram",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#006242] flex justify-between items-center w-full p-4 pr-8">
      <div className="text-white text-lg font-semibold mb-2 md:text-2xl">
        <p>Contractors License: 1128504</p>
      </div>
      <div className="text-white text-lg font-semibold mb-2">
        <p>Get In Touch</p>
        <p className="text-lg">Phone: (619) 546-3214</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-white text-lg font-semibold mb-2">Follow us</p>
        <ul className="flex space-x-6">
          {footerSocial.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
              >
                <i
                  className={`${link.icon} text-3xl text-white hover:scale-125 transition-transform duration-300`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
