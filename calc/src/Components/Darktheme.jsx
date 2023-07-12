import React, { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkModeContext';

function Darktheme() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default Darktheme;