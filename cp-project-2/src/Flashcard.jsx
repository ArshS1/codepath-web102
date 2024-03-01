import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={flipCard}>
      <p>{isFlipped ? answer : question}</p>
    </div>
  );
};

export default Flashcard;
