import React from "react";
import RecipeItem from "./RecipeItem";
import '../../styles/components/RecipeList.scss';

const RecipeList = (props) => {
    return (
        <ul className="recipe-list">
            {props.recipes.map(item => 
                <li key={item.id}>
                    <RecipeItem recipe={item} />
                </li>
            )}
        </ul>
    )
}

export default RecipeList;