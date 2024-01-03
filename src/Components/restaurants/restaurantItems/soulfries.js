// Import images
import pulledChickenImg from "../../../RapidDish/restaurant items/soulfries/pulled chicken.jpeg";
import chickenTikkaImg from "../../../RapidDish/restaurant items/soulfries/chicken tikka.jpeg";
import chilliCheeseMovieFriesImg from "../../../RapidDish/restaurant items/soulfries/chilli cheese movie fries.jpeg";
import chilliConCarneImg from "../../../RapidDish/restaurant items/soulfries/chilli con carne.jpeg";
import pulledJackfruitImg from "../../../RapidDish/restaurant items/soulfries/pulled jackfruit.jpeg";
import rahmsauceImg from "../../../RapidDish/restaurant items/soulfries/rahmsauce.jpeg";
import soulfriesImg from "../../../RapidDish/restaurant items/soulfries/soulfries.jpeg";
import texMexImg from "../../../RapidDish/restaurant items/soulfries/texMex.jpeg";
import weltmeisterFriesImg from "../../../RapidDish/restaurant items/soulfries/weltmeister fries.jpeg";
import boloVeganeseImg from "../../../RapidDish/restaurant items/soulfries/bolo veganese.jpeg";

const Soulfries = [
  // Classic category
  {
    name: "Pulled Chicken",
    price: 8.50,
    imgSrc: pulledChickenImg,
    description: "Handcut Fries with slow-cooked chicken breast in its own juice in a honey-blackberry marinade, with lime mayo and wasabi mayo, topped with sesame and spring onions.",
    category: "classic",
    featured: true,
  },
  {
    name: "Soulfries",
    price: 4.00,
    imgSrc: soulfriesImg,
    description: "Handcut Fries.",
    category: "classic",
    featured: false,
  },
  {
    name: "Chili Con Carne",
    price: 8.00,
    imgSrc: chilliConCarneImg,
    description: "Handcut Fries with spicy homemade chili con carne, fresh sour cream, Flying Soul, and hot chilies as well as jalapeños and spring onions.",
    category: "classic",
    featured: false,
  },
  {
    name: "Original Chicken Tikka",
    price: 8.50,
    imgSrc: chickenTikkaImg,
    description: "Handcut Fries with chicken breast pieces in homemade, spicy curry sauce with wasabi mayonnaise and fresh mint.",
    category: "classic",
    featured: true,
  },

  // Veggie category
  {
    name: "Gourmet Rahmsauce",
    price: 7.50,
    imgSrc: rahmsauceImg,
    description: "Handcut Fries with grated mozzarella, Gourmet Rahmsauce, radishes, and spring onions.",
    category: "veggie",
    featured: true,
  },
  {
    name: "Chili Cheese Movie Fries",
    price: 7.50,
    imgSrc: chilliCheeseMovieFriesImg,
    description: "Handcut Fries with cheese sauce with jalapeños and red chilies, topped with spring onions.",
    category: "veggie",
    featured: false,
  },
  {
    name: "Tex Mex",
    price: 8.50,
    imgSrc: texMexImg,
    description: "Handcut Fries with guacamole, vegan sour cream, and Mexican salsa.",
    category: "veggie",
    featured: true,
  },

  // Vegan category
  {
    name: "Weltmeister Fries Spezial",
    price: 6.00,
    imgSrc: weltmeisterFriesImg,
    description: "Handcut Fries with original Weltmeister curry sauce with vegan mayo, curry powder, and spring onions.",
    category: "vegan",
    featured: false,
  },
  {
    name: "Pulled Jackfruit BBQ",
    price: 8.50,
    imgSrc: pulledJackfruitImg,
    description: "Handcut Fries with pulled jackfruit in a spicy BBQ marinade with a typical smoky note, refined with Flying Soul Sauce and vegan cheese.",
    category: "vegan",
    featured: true,
  },
  {
    name: "Bolo Veganese",
    price: 8.50,
    imgSrc: boloVeganeseImg,
    description: "Handcut Fries with vegan grated cheese, vegan pesto, and vegan mayo, topped with spring onions.",
    category: "vegan",
    featured: false,
  },
];

export default Soulfries;
