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
  color: var(--blue-color);
  background-color: var(--white-color);
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:focus {
    background-color: var(--blue-color);
    color: var(--white-color);
  }
`;
