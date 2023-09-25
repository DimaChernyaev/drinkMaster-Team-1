import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colorStyled } from '../colorStyled';

export const Card = styled.li``;

export const ImageCard = styled.img`
  display: block;
  width: 400px;
  height: 400px;
`;

export const CocktailName = styled.p`
  font-size: 24px;
`;

export const CocktailLink = styled(Link)`
  color: ${colorStyled.colorWhiteFifty};
  font-size: 18px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`;
