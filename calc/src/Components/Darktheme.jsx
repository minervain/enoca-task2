import React, { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkModeContext';

function Darktheme() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className='themechange'>
      <label htmlFor="toggle" className="theme-toggler settings-option" id="theme-toggler"></label>
    <input
        type="checkbox"
        id="toggle"
        className="theme-toggler__checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
       <span aria-hidden="true" className="theme-toggler__switch"></span>
      </div>
  );
}

export default Darktheme;