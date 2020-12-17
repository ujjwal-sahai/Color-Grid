import React from "react";
import "./style.css";

const Error = (props) => {
  const { message } = props;
  return (
    <div className="error-container">
      <div>Error: {message}</div>
    </div>
  );
};

export default Error;
