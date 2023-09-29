import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';
import { ReactComponent as MySvg } from '../../../../assets/AddDrink/plus.svg';
import Select from 'react-select';
// export const colorStyled = {
//   colorStyled.colorWhite: '#F3F3F3',
//   colorStyled.colorWhiteFifty: 'rgba(243, 243, 243, 0.5)',
//   colorStyled.colorWhiteFourty: 'rgba(243, 243, 243, 0.4)',
//   colorStyled.colorWhiteTwenty: 'rgba(243, 243, 243, 0.2)',
//   colorStyled.colorBlue: '#161F37',
//   colorStyled.colorBlueFifty: 'rgba(22, 31, 55, 0.5)',
//   colorStyled.colorHover: 'rgba(64, 112, 205, 0.5)',
//   colorStyled.welcomePageText: '#FAFAFA',
//   colorStyled.backgroundBlackColor: '#0A0A11',
//   colorStyled.buttonCancel: '#434D67',
// };

export const FormError = styled.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`;

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

export const ImageDrink = styled.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`;

export const ImageInputWrapper = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
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
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`;
export const PlusSVG = styled(MySvg)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${colorStyled.colorBlue};
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
  width: 100%;
`;

export const NameLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '3px' : '30px')};
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
  border: 1px solid transparent;
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

export const RecipeWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const RecipeLabel = styled.label`
  position: absolute;
  top: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription ? '3px' : '30px'};
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

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
`;

export const CategoryLabel = styled.label`
  position: absolute;
  top: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription ? '5px' : '30px'};
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

export const CategorySelect = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          width: '240px',
        }),
        control: (provided, state ) => ({
          ...provided,

          backgroundColor: 'transparent',
          border: state.isFocused ? 'none' : 'none',

        }),
        placeholder: (provided, state) => ({
          ...provided,
          margin: 0,
          color: state.isFocused
            ? `${colorStyled.colorWhite}`
            : `${colorStyled.colorWhiteFifty}`,
        }),
        option: (provided) => ({
          ...provided,
          padding: '14px',
          color: `${colorStyled.colorWhiteFifty}`,
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            color: `${colorStyled.colorWhite}`, // Измените цвет рамки при наведении
          },
        }),
        input: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
          border: 'none',
          color: `${colorStyled.colorWhite}`,
        }),
        menu: (provided) => ({
          ...provided,
          padding: '14px',
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          textAlign: 'right',
          color: state.isFocused
            ? `${colorStyled.colorWhiteFifty}`
            : `${colorStyled.colorWhite}`, // Установите цвет текста элемента списка здесь
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: 0, // Установите цвет текста элемента списка здесь
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)', // Поворачиваем стрелку вверх при открытии меню
        }),
      }}
    />
  );
};

export const ServingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
`;

export const ServingLabel = styled.label`
  position: absolute;
  top: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription ? '5px' : '30px'};
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

export const ServingSelect = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          width: '240px',
        }),
        control: (provided, state) => ({
          ...provided,

          backgroundColor: 'transparent',
          border: state.isFocused ? 'none' : 'none',
        }),
        placeholder: (provided, state) => ({
          ...provided,
          margin: 0,
          color: state.isFocused
            ? `${colorStyled.colorWhite}`
            : `${colorStyled.colorWhiteFifty}`,
        }),
        option: (provided) => ({
          ...provided,
          padding: '14px',
          color: `${colorStyled.colorWhiteFifty}`,
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            color: `${colorStyled.colorWhite}`, // Измените цвет рамки при наведении
          },
        }),
        input: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
          border: 'none',
          color: `${colorStyled.colorWhite}`,
        }),
        menu: (provided) => ({
          ...provided,
          padding: '14px',
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          textAlign: 'right',
          color: state.isFocused
            ? `${colorStyled.colorWhiteFifty}`
            : `${colorStyled.colorWhite}`, // Установите цвет текста элемента списка здесь
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: 0, // Установите цвет текста элемента списка здесь
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)', // Поворачиваем стрелку вверх при открытии меню
        }),
      }}
    />
  );
};

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  margin-left: 4px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RadioLabel = styled.label`
  // Ваши стили для RadioLabel
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.checked ? '#F3F3F3' : '#F3F3F380')};

  &.checked {
    color: #f3f3f3;
  }
`;

export const RadioInput = styled.input`
  // Ваши стили для RadioInput
  &[type='radio'] {
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

//checked-style
export const RadioSpan = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${colorStyled.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;

  ${RadioInput}:checked + & {
    border-color: ${colorStyled.colorWhite};
  }

  ${RadioInput}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${colorStyled.colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
