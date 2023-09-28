import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';

export const StyledLogOutWrapper = styled.div`
  display: block;
  text-align: center;
  width: 500px;
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${colorStyled.colorBlue};
  transform: translate(-50%, -50%);
  z-index: 200;
  color: white;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 30px;
  }
  @media screen and (max-width: 420px) {
    width: 350px;
    padding: 15px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledPar = styled.p`
  color: ${colorStyled.colorWhite};
`;

export const LogOutModalBtn = styled.button`
  width: 190px;
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
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;
