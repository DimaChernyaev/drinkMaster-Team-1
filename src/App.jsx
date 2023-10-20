import { Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { lazy } from 'react';
import { RestrictedRoute } from './helpers/RestrictedRoute';
import { PrivateRoute } from './helpers/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsRefreshing } from './redux/auth/authSelectors';
import { refresh } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
import { Container } from './components/SharedLayout/SharedLayout.styled';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('../src/pages/DrinksPage/DrinksPage'));
const AddDrinksPage = lazy(() =>
  import('../src/pages/AddDrinksPage/AddDrinksPage'),
);
const MyDrinksPage = lazy(() =>
  import('../src/pages/MyDrinksPage/MyDrinksPage'),
);
const FavoriteDrinksPage = lazy(() =>
  import('./pages/FavoriteDrinksPage/FavoriteDrinksPage'),
);
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Container>
          <Loader text={'Loading...'} />
        </Container>
      ) : (
        <Routes>
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<SharedLayout />}
              />
            }
          >
            <Route
              index
              element={
                <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
              }
            />
            <Route
              path="drink/:drinkId"
              element={
                <PrivateRoute redirectTo="/welcome" component={<DrinkPage />} />
              }
            />
            <Route
              path="drinks"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<DrinksPage />}
                />
              }
            />
            <Route
              path="add"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<AddDrinksPage />}
                />
              }
            />
            <Route
              path="my"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<MyDrinksPage />}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <PrivateRoute
                  redirectTo="/favorites"
                  component={<FavoriteDrinksPage />}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
