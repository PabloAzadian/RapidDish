import React from 'react'
import american from "../../RapidDish/food categories/american.png"
import chinese from "../../RapidDish/food categories//chinese.png"
import asian from "../../RapidDish/food categories/asian.png"
import fastfood from "../../RapidDish/food categories/fastfood.png"
import indian from "../../RapidDish/food categories/indian.png"
import pizza from "../../RapidDish/food categories/pizza.png"
import sushi from "../../RapidDish/food categories/sushi.png"
import "./Categories.css"


// ... (previous imports)

function Categories({ setSelectedCategory }) {
    const handleClick = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <section>
        <div className='container'>
          <div className='row categories-container  gap-2'>
            <button onClick={() => handleClick("American")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={american} alt="American" />
              <h2>American</h2>
            </button>
  
            <button onClick={() => handleClick("Chinese")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={chinese} alt="Chinese" />
              <h2>Chinese</h2>
            </button>
  
            <button onClick={() => handleClick("Asian")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={asian} alt="Asian" />
              <h2>Asian</h2>
            </button>
  
            <button onClick={() => handleClick("FastFood")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={fastfood} alt="FastFood" />
              <h2>FastFood</h2>
            </button>
  
            <button onClick={() => handleClick("Indian")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={indian} alt="Indian" />
              <h2>Indian</h2>
            </button>
  
            <button onClick={() => handleClick("Pizza")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={pizza} alt="Pizza" />
              <h2>Pizza</h2>
            </button>
  
            <button onClick={() => handleClick("Sushi")} className='col-7 col-md-4 col-lg-2 m-auto'>
              <img src={sushi} alt="Sushi" />
              <h2>Sushi</h2>
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default Categories;
  