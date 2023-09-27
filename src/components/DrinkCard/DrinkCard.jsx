import { Link } from 'react-router-dom';

const DrinkCard = ({ drinkItem }) => {
  const { _id, drink, drinkThumb } = drinkItem;

  return (
    <li
      onClick={(e) => {
        onGalleryItemClick(e.target.id);
      }}
    >
      <img src={drinkThumb} alt={drink} id={_id}></img>

      <h3>{drink}</h3>
      <Link to={`/drink/${_id}`}>See more</Link>
    </li>
  );
};

export default DrinkCard;
