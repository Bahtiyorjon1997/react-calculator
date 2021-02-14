import React, { useState } from "react";
import Button from "../Button/Button";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  const Collector = (e) => {
    setValue(value + e);
  };

  const evaluation = () => {
    setValue(String(eval(value)));
  };

  const percent = () => {
    setValue(String(parseInt(value) / 100));
  };

  const numbers = [
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [{ text: "0", size: 2 }, ".", "="],
  ];

  return (
    <div className="box2">
      <div className="row">
        <div className="col-12 p-0 pb-3">
          <input
            type="text"
            value={value ? value : 0}
            className="monitor p-2"
          />
        </div>
      </div>
      <div className="keyboard">
        <div className="row">
          <div className="col-3">
            <Button className="btn" number="AC" onClick={(e) => setValue("")} />
          </div>
          <div className="col-3">
            <Button
              className="btn"
              number="del"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
          </div>
          <div className="col-3">
            <Button
              className="btn"
              number="%"
              onClick={value !== "" ? (e) => percent() : console.log("hi")}
            />
          </div>
          <div className="col-3">
            <Button
              className="btn"
              number="/"
              onClick={value !== "" ? (e) => Collector("/") : console.log("hi")}
            />
          </div>
        </div>
        {numbers.map((row) => (
          <div className="row">
            {row.map((number) => (
              <div className={`col-${number?.size * 3 || 3} p-0`}>
                <Button
                  number={number?.text || number}
                  onClick={
                    (number === "*" ||
                      number === "+" ||
                      number === "-" ||
                      number === "=" ||
                      number === ".") &&
                    value === ""
                      ? console.log("hi")
                      : () => {
                          number?.text === "=" || number === "="
                            ? evaluation()
                            : setValue(value + (number?.text || number));
                        }
                  }
                ></Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
