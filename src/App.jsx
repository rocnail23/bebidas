import { Fragment, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CategoryProvider from './components/context/Category'
import RecipeProvider from './components/context/Recipe'
import RecipeList from './components/RecipeList'
import ModalContexProvider from './components/context/Modal'
function App() {
  

  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalContexProvider>
      <Header/>
      <div className='container'>
    <div className='row'>
    <Form/>
    <RecipeList/>
    </div>
      </div>
      </ModalContexProvider>
      </RecipeProvider>   
    </CategoryProvider>
  )
}

export default App
