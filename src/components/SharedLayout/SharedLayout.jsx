import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledBlock,
  StyledBlockTwo,
  Main,
} from './SharedLayout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <StyledBlock></StyledBlock>
          <Suspense fallback={<Loader text={'Loading...'} />}>
            <Outlet />
            <StyledBlockTwo></StyledBlockTwo>
          </Suspense>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default SharedLayout;
