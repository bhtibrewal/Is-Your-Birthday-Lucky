import "./styles.css";
import { useState } from "react";

var inputDate = " ";
var luckynum = 0;

export default function App() {
  const [output, setOutput] = useState("");
  function clickHandler() {
    var sum = calculateSum();
    checkLucky(sum);
  }
  function checkLucky(sum) {
    if (sum % luckynum === 0) setOutput("🎉🥳 Your Birthday is lucky!! 🥳🎉");
    else setOutput("😔 Your Birthday is not lucky!! 😔");
  }
  function calculateSum() {
    var dateArray = inputDate.split("-");
    var sum = 0;
    dateArray.map(function (index) {
      // console.log({ index });
      for (var i = 0; i < index.length; i++) sum = sum + Number(index[i]);
    });
    console.log(sum);
    return sum;
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
