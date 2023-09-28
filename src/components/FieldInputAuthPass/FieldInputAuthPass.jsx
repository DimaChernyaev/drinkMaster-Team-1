import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  StyledField,
  TypographyError,
  TypographySuccess,
} from '../FieldInputAuth/FieldInputAuth.styled';

export const FieldInputAuthPass = ({ errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <StyledField
          name="password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          error={errors.password && touched.password ? 'true' : 'false'}
          success={touched.password && !errors.password ? 'true' : 'false'}
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
                  (errors.password && touched.password && '#da1414') ||
                  (!errors.password && touched.password && '#3CBC81'),
              }}
            />
          ) : (
            <VisibilityOffIcon
              sx={{
                color:
                  (errors.password && touched.password && '#da1414') ||
                  (!errors.password && touched.password && '#3CBC81'),
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
    </>
  );
};
