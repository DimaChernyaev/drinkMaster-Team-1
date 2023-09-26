import styled from '@emotion/styled';
import { ReactComponent as LogoImg } from '../../../assets/images/logo/logo_DM.svg';
import { Link } from 'react-router-dom';
import { colorStyled } from '../../../helpers/colorStyled';

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colorStyled.colorWhite};
  gap: 8px;
  /* transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  } */
`;

export const LogoText = styled.p`
  font-size: 16px;
  line-height: 1.125;
  font-weight: 600;
`;

export const LogoSVG = styled(LogoImg)`
  width: 28px;
  height: 28px;
  fill: currentColor;
`;
