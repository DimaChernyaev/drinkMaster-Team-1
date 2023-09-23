import { HeaderEl } from './Header.styled';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { HeaderContainer } from './Header.styled';
import Navigation from './Navigation/Navigation';
import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
          <UserLogo />
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
};

export default Header;
