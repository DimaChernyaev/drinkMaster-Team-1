import styled from '@emotion/styled';
import { colorStyled } from '../../helpers/colorStyled';

export const HeaderEl = styled.header`
  position: relative;
  padding-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--whitetwenty-color);
  z-index: 150;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (min-width: 1280px) {
    padding: 0 30px;
  }
`;
