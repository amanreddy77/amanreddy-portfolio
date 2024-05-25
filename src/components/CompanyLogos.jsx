import React from "react";
import "./CompanyLogos.scss";
import reactlogo from '../images/reactlogo.svg';
import nodejs from '../images/nodejs.svg';
import python from '../images/python.svg';
import js from '../images/js.svg';
import github from '../images/github.svg';
import db from '../images/db.svg';

const companyLogo = [
  reactlogo,
  nodejs,
  python,
  js,
  github,
  db,
];

const Logos = () => {
  return (
    <div className="logos">
      <div className="container">
        {companyLogo.map((elem, index) => (
          <img src={elem} alt={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Logos;
