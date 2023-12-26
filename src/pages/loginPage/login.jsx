import {React, useState, useEffect, useContext} from 'react';
import * as S from './loginPage.styled';
import {Link, useNavigate} from 'react-router-dom';
import {UserLoginAPI, getFavoriteTracks, getTokenAPI} from "../../api"
import {userContext} from "../../Context/auth"
import { useDispatch, useSelector } from "react-redux";
import { favoriteTrakcksLoading, setAccessToken } from '../../store/actions/creators';



export const LoginPage = ({setUserToken})  => {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                console.log(`password_from_API: ${regErrors.password}`)  
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
        console.log(response);
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
        localStorage.setItem('currentUserPassword', user.password);

        alert("Вход выполнен успешно.")

        // Заглушка определения токена для перехода на страницу
        setUserToken(true)
        
        getTokenAPI({userEmail: user.username, userPassword: userPassword})
        .then((response)=>{
            console.log(`token ${response.access}`);
            dispatch(setAccessToken({accessToken: response.access}))
            getFavoriteTracks(response.access)
            .then((response) => {
                if(response.status === 401){
                    navigate("/login")         
                    return
                }
                else{
                    
                    return response.json()
                }

            })
            .then((list) => {
            //   setFavoritTracks(lists)
            console.log(`my favorite tracks ${JSON.stringify(list)}`);
            // dispatch (allTrakcksLoading({allTracks: lists}));
      
            // .then((lists)=>{
              //   setFavoritTracks(lists)
              // console.log(`my favorite tracks ${lists}`);
              dispatch(favoriteTrakcksLoading({allfavoriteTracks: list}));
            
          })
        })

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