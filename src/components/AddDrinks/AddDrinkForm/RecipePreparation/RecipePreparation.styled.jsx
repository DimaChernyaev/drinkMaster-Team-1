import styled from 'styled-components';

export const FormError = styled.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`;

export const RecipeTitle = styled.h3`
  color: var(--text-color);
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
  color: ${(props) =>
    props.$isFocusedDescription ? `var(--whitefifty-color)` : `(--text-color)`};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${(props) =>
    props.$hasValueDescription
      ? `var(--successgren-color)`
      : `var(--whiteeighty-color)`};
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
  border: 1px solid var(--whitefifty-color);
  background-color: transparent;
  color: var(--text-color);
  font-size: 17px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;

  &::placeholder {
    color: var(--placeholder-color);
    padding-top: 8px;
    padding-left: 10px;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
  }

  @media (min-width: 768px) {
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
    padding-top: 6px;
    padding-left: 16px;
  }
`;
