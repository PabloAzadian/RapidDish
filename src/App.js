import logo from './logo.svg';
import './App.css';
import BurgerEditor from './Components/BurgerEditor/BurgerEditor';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import RestaurantList from './Components/RestaurantList/RestaurantList';
import NavBar from './Components/NavBar/NavBar';
import Categories from './Components/Categories/Categories';
import SearchBar from './Components/SearchBar/SearchBar';
import { useState } from 'react';



function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSortingOption, setSelectedSortingOption] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div>
    <NavBar/>
    <Categories setSelectedCategory={setSelectedCategory} />
    <SearchBar setSearchTerm={setSearchTerm} setSelectedSortingOption={setSelectedSortingOption}/>
    <RestaurantList searchTerm={searchTerm} selectedCategory={selectedCategory} selectedSortingOption={selectedSortingOption}/>
    </div>
  );
}

export default App;
