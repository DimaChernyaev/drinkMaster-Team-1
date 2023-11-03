import styled from '@emotion/styled';

export const BurgerModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  z-index: 100;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

export const StyledBlockBurger = styled.div`
  position: fixed;
  top: 10px;
  left: -780px;
  width: 784px;
  height: 849px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: -10;
`;

export const StyledBlockTwoBurger = styled.div`
  position: absolute;
  display: flex;
  z-index: -1;
  top: 498px;
  right: -470px;
  width: 549px;
  height: 543px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: -10;
`;
