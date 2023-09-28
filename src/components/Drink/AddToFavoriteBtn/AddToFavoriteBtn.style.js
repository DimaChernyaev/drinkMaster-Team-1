import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const Button = styled.button`

  color: ${colorStyled.colorBlue};
  background-color: ${colorStyled.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }
  &:focus {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;

  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 0;
  }
`;
