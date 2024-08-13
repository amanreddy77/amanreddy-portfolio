import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const phrases = [
  "Hi, my name is Aman, I'm a Web Developer!",
  "Hi, my name is Aman, I'm a UI Designer!",
  "Hi, my name is Aman, I'm a MERN Stack Developer"
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
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
              {phrases[currentPhrase]}
            </p>
            <SecondaryBtn text={"Learn more"} onClick={() => { /* handle scroll */ }} classText="btn-s-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
