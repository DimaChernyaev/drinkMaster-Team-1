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
    width: 107px;
    height: 107px;
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
      width: 175px;
      height: 175px;
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const ImageThumb = styled.div`
  margin-bottom: 8px;
border-radius:8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color: ${colorStyled.colorBlue};

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
  }
`;
