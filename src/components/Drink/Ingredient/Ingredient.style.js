import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const IngredientItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 157px;

  p {
    font-size: 14px;
    color: ${colorStyled.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${colorStyled.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    width: 220px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }

`;
