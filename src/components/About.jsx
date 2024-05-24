import React, { useState } from "react";
import "./About.scss";
import CircleIcon from "./CircleIcon";
import WhatsApp from "../images/IMG_20201224_101306_120.jpg"


const data = [
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
  {
    text: "Data Analytics and Visualization Job Simulation",
    desc: "completing a Data Analytics and Visualization training simulator. This interactive demonstration ranged from doing the data manipulation of the end users, including the displaying and sentencing, from March 2024.The key areas of focus included: The key areas of focus included: Project Understanding: I stand to gain better clarity of the structure, objective, and needs of the data projects I have been commissioned upon. Data Cleaning & Modeling: Data analysis involves using approaches that prepare and harmonize data to be analyzed.",
    certificate:"https://drive.google.com/file/d/1ihhiMQeQrksQTWwnmyigr9tDNl1v-JIP/view?usp=sharing"
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);

  const redirectToCertificate = (certificateUrl) => {
    const newTab = window.open(certificateUrl, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      // Pop-up blocker detected, fallback to direct window location change
      window.location.href = certificateUrl;
    }
  };
  
  return (
    <div className="About">
      <div className="container">
        <div className="image">
          <img className="biopic"
            src={WhatsApp}
            alt="about image"
          />
        </div>
        <div className="text">
          <span>ABout</span>
          <div className="text-details">
            <h1>Skills and Technologies</h1>
            <p>
              
<pre style={{color:"yellow"}}>Programming Languages: </pre>c, Java, HTML, CSS, Python, Javascript, Artificial Intelligence, Data visualization, Data Analytics,SQL
<pre style={{ color: "yellow" }}>Libraries/Frameworks:</pre> React.js, Node.js, Express.js, TailWind CSS, Saas, Next.js, Bootstrap, Firebase.
<pre style={{ color: "yellow" }}>Tools / Platforms:</pre> Visual studio,kaali Linux, Streamlit, Langchain, llama, Figma.
<pre style={{ color: "yellow" }}>Databases:</pre>MySQL, MongoDB.
            </p>
          </div>
        </div>
      </div>
      <h1 className="heading1" style={{textAlign:"center"}}>Experience</h1>
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
