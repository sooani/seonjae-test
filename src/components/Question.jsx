import React from "react";

const Question = ({ text, step }) => {
  // logic

  // view
  return (
    <div className="text-center">
      <h3 className="text-4xl font-cafe24surround">Question {step}</h3>
      <span className="block pt-10 text-2xl font-cafe24surround">{text}</span>
    </div>
  );
};

export default Question;