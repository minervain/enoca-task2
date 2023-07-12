import React from 'react'
import Keyboard from './keyboard'
import Input from './input'
import Darktheme from './Darktheme'
import { useContext } from 'react'
import { DarkModeContext } from '../Context/DarkModeContext'
const Main = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div >

      <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div >
          <Darktheme></Darktheme>
          <Input></Input>
          <Keyboard></Keyboard>
        </div>
      </div>
    </div>
  )
}

export default Main