
import React from 'react';
import { useState } from 'react';
import * as Styled from './navigation.styled'
import {Link} from 'react-router-dom';

export function navMenu() {

  const [isVisible, setVisible] = useState(false);

  function navMenuClick() {
    setVisible(!isVisible);
  }
  
if (isVisible === false){
  return(
    <Styled.MainNav>  
            <Styled.NavLogo>
              <Styled.LogoImage src="img/logo.png" alt="logo" />
            </Styled.NavLogo> 
            <Styled.NavBurger onClick={navMenuClick}> 
              <Styled.NavBurgerLine></Styled.NavBurgerLine>
              <Styled.NavBurgerLine></Styled.NavBurgerLine>
              <Styled.NavBurgerLine></Styled.NavBurgerLine>
            </Styled.NavBurger>
</Styled.MainNav>)
} else{
  return(
        <Styled.MainNav>
      <Styled.NavLogo>
        <Styled.LogoImage  src="img/logo.png" alt="logo" />
      </Styled.NavLogo>
      <Styled.NavBurger onClick={navMenuClick}>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
      </Styled.NavBurger>
      <Styled.NavMenu>
        <Styled.MenuList>
          <Styled.MenuItem >
            <Styled.MenuLink href="#">Главное</Styled.MenuLink>
          </Styled.MenuItem>
          <Styled.MenuItem >
          <Link to="/favorites">
          <Styled.MenuLink>Мой плейлист</Styled.MenuLink>
          </Link> 
            
          </Styled.MenuItem>
          <Styled.MenuItem >
          <Link to="/"> 
            <Styled.MenuLink >Войти</Styled.MenuLink>
            </Link>  
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.NavMenu>
    </Styled.MainNav>         
    )
}
}