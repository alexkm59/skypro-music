import React from 'react';
import * as S from '../loginPage/loginPage.styled'


export const RegistrationPage = ()  => {
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
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Повторите пароль'/>
            </S.loginInput>


        </S.loginBoxInputArea>
        <S.loginBoxButton>
            <S.loginButton>
                Зарегистрироваться
            </S.loginButton>
           
        </S.loginBoxButton>

        </S.loginBox>
</S.loginPage>
)
}