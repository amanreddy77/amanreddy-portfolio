import React from "react";
import { SecondaryBtn } from "./Btn";
import "./Service.scss";

const serviceData = [
  {
    text: "FULL-STACK",
    desc: "Developed a strong Knowledge in building full-stack web apps like E-commerce,Goal-Tracker.",
  },
  {
    text: "AI",
    desc: "I have Integrated Artificial Intelligence Using API keys in Many of my Projects",
  },
  {
    text: "API",
    desc: "Working on API's for providing access to functionality and data across different platforms and services.",
  },
  {
    text: "Python",
    desc: "I am good in Python Libraries and i can also create user interfaces using STREAMLIT and GRADIO",
  },
];

const Card = ({ title, desc }) => {
  return (
    <div className="ServiceCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      <SecondaryBtn text={`ABOUT ${title}`} classText={"btn-s-45"} />
    </div>
  );
};

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        {serviceData.map((elem, index) => (
          <Card key={index} title={elem.text} desc={elem.desc} />
        ))}
      </div>
    </section>
  );
};

export default Service;
