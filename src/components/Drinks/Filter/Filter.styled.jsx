import styled from '@emotion/styled';
import { ReactComponent as lookUpSvg } from '../../../assets/images/search.svg';

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

export const Styled_InputLabel = styled.label``;

export const Styled_Span_for_Input_and_LookUpIcon = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const Styled_Input = styled.input`
  // mobile
  font-weight: 400;
  font-size: 14px;
  font-height: 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid var(--filter-border);
  color: var(--text-color);
  transition:
    border-color var(--transition),
    background-color var(--transition);

  &::placeholder {
    color: var(--text-color);
  }

  &:hover {
    border-color: var(--whitefifty-color);
    //color:  var(--white-color);
  }

  &:focus {
    border-color: var(--whitefifty-color);
    //color:  var(--white-color);
  }

  // tablet
  @media (min-width: 768px) {
    font-size: 17px;
    width: 264px;
  }
`;

export const LookUpSpan = styled.span`
  position: absolute;
  //transform: translate(30, 0);
  right: 24px;
  top: 17px;
  padding: 0;
  border: 0;
  background-color: transparent;
  //cursor: pointer;
  outline: none;
`;

export const LookUpIcon = styled(lookUpSvg)`
  width: 20px;
  height: 20px;
  stroke: var(--white-color);
  transition: stroke-width var(--transition);

  &:hover {
    stroke-width: 1.8;
  }

  &:focus {
    stroke-width: 1.8;
  }
`;

export const CreatableSelectStyles = (maxHeight, minHeight, controlOption) => {
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      padding: '10px 16px 10px 22px',
      fontWeight: '400',
      fontSize: '14px',
      fontHeight: '1.56',
      letterSpacing: '-0.04em',

      width: '100%',
      height: '56px',

      border: 'none',
      borderRadius: '200px',
      backgroundColor: `var(--blue-color)`,
      transition: `border var(--transition)`,

      ':hover': {
        // ...baseStyles[':hover'],
        border: `1px solid var(--whitetwenty-color)`,
      },

      ':focus': {
        ...baseStyles[':focus'],
        border: `1px solid var(--whitetwenty-color)`,
      },

      '@media only screen and (min-width: 768px)': {
        ...baseStyles['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
        width: '199px',
      },
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: '0',
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      padding: '0',
      marging: '0',
      color: `var(--white-color)`,
      transition: `color var(--transition)`,
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isFocused ? `var(--whitefifty-color)` : `var(--white-color)`,
      transition: `opacity var(--transition)`,
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: `var(--white-color)`,
    }),
    indicatorSeparator: (baseStyles) => ({
      display: 'none',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      padding: '14px 8px 14px 8px',
      fontWeight: '400',
      fontSize: '14px',
      fontHeight: '1.56',

      backgroundColor: `var(--filter-background)`,
      border: 'none',
      borderRadius: '20px',

      transition: `all var(--transition)`,

      '@media only screen and (min-width: 768px)': {
        ...baseStyles['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
        width: '199px',
      },
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      padding: '0',
      maxHeight: `${maxHeight}`, //'377px',
      minHeight: `${minHeight}`, //'278px',
      overflow: 'scroll',
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'none',
      },
      '::-webkit-scrollbar-thumb': {
        background: `var(--buttoncancel-color)`,
      },
      '::-webkit-scrollbar-corner': {
        background: 'none',
      },
    }),
    option: (baseStyles, { data, isDisabled, isFocused, isSelected }) => ({
      ...baseStyles,
      padding: '8px 7px  8px 15px',
      backgroundColor: 'transparent',
      color:
        controlOption === ''
          ? `color: var(--text-color)`
          : isSelected
          ? `color: var(--text-color)`
          : `var(--whitefourty-color)`,
      cursor: isDisabled ? 'not-allowed' : 'default',
      transition: `color var(--transition)`,
      ':hover': {
        ...baseStyles[':hover'],
        color:
          controlOption === ''
            ? `var(--whitefifty-color)`
            : `var(--whitefifty-color)`,
      },
      ':active': {
        ...baseStyles[':active'],
        borderRadius: '200px',
      },
    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: `color var(--transition)`,
      ':hover': {
        ...baseStyles[':hover'],
        color: `var(--white-color)`,
      },
    }),
    clearIndicator: (baseStyles) => ({
      ...baseStyles,
      display: 'none',
    }),
  };
};
