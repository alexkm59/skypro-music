import React from 'react';
import * as S from '../loginPage/loginPage.styled'
import { useState, useEffect, useContext} from "react";
import {UserRegistrationAPI} from "../../api"
import {useNavigate} from 'react-router-dom';
import {userContext} from "../../Context/auth"

export const RegistrationPage = ()  => {

const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [registrationError, setRegistrationError] = useState(null);
const [registrationLoading, setRegistrationLoading] = useState(false);
// const [user, setUser] = useState({
// id: "",
// username: "",
// email: "",
// }
// );

const {setUser} = useContext(userContext);
const navigate = useNavigate();

// Установка стейтов регистрации и валидация формы регистрации
const userRegistration = ()=>{
// Выключаем кнопку регистрации на время загрузки 
    setRegistrationLoading(true);

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
    
    
        UserRegistrationAPI({userEmail, userPassword})
        .then((response) => {
            console.log(response);
            console.log(response.status);

            if(response.status === 400){
                response.json().then((regErrors)=> {
                    console.log(`email_from_API: ${regErrors.email}`)
                    console.log(`user_from_API: ${regErrors.username}`)
                    console.log(`user_from_API: ${regErrors.password}`)  
                    const emailError = regErrors.email ? regErrors.email : "";
                    const userNameError = regErrors.username ? regErrors.username : "";
                    const passwordError = regErrors.password ? regErrors.password : "";
                    const error = emailError+userNameError+passwordError;
            
            setRegistrationError(error)             
                return
                })
            }
            if(response.status === 201){
                
                return response.json()
            }
            })
        .then((response)=> {
            const user = {
                id: response.id,
                username: response.username,
                email: response.email,
            }


            setUser(user)
           
            console.log(`user_ID_ ${user.id}`);
            console.log(`user_from_API: ${response.id}`)
            console.log(`email_from_API: ${response.email}`)
            console.log(`user_from_API: ${response.username}`)
            console.log(`user_from_API: ${response.password}`)
            alert("Регистрация выполнена успешно. Сейчас можно выполнить вход. Надеюсь, вы запомнили логин и пароль.")
            navigate("/login")
        }).catch((error)=> console.log(error))
        .finally(() => setRegistrationLoading(false))

         
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
        

            <S.loginButton disabled={true} onClick={() => userRegistration()}>
                Зарегистрироваться
            </S.loginButton>


        </S.loginBoxButton>

        </S.loginBox>
</S.loginPage>
)
}