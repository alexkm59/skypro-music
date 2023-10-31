import React from 'react';
import * as S from '../loginPage/loginPage.styled'
import { useState } from "react";
import {UserRegistration} from "../../api"
// import {Link} from 'react-router-dom';

export const RegistrationPage = ()  => {

const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
// const [isUserRegOK, setIsUserRegOK] = useState(false);


const userRegistration = async ()=>{
    if(userEmail !== ""){
        console.log({userEmail});
    }
    else{
        alert("Заполните почту!");
    }
    if(userPassword !== ""){
        console.log({userPassword});
    }
    else{
        alert("Укажите пароль");
    }
    if(userPassword === confirmPassword){
        console.log({userPassword});
    }
    else{
        alert("Укажите идентичные пароли!");
    }

    const response = await UserRegistration({userEmail, userPassword });
    
    if (response.status === 201) {
        alert(`Пользователь успешно зарегистрирован`);
    }
    
    if (response.status === 400) {
        alert(`произошла ошибка: ${response.email}, ${response.password}`);
    }
    if (response.status === 500) {
        alert(`Ошибка соединения с сервером. Попробуйте чутка позже.`);
    }
    //  setIsUserRegOK(true);

    
}

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