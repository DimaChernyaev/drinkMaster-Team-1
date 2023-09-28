import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const Title = styled.p`
  color: ${colorStyled.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`;
