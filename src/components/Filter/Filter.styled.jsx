import styled from '@emotion/styled';
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
  margin-top: 40px;
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

export const Styled_InputLabel = styled.label`

  

`;

export const Styled_Span_for_Input_and_LookUpBtn = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const Styled_Input = styled.input`

// mobile
  font-family: Manrope;
  font-weight: 400;
  font-size: 17px;
  font-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${colorStyled.colorWhiteTwenty};
  color: ${colorStyled.colorWhite};

  &:hover{
    border-color:  ${colorStyled.colorWhiteFifty};
    //color:  ${colorStyled.colorWhite};
  };

  &:focus{
    border-color:  ${colorStyled.colorWhiteFifty};
    //color:  ${colorStyled.colorWhite};
  };

  // tablet
    @media (min-width: 768px) {
      width: 264px;
    }
`;


export const LookUpButton = styled.button`
    position: absolute;
    //transform: translate(30, 0);
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
`;

export const LookUpIcon = styled(lookUpSvg)`
    width: 20px;
    height: 20px;
    stroke: ${colorStyled.colorWhite};

    &:hover{
      stroke-width: 1.8;
    };
  
    &:focus{
      stroke-width: 1.8;
    };

`;

export const CreatableSelectStyles = (maxHeight, minHeight) => {
    return (
      { 
        control: (baseStyles, state) => ({
            ...baseStyles, 
            padding: '10px 16px 10px 22px',
            
            fontFamily: 'Manrope',
            fontWeight: '400',
            fontSize: '17px',
            fontHeight : '1.56',
            letterSpacing: '-0.04em',
            
            width: "199px",
            height: "56px",

            border: "none",
            borderRadius: "200px",
            backgroundColor: `${colorStyled.colorBlue}`,
          }),
        valueContainer: (baseStyles)=>({
            ...baseStyles,
            padding: '0',
          }),
        input: (baseStyles) => ({
            ...baseStyles,
            padding: '0',
            marging: '0',
            color: `${colorStyled.colorWhite}`,
          }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused
          ? `${colorStyled.colorWhiteFifty}`
          : `${colorStyled.colorWhite}`,
          }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: `${colorStyled.colorWhite}`,
          }),
        indicatorSeparator: (baseStyles)=>({
          display: 'none',
          }),
        menu: (baseStyles) => ({
          ...baseStyles,
          padding: '14px 8px 14px 8px',
          fontWeight: '400',
          fontSize: '17px',
          fontHeight : '1.56',

          backgroundColor: `${colorStyled.colorBlue}`,
          border: 'none',
          borderRadius: "20px",
          
          }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          padding: '0',
          maxHeight: `${maxHeight}`, //'377px',
          minHeight: `${minHeight}`, //'278px',
          overflow: 'scroll',
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "none"
          },
          "::-webkit-scrollbar-thumb": {
            background: `${colorStyled.buttonCancel}`
          },
          "::-webkit-scrollbar-corner": {
            background: 'none',
          },          

          }),
        option: (baseStyles, { data, isDisabled, isFocused, isSelected }) => ({
          ...baseStyles,
          padding: '8px 7px  8px 15px',
          backgroundColor: 'transparent',
          color: isSelected ? `${colorStyled.colorWhite}` : `${colorStyled.colorWhiteFourty}`,
          cursor: isDisabled ? 'not-allowed' : 'default',
          ':hover': {
            ...baseStyles[':hover'],
            color: `${colorStyled.colorWhite}`
          },
          ':active': {
            ...baseStyles[':active'],
            color: `${colorStyled.colorWhiteFifty}`,
            borderRadius: "200px",
          },
  
          }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
          }),
        
      }
  )};


    // const color = chroma(data.color);
    // return {
    //   ...styles,
    //   backgroundColor: isDisabled
    //     ? undefined
    //     : isSelected
    //     ? data.color
    //     : isFocused
    //     ? color.alpha(0.1).css()
    //     : undefined,
    //   color: isDisabled
    //     ? '#ccc'
    //     : isSelected
    //     ? chroma.contrast(color, 'white') > 2
    //       ? 'white'
    //       : 'black'
    //     : data.color,
    //   cursor: isDisabled ? 'not-allowed' : 'default',

    //   ':active': {
    //     ...styles[':active'],
    //     backgroundColor: !isDisabled
    //       ? isSelected
    //         ? data.color
    //         : color.alpha(0.3).css()
    //       : undefined,
    //   },
    // };
