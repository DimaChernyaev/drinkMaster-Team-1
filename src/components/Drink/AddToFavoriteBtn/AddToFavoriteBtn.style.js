import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const Button = styled.button`
  width: 222px;
  color: ${colorStyled.colorBlue};
  background-color: ${colorStyled.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }

  /* &:focus {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }  */

  &:active {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
    box-shadow: 0 0 10px ${colorStyled.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
