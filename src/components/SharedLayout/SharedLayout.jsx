import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import Header from '../Header/Header';

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
      <footer>
        <Container></Container>
      </footer>
    </>
  );
};

export default SharedLayout;
