// Import restaurant logos
import donsPizzeriaImg from "../../RapidDish/Restaurant Logos/DonsPizza.jpg";
import bonnerWallPizzaImg from "../../RapidDish/Restaurant Logos/bonnerWallPizza.jpg";
import well2VeggieImg from "../../RapidDish/Restaurant Logos/Well2Veggie.jpg";
import sudstadtAsianFusionImg from "../../RapidDish/Restaurant Logos/sudstadt asian fusion.jpg";
import flavorfulIndianImg from "../../RapidDish/Restaurant Logos/flavorful indian.jpg";
import thaliIndischesSpotImg from "../../RapidDish/Restaurant Logos/thaliIndische.jpg";
import minsuFusionDelightsImg from "../../RapidDish/Restaurant Logos/minsu.jpeg";
import sakuraSushiHavenImg from "../../RapidDish/Restaurant Logos/sakurasushi.jpg";
import soulfriesAsianFastImg from "../../RapidDish/Restaurant Logos/soulfries logo.jpg";
import phatburgersDelightImg from "../../RapidDish/Restaurant Logos/phatburgers.jpg";
import tangWangChineseSpotImg from "../../RapidDish/Restaurant Logos/tangwang.jpg";
import xingWangAsianBitesImg from "../../RapidDish/Restaurant Logos/xing wang asian bites.jpg";
import fiveGuysImg from "../../RapidDish/Restaurant Logos/fiveguys.jpg";
import kfcImg from "../../RapidDish/Restaurant Logos/kfc.jpg";


const restaurantsData = [
  {
    name: "Don's Pizzeria",
    rating: 4.5,
    categories: ["Pizza"],
    deliveryPrice: 1.99,
    deliveryTime: [30, 45],
    imgSrc: donsPizzeriaImg,
    reviewsCount: 150,
    minimumOrder: 10,
  },
  {
    name: "Bonner Pizza Wall",
    rating: 4.0,
    categories: ["Pizza", "Fast Food"],
    deliveryPrice: 2.49,
    deliveryTime: [35, 50],
    imgSrc: bonnerWallPizzaImg,
    reviewsCount: 120,
    minimumOrder: 12,
  },
  {
    name: "Well 2 Veggie Asian Delight",
    rating: 4.8,
    categories: ["Asian", "Fast Food"],
    deliveryPrice: 2.99,
    deliveryTime: [30, 45],
    imgSrc: well2VeggieImg,
    reviewsCount: 80,
    minimumOrder: 15,
  },
  {
    name: "Südstadt Asian Fusion",
    rating: 4.2,
    categories: ["Asian", "Chinese"],
    deliveryPrice: 3.49,
    deliveryTime: [40, 55],
    imgSrc: sudstadtAsianFusionImg,
    reviewsCount: 180,
    minimumOrder: 11,
  },
  {
    name: "Flavorful Indian",
    rating: 4.7,
    categories: ["Indian"],
    deliveryPrice: 3.99,
    deliveryTime: [30, 45],
    imgSrc: flavorfulIndianImg,
    reviewsCount: 2000,
    minimumOrder: 8,
  },
  {
    name: "Thali Indisches Spot",
    rating: 4.6,
    categories: ["Indian"],
    deliveryPrice: 1.99,
    deliveryTime: [35, 50],
    imgSrc: thaliIndischesSpotImg,
    reviewsCount: 100,
    minimumOrder: 14,
  },
  {
    name: "MINSU Fusion Delights",
    rating: 4.4,
    categories: ["Asian", "Fast Food"],
    deliveryPrice: 2.49,
    deliveryTime: [30, 45],
    imgSrc: minsuFusionDelightsImg,
    reviewsCount: 500,
    minimumOrder: 9,
  },
  {
    name: "Sakura Sushi Haven",
    rating: 4.9,
    categories: ["Sushi"],
    deliveryPrice: 2.99,
    deliveryTime: [25, 40],
    imgSrc: sakuraSushiHavenImg,
    reviewsCount: 90,
    minimumOrder: 13,
  },
  {
    name: "SOULFRIES Asian Fast",
    rating: 4.3,
    categories: ["Fast Food", "Asian"],
    deliveryPrice: 3.49,
    deliveryTime: [35, 50],
    imgSrc: soulfriesAsianFastImg,
    reviewsCount: 1200,
    minimumOrder: 10,
  },
  {
    name: "Phatburgers Delight",
    rating: 4.1,
    categories: ["Fast Food"],
    deliveryPrice: 3.99,
    deliveryTime: [30, 45],
    imgSrc: phatburgersDelightImg,
    reviewsCount: 75,
    minimumOrder: 16,
  },
  {
    name: "Tang Wang Chinese Spot",
    rating: 4.6,
    categories: ["Chinese"],
    deliveryPrice: 1.99,
    deliveryTime: [40, 55],
    imgSrc: tangWangChineseSpotImg,
    reviewsCount: 300,
    minimumOrder: 12,
  },
  {
    name: "Xing Wang Asian Bites",
    rating: 4.5,
    categories: ["Asian", "Chinese"],
    deliveryPrice: 2.49,
    deliveryTime: [35, 50],
    imgSrc: xingWangAsianBitesImg,
    reviewsCount: 1500,
    minimumOrder: 8,
  },
  {
    name: "Five Guys",
    rating: 4.8,
    categories: ["American"],
    deliveryPrice: 3.49,
    deliveryTime: [25, 40],
    imgSrc: fiveGuysImg,
    reviewsCount: 800,
    minimumOrder: 15,
  },
  {
    name: "KFC",
    rating: 4.2,
    categories: ["American", "Fast Food"],
    deliveryPrice: 3.29,
    deliveryTime: [30, 45],
    imgSrc: kfcImg,
    reviewsCount: 1000,
    minimumOrder: 11,
  }
];

export default restaurantsData;
