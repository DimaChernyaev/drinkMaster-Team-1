import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const SubTitle = styled.p`
  margin-bottom: 20px;

  color: ${colorStyled.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ShortDescr = styled.p`
  margin-bottom: 40px;
width: 335px;
  color: ${colorStyled.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }

`;
