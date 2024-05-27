import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { PrimaryBtn } from "./Btn";
import "./Header.scss";

const headerMenu = [
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Blog", id: "blog", url: "https://medium.com/p/47e1b51b6e83" }
];

const Header = () => {
  const [active, setActive] = useState(false);

  const handleMenuClick = (elem) => {
    if (elem.url) {
      window.location.href = elem.url;
    } else {
      setActive(false); // Close the menu if it's a scroll link
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Aman Reddy </h1>
        <h1 className="logo">s/o Srinivas Reddy </h1>
        <div className={active ? `nav active` : `nav`}>
          <ul>
            {headerMenu.map((elem, index) => (
              <li key={index}>
                {elem.url ? (
                  <a
                    href={elem.url}
                    onClick={() => handleMenuClick(elem)}
                  >
                    {elem.name}
                  </a>
                ) : (
                  <ScrollLink
                    to={elem.id}
                    smooth={true}
                    duration={500}
                    onClick={() => handleMenuClick(elem)}
                  >
                    {elem.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
          <div className="btns-groups">
            <PrimaryBtn
              text="Get in touch"
              scrollTo="contact"
              onClick={() => setActive(false)}
            />
          </div>
          <div
            className={active ? `hamburger active` : `hamburger`}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
