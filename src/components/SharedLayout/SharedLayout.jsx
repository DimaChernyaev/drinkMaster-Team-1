import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
