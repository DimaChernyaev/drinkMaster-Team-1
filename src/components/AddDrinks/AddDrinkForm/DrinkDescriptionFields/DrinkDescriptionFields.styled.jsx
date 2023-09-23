import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';

// export const colorStyled = {
//   colorWhite: '#F3F3F3',
//   colorWhiteFifty: 'rgba(243, 243, 243, 0.5)',
//   colorWhiteFourty: 'rgba(243, 243, 243, 0.4)',
//   colorWhiteTwenty: 'rgba(243, 243, 243, 0.2)',
//   colorBlue: '#161F37',
//   colorBlueFifty: 'rgba(22, 31, 55, 0.5)',
//   colorHover: 'rgba(64, 112, 205, 0.5)',
//   welcomePageText: '#FAFAFA',
//   backgroundBlackColor: '#0A0A11',
//   buttonCancel: '#434D67',
// };

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 320px;

  background: ${colorStyled.colorBlueFifty};
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`;

export const ImageInputWrapper = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const ImageInput = styled.input`
  &[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
export const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    margin-bottom: 18px;

    background: ${colorStyled.colorWhite};
    color: ${colorStyled.colorBlue};

    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
`;
export const NameWrapper = styled.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`;
export const NameInputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const NameLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '10px' : '30px')};
  left: 10px;
  transform-origin: left;
  color: ${(props) => (props.$isFocused ? '#F3F3F380' : '#f3f3f3')};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${(props) => (props.$hasValue ? '#3CBC81' : '#F3F3F380')};
  font-size: ${(props) =>
    props.$isFocused || props.$hasValue ? '12px' : '14px'};
`;

export const NameInput = styled.input`
  color: #f3f3f3;
  padding: 8px;
  outline: none;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 19px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${NameLabel}, &:not(:placeholder-shown) + ${NameLabel} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
`;
///////////////////////////////////////////////////
export const RecipeWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const RecipeLabel = styled.label`
  position: absolute;
  top: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription
      ? '10px'
      : '30px'};
  left: 10px;
  transform-origin: left;
  color: ${(props) => (props.$isFocusedDescription ? '#F3F3F380' : '#f3f3f3')};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${(props) => (props.$hasValueDescription ? '#3CBC81' : '#F3F3F380')};
  font-size: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription
      ? '12px'
      : '14px'};
`;

export const RecipeTextarea = styled.textarea`
  resize: none;
  color: #f3f3f3;
  padding: 8px;
  outline: none;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 19px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${RecipeLabel}, &:not(:placeholder-shown) + ${RecipeLabel} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: rgba(22, 31, 55, 0.5);
    border-radius: 9em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStyled.colorWhite};
    border-radius: 9em;
    /* box-shadow: inset 1px 1px 10px #f3faf7; */
  }
`;

// .input-group{
//   position: relative;
// }

// .input-group__input{
//     color: #f3f3f3;
//   padding: 8px;
//   border: none;
//   border-radius: 4px;
//   outline: 2px solid #f3f3f3;
//   background-color: transparent;
//   transition: outline-color 250ms;
// }

// .input-group__input:focus{
//   outline-color: #3cbc81;
// }

// .input-group__lable{
//     position: absolute;
//   top: 0;
//   left: 0;
//   transform: translate(10px, 10px);
//   transform-origin: left;
//   color: #f3f3f3;
//   transition: transform 200ms;
// }

// .input-group__input:focus + .input-group__lable,
// .input-group__input:valid + .input-group__lable{
//   transform: translate(10px, -30px) scale(0.8);
// }
