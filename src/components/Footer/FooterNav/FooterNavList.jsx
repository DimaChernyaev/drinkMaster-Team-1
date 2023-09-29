import { NavItem, NavLink, NavList } from './FooterNavList.styled';

export const FooterNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/drinks">Drinks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/add">Add Drink</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/my">My Drinks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavItem>
    </NavList>
  );
};
