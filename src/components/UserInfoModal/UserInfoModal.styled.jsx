import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Dialog } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const StyledForm = styled(Form)`
  position: relative;
  width: 335px;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: var(--blue-color);

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 50px 50px 75px 50px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 39px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 66px;
  }
`;

export const StyledBox = styled(Box)`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 80%;
  left: 45%;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 84%;
    left: 46%;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 18px;
    right: 18px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  border: 1px solid var(--white-fifty-color);
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: var(--white-color);

  ::placeholder {
    color: var(--white-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    ::placeholder {
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  width: 16px;
  height: 16px;
  color: #f3f3f3;
  position: absolute;
  top: 19px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledDialog = styled(Dialog)`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    background-color: transparent;
`;
