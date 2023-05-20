import React,{useContext,useState} from 'react'
import { ModalContext } from './context/Modal'
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #88a0f8',
    boxShadow: 24,
    p: 4,
    maxHeight: "500px",
    overflowY: "scroll"
  };
  
 

const CardRecipe = ({recipe}) => {
    const{setRecipeId,recipeDetails,setRecipeDetails} = useContext(ModalContext)
  
   
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => {setOpen(false);
        setRecipeDetails({})};


        const getIngredients = (recipedetails) => {
          const ingrendients = []
            for(let i = 1; i<16 ; i++){
              if(recipedetails[`strIngredient${i}`]){
                ingrendients.push(<li key={i}>
                  {recipeDetails[`strIngredient${i}`]} {recipedetails[`strMeasure${i}`]}
                </li>)
              }
            }
            return ingrendients
        }
   
  return (
    <div className='col-md-4 col-sm-6 mb-3'>
        <div className='card'>
        <h2 className='card-header'>{recipe.strDrink}</h2>
        <img className='card-img' src={recipe.strDrinkThumb} alt="" />
        <div className='card-body'>
        <button 
        onClick={(e) => {setRecipeId(recipe.idDrink);
            handleOpen() } }
        className='btn btn-block btn-primary'>
            ver receta
        </button>
        <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
       <h2 className='text-center'>{recipeDetails.strDrink}</h2>
       <h3 className='mt-4'>instrucciones</h3>
       <p>{recipeDetails.strInstructions}</p>
       <img src={recipeDetails.strDrinkThumb} className='img-fluid my-3' />
       <h3>ingredientes</h3>
       <ul>
        {getIngredients(recipeDetails)}
       </ul>
        </Box>
        </Modal>
        </div>
        </div>
    </div>
  )
}

export default CardRecipe