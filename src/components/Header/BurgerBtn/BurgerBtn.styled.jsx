import styled from '@emotion/styled';
import { ReactComponent as BurgerIMG } from '../../../assets/images/burgermenu/burger.svg';
import { ReactComponent as BurgerCloseIMG } from '../../../assets/images/burgermenu/burgerclose.svg';

export const StyledBurgerBtn = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  font-family: inherit;
  color: var(--header-color);
  transition: border var(--transition);
  &:active {
    border: 1px solid var(--bluefifty-color);
  }
`;

export const BurgerSVG = styled(BurgerIMG)`
  width: 30px;
  height: 30px;
  fill: var(--header-color);
  stroke: var(--header-color);
`;

export const CloseBurgerSVG = styled(BurgerCloseIMG)`
  width: 30px;
  height: 30px;
  fill: var(--header-color);
  stroke: var(--header-color);
  transition: all var(--transition);
`;
