import React from "react";
import '../../styles/components/RecipeItem.scss'
import messageSquare from "../../images/messageSquare.svg"
import MyButton from "../UI/button/MyButton";

const RecipeItem = ({recipe}) => {
    return (
        <section className="recipe-item">
            <img className="recipe-item__image" src={recipe.img} alt="#" />
            <span className="recipe-item__level">easy</span>
            <h2 className="recipe-item__title">{recipe.name}</h2>
            <div className="recipe-item__compound">
                <h3 className="recipe-item__ingridients-title">Ingridients:</h3>
                <ul className="recipe-item__list">
                    {recipe.ingridients.map(item => 
                        <li className="recipe-item__list-item" key={item}>{item}</li>
                    )}
                </ul>
            </div>
            <div className="recipe-item__cost-wrap">
                <div className="recipe-item__info">
                    <span className="recipe-item__approximate">approximately cost:</span>
                    <strong className="recipe-item__price">$200</strong>
                </div>
                <div className="recipe-item__reviews">
                    <img className="recipe-item__reviews-icon" src={messageSquare} alt="reviews"></img>
                    <span>1 review</span>
                </div>
            </div>
            <div className="recipe-item__button">
                <MyButton>
                    Cook It
                </MyButton>
            </div>
        </section>
    )
}

export default RecipeItem;