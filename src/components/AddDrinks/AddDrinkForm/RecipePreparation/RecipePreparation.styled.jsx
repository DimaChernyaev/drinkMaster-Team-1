import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';

export const FormError = styled.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`;

export const RecipeTitle = styled.h3`
  color: ${colorStyled.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const RecipeWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const RecipeLabel = styled.label`
  position: absolute;
  top: ${(props) =>
    props.$isFocusedDescription || props.$hasValueDescription
      ? '-30px'
      : '30px'};
  left: 18px;
  transform-origin: left;
  color: ${(props) => (props.$isFocusedDescription ? '#F3F3F380' : '#f3f3f3')};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${(props) => (props.$hasValueDescription ? '#3CBC81' : '#F3F3F380')};
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const RecipeTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 184px;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid ${colorStyled.colorWhiteFifty};
  background-color: transparent;
  color: ${colorStyled.colorWhite};
  font-size: 17px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  @media (min-width: 768px) {
    width: 480px;
  }
`;
