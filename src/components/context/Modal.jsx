import React,{useEffect, createContext, useState} from "react";

export const ModalContext = createContext()

const ModalContexProvider = (props) => {
    
    const [recipeId, setRecipeId] = useState(null)
    const [recipeDetails, setRecipeDetails] = useState({})
    useEffect(() => {
        const getRecipeById = async () => {
            try{
                if(!recipeId) return
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
                const api = await fetch(url)    
                const res = await api.json()
                setRecipeDetails(res.drinks[0])
            }catch (e){
                throw console.log(e)
            }
        }

        getRecipeById()

    },[recipeId] )

    return (
        <ModalContext.Provider
        value={{
            setRecipeId,
            recipeDetails,
            setRecipeDetails
        }
           
        }>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContexProvider