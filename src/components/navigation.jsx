
import React from 'react';
import { useState } from 'react';
import '../components/navigation.css';
import {styled} from 'styled-components';

const StyledMainNav = styled.nav`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`
// const Styled = styled.div``

const StyledNavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`


export function navMenu() {

  const [isVisible, setVisible] = useState(false);

  function navMenuClick() {
    setVisible(!isVisible);
  }
  
if (isVisible === false){
  return(
    <StyledMainNav>  
            <StyledNavLogo>
              <img className="logo__image" src="img/logo.png" alt="logo" />
            </StyledNavLogo> 
            
            <div className="nav__burger burger" onClick={navMenuClick}> 
            
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
</StyledMainNav>)
} else{
  return(
        <StyledMainNav>
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>

      <div className="nav__burger burger" onClick={navMenuClick}>

        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>

      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">Главное</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">Мой плейлист</a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">Войти</a>
          </li>
        </ul>
      </div>
    </StyledMainNav>         
    )
}
}