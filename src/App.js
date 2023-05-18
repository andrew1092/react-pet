import "./styles/App.scss";
import React, { useState, useRef } from "react";
import Home from "./pages/Home";

import Layout from "./components/Layout/Layout"
import food1 from "./images/food1.jpeg"
import food2 from "./images/food2.jpeg"
import food3 from "./images/food3.jpeg"

function App() {
const [recipes, setRecipe] = useState([
  {
    id: 0,
    name: 'Test Recipe',
    img: food1,
    ingridients: [
      'potato',
      'onion',
      'meat',
    ],
    cookingTime: '1 hour',
  },
  {
    id: 1,
    name: 'Test Recipe 1',
    img: food2,
    ingridients: [
      'Bla bla',
      'onion',
      'chicken',
    ],
    cookingTime: '2 hours',
  },
  {
    id: 2,
    name: 'Test Recipe 2',
    img: food3,
    ingridients: [
      'asda',
      'Smt',
      'Somthing else else',
    ],
    cookingTime: '3 hours',
  },
  {
    id: 3,
    name: 'Test Recipe 3',
    img: food3,
    ingridients: [
      'asda',
      'Smt',
      'Somthing else else',
    ],
    cookingTime: '3 hours',
  }
])

  return (
    <div className="App">
      <Layout>
          <Home recipes={recipes}/>
      </Layout>
    </div>
  )
}

export default App;
