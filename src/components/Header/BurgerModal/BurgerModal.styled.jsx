import styled from '@emotion/styled';

export const BurgerModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainbackground-color);
  z-index: 100;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

// export const BurgerModalWrapper = styled.div`
//   position: fixed;
//   top: ${(props) => (props.isOpen ? '0' : '-100vh')};
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: ${colorStyled.backgroundBlackColor};
//   z-index: 100;

//   transform: translateY(${(props) => (props.isOpen ? '0' : '-100vh')});
//   transition: transform 600ms ease;
// `;
