import {React, useState} from 'react';
import './App.css';
import {AppRoutes} from './routes';
import {authContext} from "./Context/auth";
// import Cookies from 'js-cookie'
// import{MinePage} from './pages/mainPage/mainPage'
// import{LoginPage} from './pages/loginPage/login'



function App() {

  const [currentTrack, setCurrentTrack] = useState(null);
  const  [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    }
    );
  const [authenticated, setAuthenticated] = useState(false);

  // const token = Cookies.get('token')
console.log(userToken);



 
return (
  <authContext.Provider value={{ authenticated, setAuthenticated}}>
 <div className="wrapper">
  
  <AppRoutes 
  isLoading={isLoading}
  setLoading={setLoading}
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  // token={token}
  user={user}
  setUser={setUser}
  userToken = {userToken}
  setUserToken= {setUserToken}
  />
  
</div>

  </authContext.Provider>
 
  

    
);
}


export default App;
