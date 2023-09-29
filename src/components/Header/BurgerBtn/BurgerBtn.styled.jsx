import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';
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
  color: ${colorStyled.colorWhite};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${colorStyled.colorBlue};
  }
  &:active {
    border: 1px solid ${colorStyled.colorBlueFifty};
  }
`;

export const BurgerSVG = styled(BurgerIMG)`
  width: 30px;
  height: 30px;
  fill: currentColor;
`;

export const CloseBurgerSVG = styled(BurgerCloseIMG)`
  width: 22px;
  height: 22px;
  fill: currentColor;
`;
