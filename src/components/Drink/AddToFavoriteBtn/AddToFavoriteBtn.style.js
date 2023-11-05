import styled from 'styled-components';

export const Button = styled.button`
  @media (max-width: 374px) {
    margin-left: 40px;
  }

  width: 222px;
  color: var(--btn-add-drink-color);
  background-color: var(--btn-add-drink-background);
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color var(--transition),
    color var(--transition);

  &:hover,
  &:focus {
    background: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  &:active {
    babackground: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
    box-shadow: 0 0 10px var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
