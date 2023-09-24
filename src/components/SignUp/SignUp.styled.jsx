import styled from '@emotion/styled';
import { Button, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form, Field } from 'formik';

export const StyledDiv = styled.div`
  min-width: 320px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 191px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    align-items: start;
    text-align: left;
    padding-top: 280px;
    margin-left: 64px;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 153px;
    margin-left: 100px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  min-width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  padding: 0;
  margin-bottom: 28px;
  color: #f3f3f3;
  font-feature-settings: 'liga' off;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.8px;
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const StyledField = styled(Field)`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: #f3f3f3;

  ::placeholder {
    color: rgba(243, 243, 243, 0.5);
    font-family: Manrope;
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

  @media screen and (min-width: 768px){
    width: 400px;
  }
`;

export const StyledTypography = styled(Typography)`
font-size: 12px;
font-family: Manrope;
font-style: normal;
font-weight: 600;
line-height: 16px;
text-transform: none;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: rgba(243, 243, 243, 0);
  border-radius: 42px;
  color: #F3F3F3;
  text-decoration-line: underline;


  && {
    &:hover,
    &:focus {
      background-color: #f3f3f3;
      color: #161f37;
      text-decoration-line: none;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const TypographyError = styled(Typography)`
margin-left: 24px;
margin-bottom: 0;
color: #DA1414;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px;
`
export const TypographySuccess = styled(Typography)`
margin-left: 24px;
margin-bottom: 0;
color: #3CBC81;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px;
`