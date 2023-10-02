import styled from '@emotion/styled';

export const StyledLogOutWrapper = styled.div`
  display: block;
  text-align: center;
  width: 500px;
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: var(--blue-color);
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
  color: var(--white-color);
`;

export const LogOutModalBtn = styled.button`
  width: 190px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  color: var(--blue-color);
  background-color: var(--white-color);
  text-decoration: none;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.3;
  font-style: normal;
  font-weight: 600;
  border: 1px solid var(--white-color);
  border-radius: 22px;
  transition: all var(--transition);

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--blue-color);
  }
  &:active {
    border-color: var(--whitefifty-color);
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;
