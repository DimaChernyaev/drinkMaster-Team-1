import { Formik, Form } from 'formik';
import { Notify } from 'notiflix';
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
        onSelect: (formattedDate) => {
          setBirthdate(formattedDate);
          calendar.hide();
          calendar.destroy();
        },
        buttons: ['today', 'clear'],
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
    } catch (error) {}
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
                        error={errors.name && touched.name}
                        success={touched.name && !errors.name}
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
                        // error={errors.date && touched.date}
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
                    {/* {errors.date && touched.date ? (
                      <TypographyError>{errors.date}</TypographyError>
                    ) : null}
                    {touched.date && !errors.date ? (
                      <TypographySuccess color="#3CBC81">
                        This is an CORRECT date
                      </TypographySuccess>
                    ) : null} */}
                    <Box sx={{ position: 'relative' }}>
                      <StyledField
                        name="email"
                        placeholder="Email"
                        type="email"
                        error={errors.email && touched.email}
                        success={touched.name && !errors.name}
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
                        error={errors.password && touched.password}
                        success={touched.name && !errors.name}
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
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
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
