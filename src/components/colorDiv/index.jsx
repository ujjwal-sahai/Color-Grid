import React, { useState } from "react";
import Error from "../shared/Error";
import ColoredDiv from "./ColoredDiv";
import Container from "./Container";

import "./style.css";
const ColorDiv = (props) => {
  const initColorsValue = { red: "255", green: "255", blue: "255" };
  const initError = { hasError: false, message: "" };
  const [colorState, setColors] = useState(initColorsValue);
  const [errorState, setError] = useState(initError);

  const valueChange = (target) => {
    const { name, value } = target;
    if (validateValue(name, value)) {
      let colorValue = { ...colorState };
      colorValue[name] = value;
      setColors(colorValue);
    }
  };

  const validateValue = (name, value) => {
    let error = { ...errorState };
    if (value > 255) {
      error["hasError"] = true;
      error["message"] = "Value for " + name + " can not be more than 255";
      let colorValue = { ...colorState };
      colorValue[name] = 255;
      setColors(colorValue);
    } else if (value < 0) {
      error["hasError"] = true;
      error["message"] = "Value for " + name + " can not be less than 0";
      let colorValue = { ...colorState };
      colorValue[name] = 0;
      setColors(colorValue);
    } else {
      error["hasError"] = false;
      error["message"] = "";
    }
    setError(error);
    return !errorState["hasError"];
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="container-header">
          <h5>Color Grid Example</h5>
        </div>
        <div className="container-body">
          <div className="context-holder">
            <Container
              type="range"
              name="red"
              value={colorState["red"]}
              labelText="Red"
              onValueChange={valueChange}
              min="0"
              max="255"
            />
          </div>
          <div className="context-holder">
            <Container
              type="range"
              name="green"
              value={colorState["green"]}
              labelText="Green"
              onValueChange={valueChange}
              min="0"
              max="255"
            />
          </div>
          <div className="context-holder">
            <Container
              type="range"
              name="blue"
              value={colorState["blue"]}
              labelText="Blue"
              onValueChange={valueChange}
              min="0"
              max="255"
            />
          </div>
        </div>
      </div>
      <div className="container">
        {errorState["hasError"] && <Error message={errorState["message"]} />}
        <ColoredDiv colors={colorState} />
      </div>
    </React.Fragment>
  );
};

export default ColorDiv;
