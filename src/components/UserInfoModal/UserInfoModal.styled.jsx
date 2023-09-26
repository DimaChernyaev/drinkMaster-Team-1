import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import CloseIcon from '@mui/icons-material/Close';

export const StyledForm = styled(Form)`
position: relative;
width: 335px;
padding: 50px 25px;
border-radius: 16px;
background-color: #161F37;
`

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 14px;
  right: 14px;
  width:  24px;
  height: 24px;
  color: #F3F3F3;
`

export const StyledField = styled(Field)`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: #f3f3f3;

  ::placeholder {
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
}
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`