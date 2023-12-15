import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  position: relative;
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
  top: 10px;
  left: -780px;
  width: 784px;
  height: 849px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: -10;
`;

// export const StyledBlockTwo = styled.div`
//   position: absolute;
//   display: flex;
//   z-index: -1;
//   top: 498px;
//   right: -470px;
//   width: 549px;
//   height: 543px;
//   border-radius: 550px;
//   background: rgba(64, 112, 205, 0.5);
//   filter: blur(104.854px);
//   z-index: -10;
// `;

