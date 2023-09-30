import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    width: 375px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  padding-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--whitetwenty-color);
`;

export const StyledBlock = styled.div`
  position: absolute;
  top: 20px;
  left: -710px;
  width: 784px;
  height: 849px;
  flex-shrink: 0;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: 1;
`;
