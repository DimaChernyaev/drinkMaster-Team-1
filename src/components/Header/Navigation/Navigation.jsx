import { NavigationList, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationList>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/drinks">Drinks</StyledLink>
      <StyledLink to="/add">Add Drink</StyledLink>
      <StyledLink to="/my">My Drinks</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </NavigationList>
  );
};

export default Navigation;
