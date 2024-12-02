import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { PrimaryBtn } from "./Btn";
import "./Header.scss";

const headerMenu = [
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Blog", id: "blog", url: "https://medium.com/@reddyaman77.ar" }
];

const Header = () => {
  const [active, setActive] = useState(false);

  const handleMenuClick = (elem) => {
    if (elem.url) {
      window.location.href = elem.url;
    } else {
      setActive(false); // Closing the menu if it's a scroll link
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h1 className="logo1">Aman Reddy</h1>
        <h1 className="logo2">s/o Srinivas Reddy</h1>
        <div className={active ? `nav active` : `nav`}>
          <ul>
            {headerMenu.map((elem, index) => (
              <li key={index} onClick={() => handleMenuClick(elem)}>
                {elem.url ? (
                  <a href={elem.url}>
                    {elem.name}
                  </a>
                ) : (
                  <ScrollLink
                    to={elem.id}
                    smooth={true}
                    duration={500}
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
  );
};

export default Header;
