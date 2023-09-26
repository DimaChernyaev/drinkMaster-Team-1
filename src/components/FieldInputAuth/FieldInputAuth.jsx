import { Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  StyledField,
  TypographyError,
  TypographySuccess,
} from './FieldInputAuth.styled';

export const FieldInputAuth = ({ errors, touched, name, placeholder }) => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <StyledField
          name={name}
          placeholder={placeholder}
          error={errors[name] && touched[name] ? 'true' : 'false'}
          success={touched[name] && !errors[name] ? 'true' : 'false'}
        />
        {errors[name] && touched[name] && (
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
        {touched[name] && !errors[name] && (
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
      {errors[name] && touched[name] ? (
        <TypographyError>{errors[name]}</TypographyError>
      ) : null}
      {touched[name] && !errors[name] ? (
        <TypographySuccess color="#3CBC81">
          This is an CORRECT {name}
        </TypographySuccess>
      ) : null}
    </>
  );
};
