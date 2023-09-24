import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledBlock } from './SharedLayout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <StyledBlock></StyledBlock>
        <Container>
          <Suspense fallback={<div>...Loading</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
