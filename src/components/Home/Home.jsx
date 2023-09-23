import hcss from '../Home/home.module.css';
// import desktopImg from '../../assets/Homepageimg/asrblueicedtea.jpg'
// import { Image } from "./HomePageImg/HomePageImg.style";

const Home = () => {
  return (
    <div className={hcss.container}>
      <div className={hcss.cont}>
        <div className={hcss.boxfour}></div>
        <div className={hcss.box}>
          <h1 className={hcss.title}>
            Craft Your Perfect <b /> Drink with Drink Master
          </h1>
          <p className={hcss.text}>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world´s
            finest beverages.
          </p>
          <button className={hcss.btnAddDrinks}>Add drink</button>
        </div>

        <div className={hcss.boxtwo}></div>
        <div className={hcss.boxtree}></div>
        <div>
          <img src="" alt="" />
        </div>

        {/* <div> <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${desktopImg}`}
          type="image/jpg"
        />

    <Image src={desktopImg} alt="Drinks" />
      </picture></div> */}
      </div>
      {/* <div className={hcss.boxfour}></div> */}
      {/* <div className={hcss.boxtwo}>
       </div>
       <div className={hcss.boxtree}></div> */}

      <div className={hcss.conttwo}>
        <div className={hcss.box}>
          <h2 className={hcss.titleOrdinary}>Ordinary Drink</h2>
          <ul className={hcss.list}>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
          </ul>

          <ul className={hcss.namecoktail}>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
          </ul>
        </div>
        <div className={hcss.box}>
          <h2 className={hcss.titleCocktail}>Cocktail</h2>
          <ul className={hcss.list}>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
          </ul>
          <ul className={hcss.namecoktail}>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
          </ul>
        </div>

        <div className={hcss.box}>
          <h2 className={hcss.titleShake}>Shake</h2>
          <ul className={hcss.list}>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
          </ul>

          <ul className={hcss.namecoktail}>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
          </ul>
        </div>

        <div className={hcss.box}>
          <h2 className={hcss.titleOtherUnknow}>Other/Unknow</h2>
          <ul className={hcss.list}>
            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>

            <li className={hcss.item}>
              <div className={hcss.itemContent}></div>
            </li>
          </ul>
          <ul className={hcss.namecoktail}>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
            <li className={hcss.nameCoktailLi}>
              <h3 className={hcss.nameCoktail}>Name cocktail</h3>
              <a href="">See More</a>
            </li>
          </ul>
        </div>

        <div className={hcss.otherDrinks}>
          <button className={hcss.btnOtherDrinks}>Other drinks</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
