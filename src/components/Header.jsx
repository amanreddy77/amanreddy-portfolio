import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { PrimaryBtn } from "./Btn";
import "./Header.scss";

const headerMenu = [
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Blog", id: "blog" }
];

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Aman Reddy </h1>
        <h1 className="logo">s/o Srinivas Reddy </h1>
        <div className={active ? `nav active` : `nav`}>
          <ul>
            {headerMenu.map((elem, index) => (
              <li key={index}>
                <ScrollLink
                  to={elem.id}
                  smooth={true}
                  duration={500}
                  onClick={() => setActive(false)}
                >
                  {elem.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="btns-groups">
            <PrimaryBtn
              text="Get in touch"
              scrollTo="contact"
              onClick={() => setActive(false)}
            />
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
    </div>
  );
};

export default Header;
