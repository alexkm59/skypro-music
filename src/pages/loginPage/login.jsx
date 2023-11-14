import React from 'react';
import * as S from './loginPage.styled';
import {Link} from 'react-router-dom';

export const LoginPage = ({setUserToken})  => {



return (
<S.loginPage >
    <S.loginBox>
        <S.loginBoxLogo src="img/logo.svg" alt="logo"/>
        <S.loginBoxInputArea >
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Почта'/>
            </S.loginInput>
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Пароль'/>
            </S.loginInput>
        </S.loginBoxInputArea>
        <S.loginBoxButton>
        
        <Link to="/">
            <S.loginButton onClick={() => {setUserToken(true)}} >
        
                Войти
            </S.loginButton>
        </Link>

            <Link to="/registration">
            <S.registratButton>
            Зарегистрироваться
                
            </S.registratButton>
            </Link>

        </S.loginBoxButton>


        </S.loginBox>
</S.loginPage>
)
}