import React, { Fragment, useRef } from "react";


const ColoredDiv = (props) => {
  const { colors } = props;

  const customStyle = {
    background:
      "rgb(" +
      colors["red"] +
      "," +
      colors["green"] +
      "," +
      colors["blue"] +
      ")",
  };
  const hexTextRef = useRef(null);
  const copyHexValue = () => {
    hexTextRef.current.select();
    document.execCommand('copy');
   
  };
  const rgbToHex = () => {
    let hexForRed = Number(colors["red"]).toString(16);
    if (hexForRed.length < 2) {
      hexForRed = "0" + hexForRed;
    }
    let hexForGreen = Number(colors["green"]).toString(16);
    if (hexForGreen.length < 2) {
      hexForGreen = "0" + hexForGreen;
    }
    let hexForBlue = Number(colors["blue"]).toString(16);
    if (hexForBlue.length < 2) {
      hexForBlue = "0" + hexForBlue;
    }

    return "#" + hexForRed + hexForGreen + hexForBlue;
  };
  return (
    <Fragment>
      <div className="container-body">
        <div className="colored-div" style={customStyle}></div>
      </div>

      <div onClick={copyHexValue} style={{"cursor":"pointer", "padding":"10px"}} title="Click to copy the hexcode">
        <label htmlFor="hexValue"> Click to copy Hexcode </label>
        <input ref={hexTextRef} style={{"cursor":"copy"}}  name="hexValue" type="text" value={rgbToHex()} readOnly />
      </div>
    </Fragment>
  );
};

export default ColoredDiv;
