import styled from 'styled-components';
import { ReactComponent as PlusSVG } from '../../../../assets/AddDrink/PlusForm.svg';
import { ReactComponent as MinuseSVG } from '../../../../assets/AddDrink/MinusForm.svg';
import { ReactComponent as DeleteSVG } from '../../../../assets/AddDrink/X.svg';
import Select from 'react-select';

export const FormError = styled.div`
  flex-basis: 100%;
  font-size: 12px;
  color: var(--errorred-color);
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    width: 540px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const IngredientsTitle = styled.h3`
  font-size: 28px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid var(--placeholder-color);
`;

export const ControlMinuse = styled(MinuseSVG)`
  stroke: var(--text-color);
`;

export const ControlsButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: var(--whitefifty-color);
  }
`;

export const IngredientsWrapperSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
    justify-content: flex-start;
  }
`;

export const IngredientsSelect = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          minWidth: '140px',
          '@media (min-width: 375px)': {
            minWidth: '200px',
          },
          '@media (min-width: 768px)': {
            minWidth: '332px',
          },
        }),

        control: (provided, state) => ({
          ...provided,
          height: 'auto',
          padding: '6px 16px',
          backgroundColor: 'transparent',
          border: state.isFocused
            ? `1px solid var(--text-color)`
            : `1px solid var(--whitefifty-color)`,
          boxShadow: state.isFocused ? 'none' : 'none',
          borderRadius: '200px',
          transition: `border-color var(--transition)`,
          '&:hover': {
            borderColor: `var(--text-color)`,
          },
          '@media (min-width: 768px)': {
            padding: '9px 19px',
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          margin: 0,
          color: state.isFocused
            ? `var(--text-color)`
            : `var(--whitefifty-color)`,
        }),
        option: (provided) => ({
          ...provided,
          padding: '14px',
          color: `var(--whitefifty-color)`,
          background: `var(--filter-background)`,
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: `color var(--transition)`,
          '&:hover': {
            color: `var(--text-color)`,
          },
        }),
        input: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
          border: 'none',
          color: `var(--text-color)`,
        }),
        menu: (provided) => ({
          ...provided,
          padding: '14px',
          background: `var(--filter-background)`,
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        menuList: (provided) => ({
          ...provided,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: state.isFocused
            ? `var(--whitefifty-color)`
            : `var(--text-color)`,
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: 0,
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
        }),
      }}
    />
  );
};

export const IngredientsDeleteButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: var(--whitefifty-color);
  }
  @media (min-width: 375px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export const ControlPluse = styled(PlusSVG)`
  stroke: var(--text-color);
`;

export const IngredientsDelete = styled(DeleteSVG)`
  stroke: var(--whitefifty-color);
  transition: stroke var(--transition);

  &:hover {
    stroke: var(--text-color);
  }
`;

export const IngredientsInput = styled.input`
  width: 100px;
  padding: 15px 24px;

  font-size: 14px;
  line-height: 18px;
  color: var(--whitefifty-color);
  background-color: transparent;
  // background-color: var(--background-color-ingredients);

  border-radius: 200px;
  border: 1px solid var(--whitefifty-color);
  box-sizing: border-box;
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--text-color);
  }
  &:focus {
    color: var(--text-color);
  }
  @media (min-width: 768px) {
    min-width: 150px;
    padding: 18px 24px;
  }
`;
