import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const LinkDrinks = styled(Link)`
  font-size: 16px;
  background: var(--btn-add-drink-background);
  color: var(--btn-add-drink-color);
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  margin-bottom: 80px;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 160px;
  }
`;
