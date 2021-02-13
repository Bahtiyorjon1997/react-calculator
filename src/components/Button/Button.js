import React from "react";
import "./Button.css";

const Button = ({ number, ...props }) => <button {...props}> {number} </button>;

export default Button;
