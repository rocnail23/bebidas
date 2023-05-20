import React, { useContext } from 'react'
import { RecipeContex } from './context/Recipe'
import CardRecipe from './CardRecipe'
const RecipeList = () => {
    const {recipes} = useContext(RecipeContex)
    
  return (
    <div className='row mt-5'>
        {recipes.map(recipe => (
            <CardRecipe 
            key={recipe.idDrink}
            recipe={recipe} />
        ))}
        </div>
  )
}

export default RecipeList