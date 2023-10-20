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

  color: var(--blue-color);
  background-color: var(--white-color);

  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  transition:
    color var(--transition),
    background var(--transition);
  &:hover {
    color: var(--white-color);
    background-color: var(--blue-color);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
