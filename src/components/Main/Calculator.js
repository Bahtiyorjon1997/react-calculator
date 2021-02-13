import React, { useState } from "react";
import Button from "../Button/Button";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState(0);
  return (
    <div className="box first-row">
      <input type="text" value={value} />
      <div className="row buts">
        <Button number="AC" onClick={(e) => console.log(e)} />
        <Button number="+" onClick={(e) => setValue("+")} />
        <Button number="%" onClick={(e) => setValue("%")} />
        <Button number="/" onClick={(e) => setValue()} />
      </div>
      <div className="row buts">
        <Button number="7" />
        <Button number="8" />
        <Button number="9" />
        <Button number="x" />
      </div>
      <div className="row buts">
        <Button number="4" />
        <Button number="5" />
        <Button number="6" />
        <Button number="-" />
      </div>
      <div className="row buts">
        <Button number="1" />
        <Button number="2" />
        <Button number="3" />
        <Button number="+" />
      </div>
      <div className="row buts">
        <Button number="0" className="zero" />
        <Button number="." />
        <Button number="=" />
      </div>
    </div>
  );
}

export default Calculator;
