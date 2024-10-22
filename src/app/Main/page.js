"use client";
import React, { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";

export default function Main() {
  const [data, setData] = useState({ 
    total: null,
    next: null,
    operation: null,
  });

  const [clickedIndex, setClickedIndex] = useState(null); // Track which button was clicked
  const [expression, setExpression] = useState(""); // Track current expression
  const [calc] = useState([
    "÷",
    "x",
    ".",
    "C",
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "%",
    0,
    "(",
    ")",
    "=",
  ]);

  function btnclick(value, index) {
    if (value === "C") {
      setExpression(""); // Clear expression if "C" is pressed
    } else if (value === "=") {
      try {
        let exp = expression.replace(/x/g, "*").replace(/÷/g, "/");
        setExpression(eval(exp).toString()); // Evaluate the expression
      } catch (error) {
        setExpression("Error"); // Catch any invalid expressions
      }
    } else {
      setExpression((prev) => prev + value); // Append clicked value to expression
    }
    setClickedIndex(index); // Track the clicked button index
  }

  return (
    <div className="bg-black lg:container lg:mx-auto lg:w-max">
      <div className="md:container md:mx-auto border-2 border-slate-300 mx-32 rounded-md">
        <div className="border-2 border-green-200 h-40 rounded-md text-white bg-black flex items-center justify-end px-4">
          <div className="text-3xl">{expression || "0"}</div> {/* Display the expression */}
        </div>
        <div className="md:container gap-2 md:mx-auto grid grid-cols-4 bg-neutral-900 h-auto p-2 rounded-md">
          {calc.map((num, index) => (
            <div
              key={index}
              onClick={() => btnclick(num, index)} // Pass value and index to btnclick
              style={{
                backgroundColor: clickedIndex === index ? "gray" : "black", // Change color only for clicked button
              }}
              className="text-2xl justify-center p-5 place-content-center rounded-full text-white text-center cursor-pointer"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
