import { NavigationList, StyledLink } from './Navigation.styled';

const Navigation = ({ onClose }) => {
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <NavigationList>
      <StyledLink to="/" onClick={handleLinkClick}>
        Home
      </StyledLink>
      <StyledLink to="/drinks" onClick={handleLinkClick}>
        Drinks
      </StyledLink>
      <StyledLink to="/add" onClick={handleLinkClick}>
        Add Drink
      </StyledLink>
      <StyledLink to="/my" onClick={handleLinkClick}>
        My Drinks
      </StyledLink>
      <StyledLink to="/favorites" onClick={handleLinkClick}>
        Favorites
      </StyledLink>
    </NavigationList>
  );
};

export default Navigation;
