
import { Link } from 'react-router-dom';

const DrinkCard = ({drinkItem}) => {

    console.log(drinkItem);
    const {id, drink, drinkThumb} = drinkItem;

    return (
        <li onClick={(e)=>{onGalleryItemClick(e.target.id)}}>
            <img src={drinkThumb} alt={drink} id={id} ></img>
            
            <h3>{drink}</h3>
            <Link to={`/drink/${id}`}>See more</Link>
        </li>
    )
}

export default DrinkCard;