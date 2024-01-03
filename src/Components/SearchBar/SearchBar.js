import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm, setSelectedSortingOption }) => {
  return (
    <div className='row container m-auto'>
      <div className='search-bar col-12 col-md-8 col-lg-8 m-auto'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => {
            setSearchTerm(e.target.value); 
          }}
        />
      </div>
      <div className='col-12 col-md-4 col-lg-4 m-auto'>
        <select  onChange={(e) => setSelectedSortingOption(e.target.value)}>
          <option value='all'>Sort By</option>
          <option value='time'>Delivery Time</option>
          <option value='fee'>Delivery Fee</option>
          <option value='minorder'>Minimum Order</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
