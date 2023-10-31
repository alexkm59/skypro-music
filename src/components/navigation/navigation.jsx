
import React from 'react';
import { useState } from 'react';
import * as Styled from './navigation.styled'

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
            <Styled.MenuLink href="#">Мой плейлист</Styled.MenuLink>
          </Styled.MenuItem>
          <Styled.MenuItem >
            <Styled.MenuLink href="../signin.html">Войти</Styled.MenuLink>
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.NavMenu>
    </Styled.MainNav>         
    )
}
}