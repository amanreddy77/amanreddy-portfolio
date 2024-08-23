import React, { useState } from "react";
import "./About.scss";
import CircleIcon from "./CircleIcon";
import lastone from "../images/lastone.png"


const data = [
  {
    text: "Frontend Developer at HealthPulse Connect",
    desc: "converting Figma designs into real-world web applications using React.js, Tailwindcss and integrating functional requirements like chatbot assistants, I also worked on integrating the video calling system into the web app using ZegoCloud started with an idea and created a web app with full functionalities and features that could fit into the real world in which my contribution was part of the project.",
    certificate:"https://drive.google.com/file/d/1G6a-prWdgaVdjTdJT7IGw1k47yWyTny0/view?usp=sharing"
  },
  {
  text: "IBM Skill Build (Edunet Foundation) Intern ",
  desc: "IBM AI and Cloud Internship Virtual Sessions: Participated in virtual sessions covering topics such as registration in IBM, cloud computing, artificial intelligence, and data analytics.Hands-On Learning: Engaged in practical sessions including data analytics hands-on exercises and cloud-based exploratory data analysis (EDA). Chat Bot Development: Learned about chatbot development using AI technologies, including problem statement explanation in machine learning (ML) and cloud-based experiments.",
  certificate: "https://drive.google.com/file/d/187LxdMo21A42Dy0lT4CLNzjtOzRjmato/view?usp=sharing"
},
  {
    text: "Chegg India Pvt. Ltd. Freelancer",
    desc: "I worked as an expert chegg problem solver, where I used to solve a various kinds of computer science problems related to Operating systems computer languages like C, Python, Java and more",
   certificate:"https://drive.google.com/file/d/1A-e2rM_3Xytnn7KGo0YpmWb1xlY1Dq9J/view?usp=sharing"
  },
  
    
  
];

const About = () => {
  

  const redirectToCertificate = (certificateUrl) => {
    const newTab = window.open(certificateUrl, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
     
      window.location.href = certificateUrl;
    }
  };
  
  return (
    <div className="About" id="about">
      <div className="container">
        <div className="image">
          <img className="biopic"
            src={lastone}
            alt="about image"
          />
        </div>
        <div className="text" >
          <span className="about-h">ABOUT</span>
          <div className="text-details">
            <h1>Skills and Technologies</h1>
            <p className="skills">
              
<pre style={{color: "red"}}>Programming Languages: </pre>C, JavaScript, HTML, CSS, Python, Artificial Intelligence, Data visualization, Data Analytics, SQL
<pre style={{ color:"red" }}>Libraries/Frameworks:</pre> React.js, Node.js, Express.js, TailWind CSS, Saas, Next.js, Bootstrap, Firebase.
<pre style={{ color:"red" }}>Tools / Platforms:</pre> Visual studio, Docker, Streamlit, Langchain, llama, Figma.
<pre style={{ color:"red" }}>Databases:</pre>MySQL, MongoDB.
            </p>
          </div>
        </div>
      </div>
      <h1 className="heading1" style={{textAlign:"center"}} id="experience">Experience</h1>
      <div className="container container-2">
        <div className="col-1">
          {data.map((elem, index) => (
            <div
              className="item"
              key={index}
              onClick={() => redirectToCertificate(elem.certificate)}
            >
              <div className="text-2">
                <h3>{elem.text}</h3>
                <p>{elem.desc.slice(0, 500)}</p>
              </div>
              <CircleIcon />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
