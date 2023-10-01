import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colorStyled } from '../../../helpers/colorStyled';

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
  @media screen and (max-width: 1279px) and (max-height: 465px) {
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
  border: 1px solid ${colorStyled.colorWhiteTwenty};
  padding: 8px 16px;
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    background-color: ${colorStyled.colorBlue};
  }
  &:hover,
  &:focus {
    background-color: ${colorStyled.colorBlue};
  }
`;
