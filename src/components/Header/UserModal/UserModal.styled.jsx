import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledModalWindow = styled.div`
  display: block;
  width: 177px;
  position: absolute;
  z-index: 101;
  top: 45px;
  left: 50%;
  padding: 18px;
  background-color: var(--blue-color);
  border-radius: 8px;
  transform: translateX(-50%);
`;

export const LogOutBtn = styled.button`
  width: 143px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  color: var(--blue-color);
  background-color: var(--white-color);
  text-decoration: none;
  font-size: 12px;
  line-height: 1.3;
  font-style: normal;
  font-weight: 600;
  border: 1px solid var(--white-color);
  border-radius: 22px;
  transition: all var(--transition);

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--blue-color);
  }
  &:active {
    border-color: var(--white-fifty-color);
  }
`;

export const StyledTypography = styled(Typography)`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
