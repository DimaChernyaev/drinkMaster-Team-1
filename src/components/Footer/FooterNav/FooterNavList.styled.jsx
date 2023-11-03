import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 30px;
    gap: 16px;
  }
  @media screen and (max-width: 767px) {
    align-items: center;
    margin-top: 0;
    gap: 14px;
  }
`;

export const NavItem = styled.li`
  transition: var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--white-color);
`;
