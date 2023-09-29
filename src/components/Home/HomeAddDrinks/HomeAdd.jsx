import hcss from '../../Home/home.module.css';
import { Link } from 'react-router-dom';
import img from '../../Home/HomePageImg/desktop2x.png';

const HomeAdd = () => {
  return (
    <div className={hcss.container}>
      <div className={hcss.cont}>
        {/* <div className={hcss.boxfour}></div> */}
        <div className={hcss.box}>
          <h1 className={hcss.title}>
            Craft Your Perfect <br /> Drink with Drink Master
          </h1>
          <p className={hcss.text}>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world´s
            finest beverages.
          </p>

          <Link className={hcss.btnAddDrinks} to="/add">
            Add drink
          </Link>
        </div>
        <img className={hcss.imgmain} src={img} alt="main-coctail" />
        <div className={hcss.boxtwo}></div>
        <div className={hcss.boxtree}></div>
        <div className={hcss.boxfour}></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeAdd;
