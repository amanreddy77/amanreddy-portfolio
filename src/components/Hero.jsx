import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const phrases = [
  ["Hello, This is ", "Aman Reddy", ", I'm a Web Developer!"],
  ["Hello, This is ", "Aman Reddy", ", I'm a UI Designer!"],
  ["Hello, This is ", "Aman Reddy", ", I'm a MERN Stack Developer!"]
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    },3950); // Change phrase every 4 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>
            FULL-STACK <br /> Developer
          </h1>
          <div className="text-desc">
            <p className="typing-effect">
              {phrases[currentPhrase].map((part, index) => (
                part === "Aman Reddy" ? (
                  <span key={index} className="highlight">{part}</span>
                ) : (
                  part
                )
              ))}
            </p>
            <SecondaryBtn text={"Learn more"} onClick={() => { /* handle scroll */ }} classText="btn-s-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
