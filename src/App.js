import "./styles.css";

import { useState } from "react";

var inputDate = " ";
var luckynum = " ";

export default function App() {
  const [output, setOutput] = useState("");
  function clickHandler() {
    console.log(inputDate);
    setOutput(inputDate);
  }
  return (
    <div className="App">
      <h1>Is Your Birthday Lucky? </h1>
      <h3>Enter your Date of Birth </h3>
      <input
        type="date"
        id="bday-input"
        onChange={(d) => {
          inputDate = d.target.value;
        }}
      ></input>
      <h3>Enter the lucky number</h3>

      <input
        type="number"
        id="lucky-number"
        onChange={(n) => {
          luckynum = n.target.value;
        }}
      ></input>
      <button className="button" onClick={clickHandler}>
        Check
      </button>
      <h3>{output}</h3>
    </div>
  );
}
