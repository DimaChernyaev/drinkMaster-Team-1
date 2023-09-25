import { Formik, Form } from 'formik';
import { Notify } from 'notiflix';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  StyledButton,
  StyledDialogTitle,
  StyledDiv,
  StyledField,
  StyledTypography,
  TypographyError,
  TypographySuccess,
} from '../SignUp/SignUp.styled';
import {
  StyledBox,
  StyledBoxBig,
  StyledSection,
} from '../Welcome/Welcome.styled';
import { SkeletonAuth } from '../Skeletons/SkeletonAuth';
import { signin } from '../../redux/auth/authOperations';
import { SignInSchema } from '../../helpers/validateForm/validate-login';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const response = await dispatch(signin(values));
      setIsLoading(false);

      if (response.payload.token) {
        Notify.success('Welcome!', {
          position: 'center-top',
          distance: '10px',
        });
        resetForm();
        navigate('/', { replace: true });
      } else {
        Notify.failure('Пароль або email не вірні', {
          position: 'center-top',
          distance: '10px',
        });
      }

    } catch (error) {
      resetForm();
    }
  };

  const initialValues = {
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
          validationSchema={SignInSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <StyledDialogTitle id="login" align="left">
                Sign In
              </StyledDialogTitle>
              {isLoading ? (
                <SkeletonAuth totalRow={3} />
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '14px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      marginBottom: '28px',
                    }}
                  >
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
                      <StyledTypography>Sign In</StyledTypography>
                    </StyledButton>
                    <Link to="/signup">
                      <StyledButton type="button">
                        <StyledTypography>Sign Up</StyledTypography>
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

export default SignIn;
