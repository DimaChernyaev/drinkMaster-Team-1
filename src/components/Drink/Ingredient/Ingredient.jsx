import { ImageThumb, IngredientItem } from './Ingredient.style.js';
import coctailPlaceholder from '../../../assets/images/drinkPageImg/coctailPlaceholder.png';



export const Ingredient = ({ photo, title, measure }) => {
  // console.log(photo)
  return (
    <IngredientItem>
      <ImageThumb>
      <img src={photo ? photo : coctailPlaceholder}/>
      </ImageThumb>

       <div>
       <p>{title}</p>
      <span>{measure}</span>
       </div>
 
    </IngredientItem>
  );

};
