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

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <StyledBlock></StyledBlock>
          <Suspense fallback={<div>...Loading</div>}>
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
