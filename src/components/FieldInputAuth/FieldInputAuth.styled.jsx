import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  width: 335px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  border: 1px solid
    ${(props) =>
      props.error === 'true'
        ? `var(--errorred-color)`
        : props.success === 'true'
        ? `var(--successgren-color)`
        : `var(--whitefifty-color)`};
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: var(--white-color);
  transition: border var(--transition);

  ::placeholder {
    color: var(--whitefifty-color);
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 156%;
    transition: color var(--transition);
  }

  :hover,
  :focus {
    border: 1px solid var(--whitefifty-color);
    ::placeholder {
      color: rgba(243, 243, 243);
    }
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const TypographyError = styled(Typography)`
  margin-left: 24px;
  margin-bottom: 0;
  color: var(--errorred-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const TypographySuccess = styled(Typography)`
  margin-left: 24px;
  margin-bottom: 0;
  color: var(--successgren-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
