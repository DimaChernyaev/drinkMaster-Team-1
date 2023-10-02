import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';

export const LoweLiner = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPar = styled.p`
  color: ${colorStyled.colorWhiteFifty};
`;

export const TermsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TermsButtons = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: ${colorStyled.colorWhiteFifty};
`;

export const TermsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 90vh;
  background-color: var(--blue-color);
  border-radius: 10px;
  padding: 10px;
  overflow: auto;
`;

export const StyledModalText = styled.p`
  font-size: 15px;
  color: ${colorStyled.colorWhite};
`;
