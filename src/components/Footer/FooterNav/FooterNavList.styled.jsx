import { colorStyled } from '../../../helpers/colorStyled';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1440px) {
    margin-top: 30px;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    margin-top: 0;
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colorStyled.colorWhite};
`;
