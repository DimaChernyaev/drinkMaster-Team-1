import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  width: 335px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  // border: 1px solid
  //   ${(props) =>
    props.error === 'true' ? '#da1414' : 'rgba(243, 243, 243, 0.5)'};
  // border: 1px solid
  //   ${(props) =>
    props.success === 'true' ? '#3CBC81' : 'rgba(243, 243, 243, 0.5)'};
  border: 1px solid
    ${(props) =>
      props.error === 'true'
        ? '#da1414'
        : props.success === 'true'
        ? '#3CBC81'
        : 'rgba(243, 243, 243, 0.5)'};
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: #f3f3f3;

  ::placeholder {
    color: rgba(243, 243, 243, 0.5);
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 156%;
  }

  :hover,
  :focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
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
  color: #da1414;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const TypographySuccess = styled(Typography)`
  margin-left: 24px;
  margin-bottom: 0;
  color: #3cbc81;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
