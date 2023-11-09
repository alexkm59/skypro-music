import React from 'react';
import * as S from '../loginPage/loginPage.styled'
import { useState, useEffect } from "react";
import {UserRegistrationAPI} from "../../api"
// import {Link} from 'react-router-dom';

export const RegistrationPage = ()  => {

const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [registrationError, setRegistrationError] = useState("");

// const [isUserRegOK, setIsUserRegOK] = useState(false);

// Установка стейтов регистрации и валидация формы регистрации
const userRegistration = async ()=>{
    if(userEmail !== ""){
        console.log({userEmail});
    }
    else{
        setRegistrationError("Заполните почту!");
        return
    }
    if(userPassword !== ""){
        console.log({userPassword});
    }
    else{
        setRegistrationError("Укажите пароль!");
        return
    }
    if(userPassword === confirmPassword){
        console.log({userPassword});
    }
    else{
        setRegistrationError("Укажите идентичные пароли!");
    return
    }

    // отправка данных в API
    const responce = await UserRegistrationAPI({userEmail, userPassword, setRegistrationError});

    console.log(responce);
        
}



// Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
useEffect(() => {
    setRegistrationError(null);
  }, [userEmail, userPassword, confirmPassword]);

return (
<S.loginPage >
    <S.loginBox>
        <S.loginBoxLogo src="img/logo.svg" alt="logo"/>
        <S.loginBoxInputArea >
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Почта' value={userEmail} onChange={(event)=>{setUserEmail(event.target.value)}}/>
            </S.loginInput>
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Пароль' value={userPassword} onChange={(event)=>{setUserPassword(event.target.value)}}/>
            </S.loginInput>
            <S.loginInput>
            <S.loginBoxInput type="text" placeholder='Повторите пароль' value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
            </S.loginInput>
            <div className="regErrors">{registrationError ? registrationError : null}</div>

        </S.loginBoxInputArea>
        <S.loginBoxButton>
        
            <S.loginButton onClick={() => userRegistration()}>
                Зарегистрироваться
            </S.loginButton>
       
           
        </S.loginBoxButton>

        </S.loginBox>
</S.loginPage>
)
}