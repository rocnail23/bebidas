import React, { createContext, useEffect, useState } from "react";

export const RecipeContex = createContext()

const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([])

    const[search, setSearch] = useState({
        name: "",
        category:""
    })

    const {name, category} = search

    useEffect(() => {
        const getRecipe = async () => {
           try{
            if(search.category == "") return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
           const api = await fetch(url)
           const res = await api.json()
           setRecipes(res.drinks)
           }catch (e) {
            throw console.log(e)
           }
        }

        getRecipe()

    },[search])

    return (
      <RecipeContex.Provider
        value={{
            setSearch,
            recipes
        }}>
{props.children}
      </RecipeContex.Provider>

    )


} 

export default RecipeProvider
