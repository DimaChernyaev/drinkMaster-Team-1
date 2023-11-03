import { LogoLink, LogoSVG, LogoText } from './Logo.styled';

export const Logo = ({ customStyle }) => {
  return (
    <LogoLink to="/" style={customStyle}>
      <LogoSVG />
      <LogoText>Drink master</LogoText>
    </LogoLink>
  );
};
