import React from "react";
import { SecondaryBtn } from "./Btn";
import "./Projects.scss";
import Dashboard from '../images/Dashboard.png';
import ecom from '../images/ecom.png';
import certi from '../images/certi.png';
import ai from '../images/ai.png';

const data = [
  {
    text: "E-commerce site",
    tag: "Full-Stack",
    img: ecom,
    url:"https://github.com/amanreddy77/e-commerse"
  },
  {
    text: "Ai chatbot",
    tag: "Ai-integration",
    img: ai,
    // url:""
  },
  {
    text: "Dashboard of Data representation",
    tag: "ChartJS",
    img: Dashboard,
    url:"https://github.com/amanreddy77/dashboard-final"
  },
  {
    text: "Certificate Generator",
    tag: "React-Saas",
    img: certi,
    url:"https://github.com/amanreddy77/certiGen1"
  },
];

const redirectToGithub = () => {
  const githubUrl = "https://github.com/amanreddy77"; // Replace with your GitHub URL
  const newTab = window.open(githubUrl, "_blank");
  if (newTab) {
    newTab.focus();
  } else {
    // Pop-up blocker detected, fallback to direct window location change
    window.location.href = githubUrl;
  }
};

const Projects = () => {
  return (
    <div className="projects">
      <div className="main-text">
        <h2>My Projects</h2>
        <SecondaryBtn onClick={redirectToGithub} text={"see all"} classText="btn-s-45" />
      </div>
      <div className="container">
        {data.map((elem, index) => (
          <div
            className="item"
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.714)),url(${elem.img})`,
            }}
          >
            <div className="lower-text">
              <h1>{elem.text}</h1>
              <div className="lower-text-btns">
              <SecondaryBtn 
                  text="Discover project" 
                  classText={"btn-s-45"} 
                  onClick={() => {
                    const newTab = window.open(elem.url, "_blank");
                    if (newTab) {
                      newTab.focus();
                    } else {
                      window.location.href = elem.url;
                    }
                  }} 
                />
                <span className="brandTag">{elem.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
