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
    url: "https://www.linkedin.com/in/aman-reddy-pundru-272b53221/",
  },
  {
    icon: function () {
      return <AiFillGithub />;
    },
    text: "Github",
    desc: "If you wanna explore my projects and creativity just click here",
    url: "https://github.com/amanreddy77",
  },
  {
    icon: function () {
      return <AiOutlineInstagram />;
    },
    text: "Instagram",
    desc: "Here you can go through my pictures and quotes which I hate",
    url: "https://www.instagram.com/reddy_aman_77/",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_qde1hol", "template_r573pza", event.target, "3qdcnh_91zAC7qEV8")
      .then((result) => {
        setSnackMessage("Details sent successfully!");
        setShowSnack(true);
        setTimeout(() => setShowSnack(false), 2000);

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleItemClick = (url) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="Contact" id="contact">
      <div className="container-1">
        <span>Contact</span>
        <div className="text">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
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
          <div
            className="item"
            key={index}
            onClick={() => handleItemClick(elem.url)}
          >
            <div className="upper">
              {elem.icon()}
              <SecondaryBtn
                classText={"btn-s-45"}
                text={""}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from bubbling up to parent
                  handleItemClick(elem.url);
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

      {showSnack && (
        <div className="snack">
          {snackMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
