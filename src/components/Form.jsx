import React, { useContext } from 'react';
import { CategoryContex } from './context/Category';
import { RecipeContex } from './context/Recipe';


const Form = () => {
    const { categories, setCategories } = useContext(CategoryContex);
    const {setSearch} = useContext(RecipeContex)


   const handleSubmit = (e) => {
    e.preventDefault()
    setSearch({
        [e.target.name.name] : e.target.name.value,
        [e.target.category.name]: e.target.category.value
    })
   }

    return (
        <form onSubmit={handleSubmit} className='col-12'>
            <fieldset className='text-center'>
                <legend>busca bebidas por categoría o ingredientes</legend>
            </fieldset>
            <div className='row'>
    
                <div className='col-md-6 mb-4'>
                    <select
                        id='category'
                        
                        className='form-control'
                        name='category'>
                        <option value="">--seleccionar categoría--</option>
                        {categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory} </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-6'>
                    <button
                        type='input'
                        className='btn btn-primary btn-block'>
                        buscar bebida
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;