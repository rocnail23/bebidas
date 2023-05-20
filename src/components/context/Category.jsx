import React, { useState } from "react";
import { createContext, useEffect } from "react";

export const CategoryContex = createContext()

const CategoryProvider = (props) => {

const [categories, setCategories] = useState([])

useEffect(() => {
    const getCategories  = async () => {
        try{
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        const api = await fetch(url)
        const res = await api.json()
        setCategories(res.drinks)
        } catch (e) {
            throw console.log(e)
        }
        }

        getCategories()
},[])


   return (

    <CategoryContex.Provider
    value={{
        categories,
        setCategories
    }}>
        {props.children}
    </CategoryContex.Provider>

   )


}

export default CategoryProvider