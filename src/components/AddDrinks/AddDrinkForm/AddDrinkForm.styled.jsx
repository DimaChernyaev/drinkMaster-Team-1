import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const FormButton = styled.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;

  color: ${colorStyled.colorBlue};
  background-color: ${colorStyled.colorWhite};

  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  &:hover {
    color: ${colorStyled.colorWhite};
    background-color: ${colorStyled.colorBlue};
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
