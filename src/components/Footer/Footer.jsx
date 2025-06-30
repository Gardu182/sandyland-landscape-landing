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
    <div className="bg-[#006242] text-white flex justify-between items-center text-sm font-semibold w-full p-4 pr-8 px-5 sm:px-10 lg:px-10">
      <div className="mb-2 md:text-lg lg:text-xl landscape:text-sm">
        <p>Contractors License: 1128504</p>
      </div>
      <div className="mb-2 md:text-lg lg:text-xl landscape:text-sm">
        <p>Get In Touch</p>
        <p>Phone: (619) 546-3214</p>
      </div>
      <div className="flex flex-col items-end text-center md:text-lg lg:text-xl">
        <p className="mb-2 landscape:text-sm">Follow us</p>
        <ul className="flex space-x-3">
          {footerSocial.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
              >
                <i
                  className={`${link.icon} text-xl md:text-lg lg:text-2xl hover:scale-125 transition-transform duration-300`}
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
