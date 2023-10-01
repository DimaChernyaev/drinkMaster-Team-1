import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';

export const BurgerModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorStyled.backgroundBlackColor};
  z-index: 100;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;
