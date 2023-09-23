import { Formik, Form } from 'formik';
import { Notify } from 'notiflix';
import { Box } from '@mui/material';
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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const response = await dispatch(signin(values));
      setIsLoading(false);
      if (response.status === 204) {
        Notify.success('Login success!', {
          position: 'center-top',
          distance: '10px',
        });
        resetForm();
        navigate('/', { replace: true });
        return;
      }
      Notify.failure(`${response.message}`, {
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
