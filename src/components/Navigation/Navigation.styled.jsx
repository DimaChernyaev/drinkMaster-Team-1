import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
`;
