import styled from '@emotion/styled';
import { Field, ErrorMessage, Form } from 'formik';

export const SubWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 30px;
    align-items: center;

    @media screen and (max-width: 767px) {
      margin-top: 60px;
    }
  }
`;

export const SubFormContenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  @media screen and (min-width: 767px) {
    margin-top: 30px;
  }
`;

export const StyledSubLabel = styled.label`
  display: none;
`;
export const StyledSubField = styled(Field)`
  color: var(--white-color);
  background-color: transparent;
  border-radius: 30px;
  width: 309px;
  height: 56px;
  border: none;
  border: 1px solid var(--whitefifty-color);
  padding: 10px;
  text-align: center;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`;
export const StyledSubError = styled(ErrorMessage)`
  display: flex;
  align-self: center;
  justify-self: center;
  text-align: center;
  position: absolute;
  font-size: 12px;
  font-weight: 200;
  transform: translateY(20px);
  @media screen and (max-width: 767px) {
    transform: translateY(10px);
  }
`;
export const StyledSubBtn = styled.button`
  color: var(--white-color);
  background-color: transparent;
  border-radius: 30px;
  width: 309px;
  height: 56px;
  border: none;
  border: 1px solid var(--whitefifty-color);
  padding: 10px;
  text-align: center;
  margin-top: 20px;

  transition:
    background-color var(--transition),
    color var(--transition);
  &:hover {
    background-color: var(--white-color);
    color: var(--blue-color);
  }
`;

export const StyledSubText = styled.p`
  width: 309px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledSubForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;
