import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const SubTitle = styled.p`
  margin-bottom: 20px;
  margin-top: 8px;
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

export const Container = styled.div`
margin-top: 80px;
margin-bottom: 80px;


@media (min-width: 768px) {
    margin-top: 140px;

  }


  @media (min-width: 1440px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`;
