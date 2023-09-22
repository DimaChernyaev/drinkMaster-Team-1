import { Formik, Form } from 'formik';
import { Notify } from 'notiflix';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

import {
  StyledButton,
  StyledDialogTitle,
  StyledDiv,
  StyledField,
  StyledTypography,
  TypographyError,
  TypographySuccess,
} from './SignUp.styled';
import {
  StyledBox,
  StyledBoxBig,
  StyledSection,
} from '../Welcome/Welcome.styled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';
import { SignupSchema } from '../../helpers/validateForm/validate-register';
import { signup } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { SkeletonAuth } from '../Skeletons/SkeletonAuth';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const dispatch = useDispatch();

  const handleClickDate = () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
      new AirDatepicker(dateInput, {
        isMobile: true,
        autoClose: true,
        locale: localeEn,
        onSelect: (formattedDate, date, inst) => {
          setBirthdate(formattedDate);
        },
      });
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { date } = birthdate;
    const newUser = { ...values, birthdate: date };
    try {
      setIsLoading(true);
      const response = await dispatch(signup(newUser));
      setIsLoading(false);
      if (response.data) {
        Notify.success('Registration success!', {
          position: 'center-top',
          distance: '10px',
        });
        resetForm();
        return;
      }
      Notify.failure(`${response.error.data.message}`, {
        position: 'center-top',
        distance: '10px',
      });
    } catch (error) {
      Notify.failure(`${error.message}`, {
        position: 'center-top',
        distance: '10px',
      });
    }
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <StyledSection>
      <StyledDiv>
        <StyledBoxBig></StyledBoxBig>
        <StyledBox></StyledBox>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <StyledDialogTitle id="registration" align="left">
                Sign Up
              </StyledDialogTitle>
              {isLoading ? (
                <SkeletonAuth totalRow={5} />
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '14px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      marginBottom: '40px',
                    }}
                  >
                    <StyledField name="name" placeholder="Name" />
                    {errors.name && touched.name ? (
                      <TypographyError>{errors.name}</TypographyError>
                    ) : null}
                    {touched.name && !errors.name ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT name
                      </TypographySuccess>
                    ) : null}
                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <StyledField
                        name="date"
                        placeholder="dd/mm/yyyy"
                        id="date"
                        // value={birthdate}
                      />
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: '12px',
                          right: '24px',
                          width: '20px',
                          height: '20px',
                          flexShrink: 0,
                          color: '#F3F3F3',
                        }}
                        onClick={handleClickDate}
                      >
                        <CalendarTodayIcon />
                      </IconButton>
                    </Box>
                    <StyledField name="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <TypographyError>{errors.email}</TypographyError>
                    ) : null}
                    {touched.email && !errors.email ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT email
                      </TypographySuccess>
                    ) : null}
                    <StyledField name="password" placeholder="Password" />
                    {errors.password && touched.password ? (
                      <TypographyError>{errors.password}</TypographyError>
                    ) : null}
                    {touched.password && !errors.password ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT password
                      </TypographySuccess>
                    ) : null}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <StyledButton type="submit">
                      <StyledTypography>Sign Up</StyledTypography>
                    </StyledButton>
                    <Link to="/signin">
                      <StyledButton type="button">
                        <StyledTypography>Sign In</StyledTypography>
                      </StyledButton>
                    </Link>
                  </Box>
                </>
              )}
            </Form>
          )}
        </Formik>
      </StyledDiv>
    </StyledSection>
  );
};

export default SignUp;
