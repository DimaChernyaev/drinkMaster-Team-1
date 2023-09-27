import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const IngredientItem = styled.li`
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;
    width: 157px;
  }

  img {
    width: 157px;
    height: 157px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${colorStyled.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${colorStyled.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    div {
      width: 220px;
    }
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 14px;
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`;
