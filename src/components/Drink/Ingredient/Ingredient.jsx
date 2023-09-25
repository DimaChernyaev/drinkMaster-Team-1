import { IngredientItem } from './Ingredient.style.js';

export const Ingredient = ({ number, name }) => {

  return (
    <IngredientItem>
      <p>{name}</p>
      <span>{number}</span>
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
