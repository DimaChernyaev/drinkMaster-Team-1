import { Formik, Form } from 'formik';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'air-datepicker/air-datepicker.css';
import '../../index.css';
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

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickDate = () => {
    const dateInput = document.getElementById('date');

    if (dateInput) {
      const calendar = new AirDatepicker(dateInput, {
        isMobile: true,
        autoClose: true,
        selectedDates: [new Date()],
        locale: localeEn,
        buttons: ['today', 'clear'],
        onSelect: (formattedDate) => {
          setBirthdate(formattedDate);
          calendar.destroy();
        },
      });
      calendar.show();
    }
  };

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { date } = birthdate;
    const newUser = { ...values, birthdate: date };

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
                    <Box sx={{ position: 'relative' }}>
                      <StyledField
                        name="name"
                        placeholder="Name"
                        error={errors.name && touched.name ? 'true' : 'false'}
                        success={
                          touched.name && !errors.name ? 'true' : 'false'
                        }
                      />
                      {errors.name && touched.name && (
                        <ErrorOutlineIcon
                          sx={{
                            position: 'absolute',
                            color: '#da1414',
                            top: '12px',
                            right: '24px',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      )}
                      {touched.name && !errors.name && (
                        <CheckCircleOutlineIcon
                          sx={{
                            position: 'absolute',
                            color: '#3CBC81',
                            top: '12px',
                            right: '24px',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      )}
                    </Box>
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
                        disabled
                        error={!birthdate  ? 'true' : 'false'}
                        success={birthdate ? 'true' : 'false'}
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
                        <CalendarTodayIcon
                          sx={{
                            color:
                              (!birthdate && '#da1414') ||
                              (birthdate && '#3CBC81'),
                          }}
                        />
                      </IconButton>
                    </Box>
                    {!birthdate ? (
                      <TypographyError>{errors.date}</TypographyError>
                    ) : null}
                    {birthdate ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT date
                      </TypographySuccess>
                    ) : null}

                    <Box sx={{ position: 'relative' }}>
                      <StyledField
                        name="email"
                        placeholder="Email"
                        type="email"
                        error={errors.email && touched.email ? 'true' : 'false'}
                        success={
                          touched.email && !errors.email ? 'true' : 'false'
                        }
                      />
                      {errors.email && touched.email && (
                        <ErrorOutlineIcon
                          sx={{
                            position: 'absolute',
                            color: '#da1414',
                            top: '12px',
                            right: '24px',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      )}
                      {touched.email && !errors.email && (
                        <CheckCircleOutlineIcon
                          sx={{
                            position: 'absolute',
                            color: '#3CBC81',
                            top: '12px',
                            right: '24px',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      )}
                    </Box>
                    {errors.email && touched.email ? (
                      <TypographyError>{errors.email}</TypographyError>
                    ) : null}
                    {touched.email && !errors.email ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT email
                      </TypographySuccess>
                    ) : null}

                    <Box sx={{ position: 'relative' }}>
                      <StyledField
                        name="password"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        error={
                          errors.password && touched.password ? 'true' : 'false'
                        }
                        success={
                          touched.password && !errors.password
                            ? 'true'
                            : 'false'
                        }
                      />
                      <IconButton
                        sx={{
                          position: 'absolute',
                          color: '#F3F3F3',
                          top: '12px',
                          right: '24px',
                          width: '20px',
                          height: '20px',
                        }}
                        onClick={handleClickPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon
                            sx={{
                              color:
                                (errors.password &&
                                  touched.password &&
                                  '#da1414') ||
                                (!errors.password &&
                                  touched.password &&
                                  '#3CBC81'),
                            }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            sx={{
                              color:
                                (errors.password &&
                                  touched.password &&
                                  '#da1414') ||
                                (!errors.password &&
                                  touched.password &&
                                  '#3CBC81'),
                            }}
                          />
                        )}
                      </IconButton>
                    </Box>

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
