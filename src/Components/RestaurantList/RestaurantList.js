import React from 'react'
import restaurantsData from "../restaurants/restaurantsData"

import "./RestaurantList.css"
import { FaBicycle } from "react-icons/fa";
import { CiStar, CiClock2 } from "react-icons/ci";
import { BsBag } from "react-icons/bs";





function RestaurantList() {
  return (
    <div className='container'>
      <div className='restaurants-list'>
      
      {restaurantsData.map((restaurant, index) => (
        <div className="restaurant" key={index}>
          <img src={restaurant.imgSrc}/>
          <div className='restaurant-text'>
            <h4>{restaurant.name}</h4>
            <div className='delivery-details'>
              <p><CiStar/> {restaurant.rating} ({restaurant.reviewsCount}) </p>
              
              <p><BsBag/> Min. {restaurant.minimumOrder} €</p>
            </div>
            <div className='delivery-details'>
             <p><CiClock2/> {restaurant.deliveryTime.join(' - ')} min</p> 
             
             <p><FaBicycle/> {restaurant.deliveryPrice.toFixed(2)}€</p>
             </div>
             <div className='delivery-details'>
              {restaurant.categories.map((cateogry,index) => (
                <div className='category-badge'>
                  {cateogry}
                </div>
              ))}
              </div>
              
              
            
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default RestaurantList