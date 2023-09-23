import { Box, Typography } from '@mui/material';
import {
  StyledDiv,
  StyledSection,
  StyledButton,
  StyledTypography,
  StyledBox,
  StyledBoxBig
} from './Welcome.styled';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <StyledSection sx={{ fontFamily: 'inherit' }}>
      <StyledDiv sx={{ fontFamily: 'inherit' }}>
        <StyledBoxBig></StyledBoxBig>
        <StyledBox></StyledBox>
        <Typography
          variant="h1"
          align="center"
          sx={{
            marginBottom: '14px',
            color: '#FAFAFA',
            fontFamily: 'inherit',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '32px',
            letterSpacing: '-0.56px',
          }}
        >
          Welcome to the app!
        </Typography>
        <StyledTypography
          paragraph
          align="center"
          sx={{
            marginBottom: '40px',
            color: '#FAFAFA',
            fontFamily: 'inherit',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '18px',
            letterSpacing: '-0.28px',
          }}
        >
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </StyledTypography>

        <Box sx={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link to="/signup">
            <StyledButton>
              <StyledTypography>Sign Up</StyledTypography>
            </StyledButton>
          </Link>
          <Link to="/signin">
            <StyledButton>
              <StyledTypography>Sign In</StyledTypography>
            </StyledButton>
          </Link>
        </Box>
      </StyledDiv>
    </StyledSection>
  );
};

export default Welcome;
