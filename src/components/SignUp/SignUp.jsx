import { Formik, Form } from 'formik';
import { Box, IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'air-datepicker/air-datepicker.css';
import './signUp.css';
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
import { SignupSchema } from '../../helpers/validateForm/validate-register';
import { signup } from '../../redux/auth/authOperations';
import { SkeletonAuth } from '../Skeletons/SkeletonAuth';
import { FieldInputAuth } from '../FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from '../FieldInputAuthPass/FieldInputAuthPass';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [birthdate, setBirthdate] = useState('');
  const dispatch = useDispatch();

  const handleClickDate = (setFieldValue) => {
    const dateInput = document.getElementById('birthdate');

    if (dateInput) {
      const calendar = new AirDatepicker(dateInput, {
        isMobile: true,
        autoClose: true,
        selectedDates: [new Date()],
        locale: localeEn,
        // buttons: ['today', 'clear'],
        onSelect: (formattedDate) => {
          setFieldValue('birthdate', formattedDate.formattedDate);
          calendar.destroy();
        },
      });
      calendar.show();
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values-->', values);
    const newUser = { ...values};

    try {
      setIsLoading(true);
      await dispatch(signup(newUser));
      setIsLoading(false);

      resetForm();
    } catch (error) {
      console.log('Помилка сабміту при реєстрації', error.message);
    }
    resetForm();
  };

  const initialValues = {
    name: '',
    birthdate: '',
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
          {({ errors, touched, setFieldValue }) => (
            <Form style={{ zIndex: 3, minWidth: '335px' }}>
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
                    <FieldInputAuth
                      errors={errors}
                      touched={touched}
                      name="name"
                      placeholder="Name"
                    />

                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <StyledField
                        name="birthdate"
                        placeholder="dd/mm/yyyy"
                        id="birthdate"
                        error={errors.birthdate && touched.birthdate ? 'true' : 'false'}
                        success={touched.birthdate && !errors.birthdate  ? 'true' : 'false'}
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
                        onClick={()=>handleClickDate(setFieldValue)}
                      >
                        <CalendarTodayIcon
                          sx={{
                            color:
                              (errors.birthdate && touched.birthdate && '#da1414') ||
                              (touched.birthdate && !errors.birthdate && '#3CBC81'),
                          }}
                        />
                      </IconButton>
                    </Box>
                    {errors.birthdate && touched.birthdate ? (
                      <TypographyError>{errors.birthdate}</TypographyError>
                    ) : null}
                    {touched.birthdate && !errors.birthdate ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT date
                      </TypographySuccess>
                    ) : null}

                    <FieldInputAuth
                      errors={errors}
                      touched={touched}
                      name="email"
                      placeholder="Email"
                    />

                    <FieldInputAuthPass errors={errors} touched={touched} />
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
