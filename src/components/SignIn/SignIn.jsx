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
  StyledTypography,
} from '../SignUp/SignUp.styled';
import {
  StyledBox,
  StyledBoxBig,
  StyledSection,
} from '../Welcome/Welcome.styled';
import { SkeletonAuth } from '../Skeletons/SkeletonAuth';
import { signin } from '../../redux/auth/authOperations';
import { SignInSchema } from '../../helpers/validateForm/validate-login';
import { FieldInputAuth } from '../FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from '../FieldInputAuthPass/FieldInputAuthPass';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const response = await dispatch(signin(values));
      setIsLoading(false);

      if (response.payload.token) {
        // Notify.success('Welcome!', {
        //   position: 'center-top',
        //   distance: '10px',
        // });
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
            <Form style={{ zIndex: 3 }}>
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
