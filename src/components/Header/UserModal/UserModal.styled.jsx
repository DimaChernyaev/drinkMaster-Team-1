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
  /* transition: transform 1s ease; */
`;

export const LogOutBtn = styled.button`
  width: 143px;
  height: 45px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  border-radius: 40px;
`;
