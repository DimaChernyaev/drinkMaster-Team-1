import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ImageCard = styled.img`
  display: block;
  border-radius: 8px;
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 350px) {
    width: 100%;
    min-width: 290px;
  }

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
  font-size: 16px;
  font-size: 500;
  line-height: 1.2;
  word-wrap: break-word;
  align-self: flex-start;
  color: var(--whitefifty-color);
  transition: color var(--transition);

  &:hover {
    color: var(--white-color);
  }

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
