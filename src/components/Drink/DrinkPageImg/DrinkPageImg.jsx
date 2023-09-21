import desktopImg from '../../assets/images/drinkPageImg/desktop@1x.jpg';
import desktopImg2x from '../../assets/images/drinkPageImg/desktop@2x.jpg';
import tabletImg from '../../assets/images/drinkPageImg/tablet@1x.jpg';
import tabletImg2x from '../../assets/images/drinkPageImg/tablet@2x.jpg';
import mobImg from '../../assets/images/drinkPageImg/mob@1x.jpg';
import mobImg2x from '../../assets/images/drinkPageImg/mob@2x.jpg';
import { Image } from './DrinkPageImg.style';

export const DrinkPageImg = () => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={`${desktopImg}, ${desktopImg2x} 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${tabletImg}, ${tabletImg2x} 2x`}
        type="image/jpg"
      />

      <source
        media="(min-width: 375px)"
        srcSet={`${mobImg}, ${mobImg2x} 2x`}
        type="image/jpg"
      />

      <Image src={mobImg} alt="Coctails" />
    </picture>
  );
};
