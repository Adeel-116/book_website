import React from "react";
import Logo from "../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";

function Header() {
  const navItems = [
    { name: "Home" },
    { name: "About" },
    {
      name: "Services",
      dropdown: [
        { name: "Web Development" },
        { name: "Mobile Development" },
        { name: "Graphic Design" },
        { name: "SEO" },
      ],
    },
    { name: "Case Studies" },
    { name: "Testimonials" },
    { name: "Faqs" },
    { name: "Contact" },
  ];

  const buttons = ["1-800-123-4567", "Book A Call", "Get a Quote", "Live Chat"];

  return (
    <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] h-auto py-3 flex justify-between items-center mx-auto">
      <div className="w-fit logo flex  items-center">
        <img src={Logo} alt="Logo" width={"130px"} />
      </div>

      <div className="w-fit ">
        <ul className="lg:flex hidden xl:space-x-6 space-x-3">
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              
              <div className="flex items-center">
                <span className="text-gray-800 font-medium">{item.name}</span>
                {item.dropdown && (
                  <IoMdArrowDropdown color="black" className="2xl:text-lg xl:text-sm text-[15px]" />
                )}
              </div>

              {item.dropdown && (
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg z-10">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 text-sm text-gray-700"
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-fit lg:flex hidden space-x-1">
        {buttons.map((label, index) => (
          <Button text={label} />
        ))}
      </div>
    </div>
  );
}

export default Header;
