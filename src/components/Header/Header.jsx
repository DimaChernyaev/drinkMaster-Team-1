import { HeaderEl } from './Header.styled';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { HeaderContainer } from './Header.styled';
import Navigation from './Navigation/Navigation';
import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';
import { useEffect, useState } from 'react';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';

// screenSize______________

const screenChecker = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useScreen = () => {
  const [screenSize, setScreenSize] = useState(screenChecker());

  useEffect(() => {
    function handleResize() {
      setScreenSize(screenChecker());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// _______________________________

const Header = () => {
  const { width } = useScreen();

  return (
    <HeaderEl>
      <Container>
        <HeaderContainer>
          <Logo
            customStyle={{
              color: 'var(--header-color)',
              fill: 'var(--header-color)',
            }}
          />
          {width >= 1280 && <Navigation />}
          <UserLogo />
          {width < 1280 && <BurgerBtn />}
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
};

export default Header;
