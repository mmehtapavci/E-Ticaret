import React, { useState } from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
    const [ theme, setTheme ] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme){
          root.style.backgroundColor = "rgba(0, 0, 0, 0.93";
          root.style.color ="#fff";
          root.style.minHeight = "100vh";
          root.style.height = "100%";
        }
        else {
          root.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          root.style.color = "black";
          root.style.minHeight = "100vh";
          root.style.height = "100%";
        }
        setTheme(!theme);
    }

  return (
  <div className='logo-bar'>  
    <div className='flex-row' >
        <img className='logo' src="./src/images/logo.png" alt="" />
        <p className='logo-text'>Lotus Ticaret</p>
    </div>

    <div className='flex-row' >
      <input className='search-input' type="text" placeholder='Bir Şeyler Ara...'/>
      <div>
        {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
        }
      <CiShoppingBasket className='icon' />
      </div>
      
      </div>
    </div>
  )
}

export default Header