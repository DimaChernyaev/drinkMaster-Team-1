import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { lazy } from 'react';

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
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="drink/:drinkId" element={<DrinkPage />} />
        <Route path="add" element={<AddDrinksPage />} />
        <Route path="my" element={<MyDrinksPage />} />
        <Route path="favorites" element={<FavoriteDrinksPage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
