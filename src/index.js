import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import "./style.css";

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [total, setTotal] = useState();

  function calculateTotal() {
    setTotal(input1 + input2 + input3);
  }

  function calculateTotalMinus() {
    setTotal(input1 - input2 - input3);
  }

  function calculateTotalBagi() {
    if (input1 === 0) {
      setTotal(input2 / input3);
    } else if (input2 === 0) {
      setTotal(input1 / input3);
    } else if (input3 === 0) {
      setTotal(input1 / input2);
    } else {
      setTotal(input1 / input2 / input3)
    }
  }

  function calculateTotalKali() {
    if (input1 === 0) {
      setTotal(input2 / input3);
    } else if (input2 === 0) {
      setTotal(input1 / input3);
    } else if (input3 === 0) {
      setTotal(input1 / input2);
    } else {
      setTotal(input1 / input2 / input3);
    }
  }

  const handleChange = e => {
    setIsChecked(!isChecked);
  }

  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
  };

  const handleChange3 = (e) => {
    setIsChecked3(!isChecked3);
  };

  let button;

  if (isChecked === true && isChecked2 === false && isChecked3 === false) {
    button = alert("checkbox min 2");
  }

  console.log(input1);

  return (
    <div className="calculate">
      {button}
      <label htmlFor="">Input 1</label>
      <input
        type="number"
        onChange={(e) => setInput1(!isChecked ? 0 : +e.target.value)}
      />
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <br />
      <label htmlFor="">Input 2</label>
      <input
        type="number"
        onChange={(e) => setInput2(!isChecked2 ? 0 : +e.target.value)}
      />
      <input type="checkbox" checked={isChecked2} onChange={handleChange2} />
      <br />
      <label htmlFor="">Input 3</label>
      <input
        type="number"
        onChange={(e) => setInput3(!isChecked3 ? 0 : +e.target.value)}
      />
      <input type="checkbox" checked={isChecked3} onChange={handleChange3} />
      <br /> <div className="show-input">{total}</div>
      <div className="">
        <button onClick={calculateTotal}>+</button>
        <button onClick={calculateTotalMinus}>-</button>
        <button onClick={calculateTotalBagi}>/</button>
        <button onClick={calculateTotalKali}>*</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
