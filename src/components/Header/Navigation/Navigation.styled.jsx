import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
  }
  @media screen and (max-width: 1279px) and (max-height: 460px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  display: block;
  height: 36px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  text-decoration: none;
  border-radius: 40px;
  border: 1px solid var(--navigation-border-color);
  padding: 8px 16px;
  background-color: transparent;
  transition:
    background-color var(--transition),
    color var(--transition);
  &.active {
    background-color: var(--blue-color);
    color: var(--white-color);
  }
  &:hover,
  &:focus {
    background-color: var(--blue-color);
    color: var(--white-color);
  }
`;
