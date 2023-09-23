import { LogoLink, LogoSVG, LogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/">
      {/* logo */}
      <LogoSVG />
      <LogoText>Drink master</LogoText>
    </LogoLink>
  );
};
