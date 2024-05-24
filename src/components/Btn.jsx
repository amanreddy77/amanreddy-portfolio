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

const PrimaryBtn = ({ text }) => {
  return <button className="btn-p">{text}</button>;
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export { PrimaryBtn, SecondaryBtn };
