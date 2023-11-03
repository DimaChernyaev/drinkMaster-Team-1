import styled from '@emotion/styled';

export const LoweLiner = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;f
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPar = styled.p`
  color: var(--whitefifty-color);
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
  color: var(--whitefifty-color);
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
  padding: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: var(--blue-color);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--whitefifty-color);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledModalText = styled.p`
  font-size: 15px;
  color: var(--whitefifty-color);
`;
