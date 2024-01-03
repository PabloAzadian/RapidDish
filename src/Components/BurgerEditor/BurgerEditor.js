import React, { useState } from 'react';
import './BurgerEditor.css';
import TopBun from  '../../../src/RapidDish/Burger ingredients/Top bun.png';
import BottomBun from  '../../../src/RapidDish/Burger ingredients/Bottom bun.png';
import Patty from  '../../../src/RapidDish/Burger ingredients/Beef Patty.png';
import Cheese from '../../../src/RapidDish/Burger ingredients/Cheese.png';
import Bacon from  '../../../src/RapidDish/Burger ingredients/Bacon.png';
import Onions from  '../../../src/RapidDish/Burger ingredients/Onions.png';
import Pickles from  '../../../src/RapidDish/Burger ingredients/Pickles.png';
import Salad from  '../../../src/RapidDish/Burger ingredients/Salad.png';
import Tomatoes from  '../../../src/RapidDish/Burger ingredients/Tomatoes.png';

function BurgerEditor() {
  const [ingredientStates, setIngredientStates] = useState([
    true, // Salad
    true, // Tomatoes
    true, // Pickles
    true, // Onions
    true, // Bacon
  ])
  const [extraPatty, setExtraPatty] = useState(false);
  const [extraCheese, setExtraCheese] = useState(false);

  const toggleableIngredients = [
    Salad,
    Tomatoes,
    Pickles,
    Onions,
    Bacon,
  ];

  const handleToggle = (index, isPlus) => {
    setIngredientStates((prevStates) => {
      const updatedStates = [...prevStates];
      // If isPlus is true and the ingredient is already true, do nothing
      if (isPlus && updatedStates[index]) {
        return updatedStates;
      }
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className='burger-editor'>
      
    <div className="ingredients">
      <h1>Burger</h1>
      <div className="counter-buttons">
        <img
          height="50px"
          width="200px"
          src={TopBun}
        />
      </div>
      {ingredientStates.map((isActivated, index) => (
        <div className="counter-buttons toggleable" key={index}>
          <button
            className="minus-button"
            onClick={() => handleToggle(index, false)}
            disabled={!isActivated}
          >
            -
          </button>
          <img
            height="50px"
            width="200px"
            src={toggleableIngredients[index]}
            alt={`ingredient-${index}`}
            onClick={() => handleToggle(index, !isActivated)}
            className={isActivated ? 'active' : 'disabled'}
          />
          <button
            className="plus-button"
            onClick={() => handleToggle(index, true)}
            disabled={isActivated}
          >
            +
          </button>
        </div>
      ))}
      <div className="counter-buttons">
        <button className="minus-button" 
        disabled={extraCheese===false}
        onClick={() => setExtraCheese(false)}>-</button>
        <img
          height="50px"
          width="200px"
          src={Cheese}
        />
        <button className="plus-button" onClick={() => setExtraCheese(true)}>+</button>
      </div>
      <div className="counter-buttons">
        <button className="minus-button" 
        disabled={extraPatty===false}
        onClick={() => setExtraPatty(false)}>-</button>
        <img
          height="50px"
          width="200px"
          src={Patty}
        />
        <button className="plus-button" onClick={() => setExtraPatty(true)}>+</button>
      </div>
      {extraCheese && (
        <div className="counter-buttons">
          <button className="minus-button" onClick={() => setExtraCheese(false)}>-</button>
          <img
            height="50px"
            width="200px"
            src={Cheese}
          />
          <button className="plus-button" disabled={true}>+</button>
        </div>
      )}
      {extraPatty && (
        <div className="counter-buttons">
          <button className="minus-button" onClick={() => setExtraPatty(false)}>-</button>
          <img
            height="50px"
            width="200px"
            src={Patty}
          />
          <button className="plus-button" disabled={true}>+</button>
        </div>
      )}
      <div className="counter-buttons">
        <img
          height="50px"
          width="200px"
          src={BottomBun}
        />
      </div>
    </div>
    <div className='ingredient-list'>
        <h1>Ingredients:</h1>
        <ul>
          <li>Top Bun</li>
          {ingredientStates[0]&& <li>Salad</li>}
          {ingredientStates[1]&& <li>Tomatoes</li>}
          {ingredientStates[2]&& <li>Pickles</li>}
          {ingredientStates[3]&& <li>Onions</li>}
          {ingredientStates[4]&& <li>Bacon</li>}
          <li>Cheese</li>
          <li>Burger Patty</li>
          {extraCheese&& <li className='extra-ingredient'>Extra Cheese (+1,50$)</li>}
          {extraPatty&& <li className='extra-ingredient'>Extra Burger Patty (+3$)</li>}
          <li>Bottom Bun</li>
        </ul>

      </div>
    </div>
  );
}

export default BurgerEditor;
