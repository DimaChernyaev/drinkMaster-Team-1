import { colorStyled } from '../../../helpers/colorStyled';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    margin-top: 0;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colorStyled.colorWhite};
`;
