import React from "react";
import PropTypes from "prop-types";
import CircleIcon from "./CircleIcon";

const SecondaryBtn = ({ text, classText, onClick }) => {
  return (
    <button className={`btn-s ${classText}`} onClick={onClick}>
      {text}
      <CircleIcon />
    </button>
  );
};

SecondaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  classText: PropTypes.string,
  onClick: PropTypes.func,
};

SecondaryBtn.defaultProps = {
  classText: "",
  onClick: () => {},
};

const PrimaryBtn = ({ text, scrollTo }) => {
  const handleClick = () => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="btn-p" onClick={handleClick}>
      {text}
    </button>
  );
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  scrollTo: PropTypes.string.isRequired,
};

export { PrimaryBtn, SecondaryBtn };
