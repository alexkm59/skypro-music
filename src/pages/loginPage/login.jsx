import {React, useState, useEffect, useContext} from 'react';
import * as S from './loginPage.styled';
import {Link, useNavigate} from 'react-router-dom';
import {UserLoginAPI} from "../../api"
import {userContext} from "../../Context/auth"




export const LoginPage = ({setUserToken})  => {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    
    const navigate = useNavigate();

    const {setUser} = useContext(userContext);

// Установка стейтов входа и валидация формы входа
const userLogin = () => {
    if(userEmail !== ""){
        console.log({userEmail});
    }
    else{
        setLoginError("Заполните почту!");
        return
    }
    if(userPassword !== ""){
        console.log({userPassword});
      
    }
    else{
        setLoginError("Укажите пароль!"); 
         return
    }  



    UserLoginAPI({userEmail, userPassword })
    .then((response) => {
        console.log(response);
        console.log(`login API status ${response.status}`);

        if(response.status === 400){
            response.json().then((regErrors)=> {
                console.log(`email_from_API: ${regErrors.email}`)
                console.log(`user_from_API: ${regErrors.username}`)
                console.log(`user_from_API: ${regErrors.password}`)  
                const emailError = regErrors.email ? regErrors.email : "";
                const passwordError = regErrors.password ? regErrors.password : "";
                const error = emailError+passwordError;
        
        setLoginError(error)             
            return
            })
        }

        if(response.status === 401){
            response.json().then((regErrors)=> {
        setLoginError(regErrors.detail)             
            return
            })
        }
        
        if(response.status === 500){
            setLoginError("Сервер не доступен. Попробуйте чутка позже.")
            return 
        }

        if(response.status === 200){
            
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
        // запись в локал сторидж
        localStorage.setItem('currentUserId', user.id);
        localStorage.setItem('currentUserName', user.username);
        localStorage.setItem('currentUserEmail', user.email);

        alert("Вход выполнен успешно.")

        // Заглушка определения токена для перехода на страницу
        setUserToken(true)
        
        navigate("/")
        
    }).catch((error)=> console.log(error))



    }

// Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
useEffect(() => {
    setLoginError(null);
  }, [userEmail, userPassword]);


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
            <div className="regErrors">{loginError ? loginError : null}</div>
        </S.loginBoxInputArea>
       
        <S.loginBoxButton>
        
        {/* <Link to="/"> */}
            <S.loginButton onClick={() => userLogin()} >
        
                Войти
            </S.loginButton>
        {/* </Link> */}

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