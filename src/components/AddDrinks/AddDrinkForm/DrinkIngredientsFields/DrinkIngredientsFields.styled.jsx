import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';
import { ReactComponent as PlusSVG } from '../../../../assets/AddDrink/PlusForm.svg';
import { ReactComponent as MinuseSVG } from '../../../../assets/AddDrink/MinusForm.svg';
import { ReactComponent as DeleteSVG } from '../../../../assets/AddDrink/X.svg';
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
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`;

export const IngredientsWrapper = styled.div`
  margin-top: 80px;
`;
export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const IngredientsTitle = styled.h3`
  font-size: 28px;
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${colorStyled.colorWhiteFifty};
`;

export const ControlMinuse = styled(MinuseSVG)`
  stroke: ${colorStyled.colorWhite};
`;

export const ControlsButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }
`;

export const IngredientsWrapperSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 24px;
`;

export const IngredientsSelect = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          minWidth: '60%',
        }),
        control: (provided, state) => ({
          ...provided,
          height: 'auto',
          padding: '16px',
          backgroundColor: 'transparent',
          border: state.isFocused
            ? `1px solid ${colorStyled.colorWhite}`
            : `1px solid ${colorStyled.colorWhiteFifty}`,
          borderRadius: '200px',
          '&:hover': {
            borderColor: `${colorStyled.colorWhite}`, // Измените цвет рамки при наведении
          },
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

export const IngredientsDeleteButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: 40px;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }
`;

export const ControlPluse = styled(PlusSVG)`
  stroke: ${colorStyled.colorWhite};
`;
export const IngredientsDelete = styled(DeleteSVG)`
  stroke: ${colorStyled.colorWhiteFifty};
  &:hover {
    stroke: ${colorStyled.colorWhite};
  }
`;
export const IngredientsInput = styled.input`
  min-width: 20%;
  height: 60px;
  padding: 16px 24px;

  font-size: 14px;
  line-height: 18px;
  color: ${colorStyled.colorWhiteFifty};
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;
  &:hover {
    border-color: ${colorStyled.colorWhite};
  }
  &:focus {
    color: ${colorStyled.colorWhite};
  }
`;