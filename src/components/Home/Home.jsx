import hcss from '../Home/home.module.css';
import { useEffect, useState } from 'react';
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { PrewievDrinks } from './PrewievDrinks/PrewievDrinks';

const Home = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const data = await getCoctailsByCategories();
        const drinksArr = Object.entries(data);
        setDrinks([...drinksArr]);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div>
      <PrewievDrinks drinks={drinks} />
    </div>
  );
};

export default Home;

{
  /* <div className={hcss.container}>
      <div className={hcss.conttwo}>
        <div className={hcss.box}>
          <h2 className={hcss.titleOrdinary}>Ordinary Drink</h2>

          <ul className={hcss.namecoktail}>
            {drinks.map((drink, id) => (
              <li className={hcss.nameCoktailLi} key={id}>
                {drink.drinkThumb ? (
                  <img src={drink.drinkThumb} alt={drinks} />
                ) : (
                  <img src="" />
                )}
                <h3 className={hcss.nameCoktail}>{drink.name}</h3>
                <a href="">See More</a>
              </li>
            ))}
          </ul>

          <ul className={hcss.namecoktail}>
            {drinks.map((drink, id) => (
              <li className={hcss.nameCoktailLi} key={id}>
                {drink.drinkThumb ? (
                  <img src={drink.drinkThumb} alt={drinks} />
                ) : (
                  <img src="" />
                )}
                <h3 className={hcss.nameCoktail}>{drink.name}</h3>{' '}
                {/* Замініть drink.name на відповідне поле */
}
//           <a href="">See More</a>
//         </li>
//       ))}
//     </ul>
//   </div>
//   <div className={hcss.box}>
//     <h2 className={hcss.titleCocktail}>Cocktail</h2>
//     <ul className={hcss.list}>
//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>

//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>
//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>
//     </ul>
//     <ul className={hcss.namecoktail}>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//     </ul>
//   </div>

//   <div className={hcss.box}>
//     <h2 className={hcss.titleShake}>Shake</h2>
//     <ul className={hcss.list}>
//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>

//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>

//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>
//     </ul>

//     <ul className={hcss.namecoktail}>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//     </ul>
//   </div>

//   <div className={hcss.box}>
//     <h2 className={hcss.titleOtherUnknow}>Other/Unknow</h2>
//     <ul className={hcss.list}>
//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>

//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>

//       <li className={hcss.item}>
//         <div className={hcss.itemContent}></div>
//       </li>
//     </ul>
//     <ul className={hcss.namecoktail}>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//       <li className={hcss.nameCoktailLi}>
//         <h3 className={hcss.nameCoktail}>Name cocktail</h3>
//         <a href="">See More</a>
//       </li>
//     </ul>
//   </div>

//   <div className={hcss.otherDrinks}>
//     <button className={hcss.btnOtherDrinks}>Other drinks</button>
//   </div>
// </div>
// </div> */}
