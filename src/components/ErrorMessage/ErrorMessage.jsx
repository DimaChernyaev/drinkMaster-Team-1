import styled from '@emotion/styled';

export const ErorrText = styled.div`
  font-size: 20px;
  text-align: center;
  color: red;
`;

export const ErrorMessage = ({ children }) => {
  return <ErorrText> {children}</ErorrText>;
};
