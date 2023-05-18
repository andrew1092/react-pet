import React from "react";
import recipeBook from "../images/recipe-book.jpg"
import RecipeList from "../components/recipe/RecipeList";
import '../styles/components/pages/home/Home.scss';

const Home = (props) => {
    return(
        <div className="main-page">
            <section className="banner">
              <h1 className="banner__title">Choose Recipe For Today</h1>
              <div className="banner__img-wrap">
                <img 
                  className="banner__img" 
                  alt="recipe banner"
                  src={recipeBook}
                ></img>
              </div>
            </section>
            <RecipeList recipes={props.recipes} />
        </div>
    )
};

export default Home;