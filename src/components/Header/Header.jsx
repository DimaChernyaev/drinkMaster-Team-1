import { HeaderEl } from './Header.styled';
import { Container } from '../SharedLayout/SharedLayout.styled';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Navigation />
      </Container>
    </HeaderEl>
  );
};

export default Header;
