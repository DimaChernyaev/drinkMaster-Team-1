import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';

export const UserLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  position: relative;
  @media screen and (max-width: 1440px) {
    margin-left: auto;
    margin-right: 24px;
  }
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  padding: 0;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.29;
  font-style: normal;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const UserLogoImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 38px;
  width: 38px;
`;

export const UserLogoText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorStyled.colorWhite};
`;
