import React from 'react';
import * as S from './loginPage.styled'

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
                Войти
            </S.loginButton>
            <S.registratButton>
                Зарегистрироваться
            </S.registratButton>


        </S.loginBoxButton>


        </S.loginBox>
</S.loginPage>
)
}