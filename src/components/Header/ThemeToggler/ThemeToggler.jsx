import { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { ToggleContainer } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [state, setState] = useState(theme === 'light' ? false : true);

  const toggleTheme = () => {
    // console.log('Before toggle:', theme);
    setState(!state);
    if (state === true) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ToggleContainer onChange={toggleTheme} checked={state} name="switcher" />
  );
};

export default ThemeToggler;
