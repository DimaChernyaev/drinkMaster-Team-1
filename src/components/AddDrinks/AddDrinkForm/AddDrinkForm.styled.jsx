import styled from 'styled-components';

export const FormButton = styled.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: var(--btn-add-drink-color);
  background-color: var(--btn-add-drink-background);

  border: 1px solid #161f37;
  border-radius: 42px;
  word-wrap: break-word;
  transition:
    background-color var(--transition),
    color var(--transition);

  &:hover {
    background-color: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
