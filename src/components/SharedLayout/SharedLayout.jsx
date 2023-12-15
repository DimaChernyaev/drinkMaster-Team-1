import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledBlock,
} from './SharedLayout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <StyledBlock></StyledBlock>
          <Suspense fallback={<Loader text={'Loading...'} />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
