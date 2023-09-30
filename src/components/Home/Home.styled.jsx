import styled from '@emotion/styled';
import { colorStyled } from '../../helpers/colorStyled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const LinkDrinks = styled(Link)`
  font-size: 16px;
  color: ${colorStyled.colorBlue};
  background-color: ${colorStyled.colorWhite};
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  margin-bottom: 80px;

   &:hover {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }

  
  &:focus {
    background-color: ${colorStyled.colorBlue};
    color: ${colorStyled.colorWhite};
  }

  @media screen and (min-width: 768px){
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px){
    margin-bottom: 160px;
  }

`;
