
import React, {useContext} from 'react';
import { useState } from 'react';
import * as Styled from './navigation.styled'
import {Link} from 'react-router-dom';
import {userContext} from "../../Context/auth";
import {useNavigate} from 'react-router-dom';

export function navMenu() {

  const [isVisible, setVisible] = useState(false);
  const {user} = useContext(userContext);
  const navigate = useNavigate();

  function navMenuClick() {
    setVisible(!isVisible);
  }
  
if (isVisible === false){
  return(
    <Styled.MainNav>  
            <Styled.NavLogo>
              <Styled.LogoImage src="/img/logo.png" alt="logo" />
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
        <Styled.LogoImage  src="/img/logo.png" alt="logo" />
      </Styled.NavLogo>
      <Styled.NavBurger onClick={navMenuClick}>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
        <Styled.NavBurgerLine></Styled.NavBurgerLine>
      </Styled.NavBurger>
      <Styled.NavMenu>
        <Styled.MenuList>
          <Styled.MenuItem >
           <Link to="/">
           <Styled.MenuLink>Главное</Styled.MenuLink>
           </Link> 
            
          </Styled.MenuItem>
          <Styled.MenuItem >
          <Link to="/favorites">
          <Styled.MenuLink>Мой плейлист</Styled.MenuLink>
          </Link> 
            
          </Styled.MenuItem>
          <Styled.MenuItem >
          <Link to="/login">
            <Styled.MenuLink onClick={() => {
              delete localStorage.currentUserId;
              delete localStorage.currentUserName;
              delete localStorage.currentUserEmail;
              
              navigate("/login")}}> {user ? `Выйти` : `Войти`}</Styled.MenuLink>
            </Link>  
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.NavMenu>
    </Styled.MainNav>         
    )
}
}