import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';

export const StyledModalWindow = styled.div`
  display: block;
  width: 177px;
  position: absolute;
  z-index: 101;
  top: 45px;
  left: 50%;
  padding: 18px;
  background-color: ${colorStyled.colorBlue};
  border-radius: 8px;
  transform: translateX(-50%);
`;

export const LogOutBtn = styled.button`
  width: 143px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  color: ${colorStyled.colorBlue};
  background-color: ${colorStyled.colorWhite};
  text-decoration: none;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.3;
  font-style: normal;
  font-weight: 600;
  border: 1px solid ${colorStyled.colorWhite};
  border-radius: 22px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${colorStyled.colorWhite};
    background-color: ${colorStyled.colorBlue};
  }
  &:active {
    border-color: ${colorStyled.colorWhiteFifty};
  }
`;
