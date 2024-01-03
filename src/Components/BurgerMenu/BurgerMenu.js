import React from 'react'
import Burger from  '../../../src/RapidDish/Combos/Burger.jpeg'
import CheeseBurger from  '../../../src/RapidDish/Combos/Cheeseburger.jpeg'
import Fries from  "../../../src/RapidDish/Combos/Fries.jpeg"
import BurgerCombo from  '../../../src/RapidDish/Combos/Burger Menu.jpeg'
import CheeseBurgerCombo from  '../../../src/RapidDish/Combos/CheeseBurger Menu.jpeg'
import "./BurgerMenu.css"


function BurgerMenu() {
  return (
    <div className='container'>
    <h1>Our Items</h1>
    <div className='item-boxes'>
    <div className='item-box'>
        <div className='box-wrapper'>
            <img
            width="275px"
            height="225px"
            src={Burger}/>
            <div className='item-information'>
                <div className='item-name'>
                    <h3>Beef Burger</h3>
                    
                </div>
                <div className='item-price'>
                    <h4>6.95$</h4>
                    
                </div>
            </div>
        </div>
        </div>
        <div className='item-box'>
        <div className='box-wrapper'>
            <img
            width="275px"
            height="225px"
            src={CheeseBurger}/>
            <div className='item-information'>
                <div className='item-name'>
                    <h3>Beef Burger</h3>
                    
                </div>
                <div className='item-price'>
                    <h4>6.95$</h4>
                    
                </div>
            </div>
            </div>
        </div>
        <div className='item-box'>
        <div className='box-wrapper'>
            <img
            width="275px"
            height="225px"
            src={Fries}/>
            <div className='item-information'>
                <div className='item-name'>
                    <h3>Beef Burger</h3>
                    
                </div>
                <div className='item-price'>
                    <h4>6.95$</h4>
                    
                </div>
            </div>
            </div>
        </div>
        </div>
        <h1>Our Combos</h1>
        <div className='item-boxes'>
        <div className='item-box'>
        <div className='box-wrapper'>
            <img
            width="275px"
            height="225px"
            src={BurgerCombo}/>
            <div className='item-information'>
                <div className='item-name'>
                    <h3>Beef Burger</h3>
                    
                </div>
                <div className='item-price'>
                    <h4>6.95$</h4>
                    
                </div>
            </div>
            </div>
        </div>
        <div className='item-box'>
        <div className='box-wrapper'>
            <img
            width="275px"
            height="225px"
            src={CheeseBurgerCombo}/>
            <div className='item-information'>
                <div className='item-name'>
                    <h3>Beef Burger</h3>
                    
                </div>
                <div className='item-price'>
                    <h4>6.95$</h4>
                    
                </div>
            </div>
            </div>
        </div>
        </div>
    
    </div>
  )
}

export default BurgerMenu