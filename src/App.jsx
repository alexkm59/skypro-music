import {React, useState, useEffect} from 'react';
import './App.css';
import {AppRoutes} from './routes';
import {userContext} from "./Context/auth";
import {useNavigate} from 'react-router-dom';
// import Cookies from 'js-cookie'
// import{MinePage} from './pages/mainPage/mainPage'
// import{LoginPage} from './pages/loginPage/login'



function App() {

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    }
    );
    const navigate = useNavigate();


const username = localStorage.getItem('currentUserName')
console.log(`user from local ${username}`);

    useEffect(()=>{
      // читаем локал сторидж, если пользователь есть, то устанавливаем setUser
  const currentUserName = localStorage.getItem('currentUserName');
        if (currentUserName){
            const currentUser = {
              id: `${localStorage.getItem('currentUserId')}`,
              username: `${localStorage.getItem('currentUserName')}`,
              email: `${localStorage.getItem('currentUserEmail')}`, 
          }
   setUser(currentUser)
   console.log(`user --> ${user}`);
   setUserToken(true)
    navigate("/")
   }
// при разлогировании нужно почистить локал сторидж
    }, []);


console.log(userToken);



 
return (
  <userContext.Provider value={{ user, setUser}}>
 <div className="wrapper">
  
  <AppRoutes 
  isLoading={isLoading}
  setLoading={setLoading}
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  // token={token}
  userToken = {userToken}
  setUserToken= {setUserToken}
  isPlaying ={isPlaying}
  setIsPlaying = {setIsPlaying}
  />
  
</div>

  </userContext.Provider>
 
  

    
);
}


export default App;
