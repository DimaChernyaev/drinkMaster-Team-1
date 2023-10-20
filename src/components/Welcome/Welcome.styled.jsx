import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import welcome from '../../assets/images/welcomePage/background-img-start.jpg';

export const StyledDiv = styled.div`
  min-width: 320px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 304px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
    align-items: start;
    text-align: left;
    padding-top: 400px;
    margin-left: 64px;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 273px;
    width: 485px;
    margin-left: 100px;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--mainbackground-color);
  background-image: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    url(${welcome});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:
    calc(50% - 80px) center,
    calc(1deg - 80px) center,
    calc(82deg - 80px) center,
    center;

  @media screen and (min-width: 768px) {
    background-position:
      calc(50% - 382px) center,
      calc(1deg - 382px) center,
      calc(82deg - 382px) center,
      center;
  }
`;

export const StyledButton = styled(Button)`
  width: 125px;
  height: 46px;
  display: flex;
  gap: 10px;
  border-radius: 42px;
  background: var(--whitetwenty-color);
  border: 1px solid var(--whitetwenty-color);
  color: var(--white-color);
  transition:
    color var(--transition),
    background var(--transition),
    transform var(--transition);

  && {
    &:hover,
    &:focus {
      background-color: var(--white-color);
      color: var(--blue-color);
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 54px;
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const StyledTypographyH2 = styled(Typography)`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.8px;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-transform: none;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 84px;
  left: 42px;
  width: 257px;
  height: 247px;
  flex-shrink: 0;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  z-index: 2;
`;

export const StyledBoxBig = styled(Box)`
  position: absolute;
  top: 20px;
  left: -399px;
  width: 520px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  z-index: 1;
`;
