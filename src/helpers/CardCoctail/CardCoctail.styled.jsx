import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colorStyled } from '../colorStyled';

export const Card = styled.li`
@media (min-width: 375px) {
    width: 335px;
    &:nth-child(2) {
     display: none;
    }
    &:nth-child(3) {
     display: none;
    }
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
    &:nth-child(2) {
     display: block;
    }
    &:nth-child(3) {
     display: block;
    }
  }
`;



export const ImageCard = styled.img`
  display: block;
  border-radius: 8px;
  display: flex;
width: 335px;
flex-direction: column;
align-items: flex-start;
gap: 14px;
  /* flex-basis: calc(100% - 40px / 3); */

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
    /* /* flex-direction: column;
    align-items: flex-start;
    gap: 14px; */
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
