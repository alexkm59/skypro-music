import React from 'react';
import * as S from './loginPage.styled';
import {Link} from 'react-router-dom';

export const LoginPage = ()  => {
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
            <S.loginButton>
                <Link to="/"></Link>
                Войти
            </S.loginButton>
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