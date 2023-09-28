import { IngredientItem } from './Ingredient.style.js';
import coctailPlaceholder from '../../../assets/images/drinkPageImg/coctailPlaceholder.png';



export const Ingredient = ({ photo, title, measure }) => {
  console.log(photo)
  return (
    <IngredientItem>
       <img src={photo ? photo : coctailPlaceholder}/>
       <div>
       <p>{title}</p>
      <span>{measure}</span>
       </div>
 
    </IngredientItem>
  );

  // const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  //   useEffect(() => {
  //     if (photo) {
  //       setIsPhotoLoaded(true);
  //     }
  //   }, [photo]);

  //   if (!isPhotoLoaded) {
  //     return null;
  //   }

  //   return (
  //     isPhotoLoaded && (
  //       <IngredientItem>
  //         <img src={photo} alt={name} />
  //         <p>{name}</p>
  //         <span>{number}</span>
  //       </IngredientItem>
  //     )
  //   );
};
