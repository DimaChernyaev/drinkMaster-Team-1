import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colorStyled } from '../colorStyled';

export const Card = styled.li``;

export const ImageCard = styled.img`
  display: block;
  border-radius: 8px;

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;

export const CocktailName = styled.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CocktailLink = styled(Link)`
  color: ${colorStyled.colorWhiteFifty};
  font-size: 16px;
  font-size: 500;
  line-height: 1.2;
  word-wrap: break-word;
  align-self: flex-start;

  @media (min-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`;