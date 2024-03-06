import React, { Component, useState } from "react";
const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const [correct_temp, setCheckedTemperature] = useState('');
const [correct_syrup, setCheckedSyrup] = useState('');
const [correct_milk, setCheckedMilk] = useState('');
const [correct_blended, setCheckedBlended] = useState('');

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });

    setCheckedTemperature('');
setCheckedSyrup('');
setCheckedMilk('');
setCheckedBlended('');

    getNextDrink();
  };

  const getNextDrink = () => {};

  let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

  const onCheckAnswer = () => {};

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>

      <form>// we will fill this in soon!</form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>

      <h3>Temperature</h3>
      <div className="answer-space">{inputs["temperature"]}</div>
      <RecipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="temperature"
        choices={ingredients["temperature"]}
        checked={inputs["temperature"]}
      />

      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
    </div>
  );
};

export default BaristaForm;
