import React from "react";

const Textbox = (props) => {
  const { type, name, value, labelText, onValueChange, min, max } = props;
  const customStyle = { color: name };
  return (
    <div>
      <label htmlFor={name} style={customStyle}>
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={(e) => onValueChange(e.target)}
      />
    </div>
  );
};

export default Textbox;
