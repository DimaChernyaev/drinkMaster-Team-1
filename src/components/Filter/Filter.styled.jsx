import styled from '@emotion/styled';
// import { StylesConfig } from 'react-select';
import { colorStyled } from '../../helpers/colorStyled';
import { ReactComponent as lookUpSvg } from '../../assets/images/search.svg';

export const FilterStyles = styled.div`

  // modile
  // display: flex;
  // flex-direction: column;
  // padding: 0;
  // margin-bottom: 40px;
  // row-gap: 14px;
  
  // //tablet
  // @media (min-width: 768px) {
  //   flex-direction: row;
  //   column-gap: 8px;
  //   justify-content: flex-start;
  // }
  
   //desktop
  
`;

export const FilterForm = styled.form`

  // modile
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;
  
  //tablet
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }
  
   //desktop
  
`;

export const LabelInputStyles = styled.label`

  

`;

export const InputStyles = styled.input`
  width: 264px;
  padding: 14px 24px 14px 24px;
  //height: 56px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${colorStyled.colorWhiteTwenty};
  font-family: Manrope;
  font-weight: 400;
  font-size: 17px;
  font-height : 1.56;
  color: ${colorStyled.colorWhiteFifty};

  &:hover{
    border-color:  ${colorStyled.colorWhiteFifty};
    color:  ${colorStyled.colorWhite};
  };

  &:focus{
    border-color:  ${colorStyled.colorWhiteFifty};
    color:  ${colorStyled.colorWhite};
  };

  &:active{
    border-color:  ${colorStyled.colorWhiteFifty};
    color:  ${colorStyled.colorWhite};
  };
`;

export const LookUpButton = styled.button`
    position: absolute;
    padding: 0;
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
`;

export const LookUpButtonSpan = styled.span`
  position: relative;
  display: block;
`;


export const LookUpIcon = styled(lookUpSvg)`

transform: translate(0, -50%);
position: absolute;
right: -226px;
stroke: ${colorStyled.colorWhite};

`;


// export const IngredientsSelect = ({ options, ...props }) => {
//   return (
//     <Select
//       {...props}
//       options={options}
//       styles={{
//         container: (provided) => ({
//           ...provided,
//           minWidth: '60%',
//         }),
//         control: (provided, state) => ({
//           ...provided,
//           height: 'auto',
//           padding: '16px',
//           backgroundColor: 'transparent',
//           border: state.isFocused
//             ? `1px solid ${colorStyled.colorWhite}`
//             : `1px solid ${colorStyled.colorWhiteFifty}`,
//           borderRadius: '200px',
//           '&:hover': {
//             borderColor: `${colorStyled.colorWhite}`, // Измените цвет рамки при наведении
//           },
//         }),
//         placeholder: (provided, state) => ({
//           ...provided,
//           margin: 0,
//           color: state.isFocused
//             ? `${colorStyled.colorWhite}`
//             : `${colorStyled.colorWhiteFifty}`,
//         }),
//         option: (provided) => ({
//           ...provided,
//           padding: '14px',
//           color: `${colorStyled.colorWhiteFifty}`,
//           background: '#161F37',
//           borderRadius: '20px',
//           overflow: 'hidden',
//           cursor: 'pointer',
//           '&:hover': {
//             color: `${colorStyled.colorWhite}`, // Измените цвет рамки при наведении
//           },
//         }),
//         input: (provided) => ({
//           ...provided,
//           padding: 0,
//           margin: 0,
//           border: 'none',
//           color: `${colorStyled.colorWhite}`,
//         }),
//         menu: (provided) => ({
//           ...provided,
//           padding: '14px',
//           background: '#161F37',
//           borderRadius: '20px',
//           overflow: 'hidden',
//         }),
//         indicatorSeparator: (provided) => ({
//           ...provided,
//           display: 'none',
//         }),
//         singleValue: (provided, state) => ({
//           ...provided,
//           color: state.isFocused
//             ? `${colorStyled.colorWhiteFifty}`
//             : `${colorStyled.colorWhite}`, // Установите цвет текста элемента списка здесь
//         }),
//         valueContainer: (provided) => ({
//           ...provided,
//           padding: 0, // Установите цвет текста элемента списка здесь
//         }),
//         dropdownIndicator: (provided, state) => ({
//           ...provided,
//           transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)', // Поворачиваем стрелку вверх при открытии меню
//         }),
//       }}
//     />
//   );
// };






















// export const creatableSelectStyles = {
//   width: '50px',
//   option: (styles, { isDisabled}) => {
//     return {
//       ...styles,

//       color: '#FFF',
//       cursor: isDisabled ? 'not-allowed' : 'default',
//     };
//   },
// };


// const colourStyles: StylesConfig<option> = {
//   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? data.color
//         : isFocused
//         ? color.alpha(0.1).css()
//         : undefined,
//       color: isDisabled
//         ? '#ccc'
//         : isSelected
//         ? chroma.contrast(color, 'white') > 2
//           ? 'white'
//           : 'black'
//         : data.color,
//       cursor: isDisabled ? 'not-allowed' : 'default',

//       ':active': {
//         ...styles[':active'],
//         backgroundColor: !isDisabled
//           ? isSelected
//             ? data.color
//             : color.alpha(0.3).css()
//           : undefined,
//       },
//     };
//   },
//   input: (styles) => ({ ...styles, ...dot() }),
//   placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
//   singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
// };


// CreatableInputStyles