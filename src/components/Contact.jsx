import React, { useState } from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiFillCodeSandboxSquare } from "react-icons/ai";
import { SecondaryBtn } from "./Btn";
import emailjs from "emailjs-com";

const socialData = [
  {
    icon: function () {
      return <AiFillLinkedin />;
    },
    text: "Linkedin",
    desc: "You can connect me on LinkedIn and get to know about my Passion",
    url: "https://www.linkedin.com/in/aman-reddy-pundru-272b53221/", // Replace with your LinkedIn URL
  },
  {
    icon: function () {
      return <AiFillGithub />;
    },
    text: "Github",
    desc: "If you wanna explore my projects and creativity just click here",
    url: "https://github.com/amanreddy77", // Replace with your GitHub URL
  },
  {
    icon: function () {
      return <AiOutlineInstagram />;
    },
    text: "Instagram",
    desc: "Here you can go through my pictures and quotes which I hate 'hehe'",
    url: "https://www.instagram.com/reddy_aman_77/", // Replace with your Instagram URL
  },
  {
    icon: function () {
      return <AiFillCodeSandboxSquare />;
    },
    text: "Resume",
    desc: "Here's My Resume filled with my passion that leads my life",
    url: "https://drive.google.com/file/d/1yACaNIdjn5eHaxHjqW5hxmARxG5TeXd5/view?usp=sharing", 
  },
];

const Contact = () => {
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Send email using emailjs
    emailjs
      .sendForm("service_qde1hol", "template_r573pza", event.target, "3qdcnh_91zAC7qEV8", { name, email, message })
      .then((result) => {
        console.log("Email sent successfully", result.text);
        setSnackMessage("Details sent successfully!"); // Set the snack message
        setShowSnack(true); // Show the snack
        setTimeout(() => {
          setShowSnack(false); // Hide the snack after 3 seconds
        }, 2000);
        // Optionally, you can show a success message to the user or redirect them to a thank you page
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Optionally, you can show an error message to the user
      });
  };

  return (
    
    <div className="Contact" id="contact">
      <div className="container-1">
        <span>Contact</span>
        <div className="text">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn-s">
              Get In Touch
              <CircleIcon />
            </button>
          </form>
        </div>
      </div>

      <div className="container-2">
        <Marquee pauseOnHover gradient={false}>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
          <span>Follow me on social media</span>
        </Marquee>
      </div>

      <div className="container-3">
        {socialData.map((elem, index) => (
          <div className="item" key={index}>
            <div className="upper">
              {elem.icon()}
              <SecondaryBtn
                classText={"btn-s-45"}
                text={""}
                onClick={() => {
                  const newTab = window.open(elem.url, "_blank");
                  if (newTab) {
                    newTab.focus();
                  } else {
                    window.location.href = elem.url;
                  }
                }}
              />
            </div>
            <div className="lower">
              <h3>{elem.text}</h3>
              <p>{elem.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Snack to indicate successful submission */}
      {showSnack && (
        <div className="snack">
          {snackMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
