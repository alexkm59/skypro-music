import {React, useState} from 'react';
import './App.css';
import {AppRoutes} from './routes';
// import Cookies from 'js-cookie'
// import{MinePage} from './pages/mainPage/mainPage'
// import{LoginPage} from './pages/loginPage/login'



function App() {

  const [currentTrack, setCurrentTrack] = useState(null);
  const  [isLoading, setLoading] = useState(false);
const [userToken, setUserToken] = useState(null);

  // const token = Cookies.get('token')
console.log(userToken);
 
return (
  
  <div className="wrapper">
    <AppRoutes 
    isLoading={isLoading}
    setLoading={setLoading}
    currentTrack={currentTrack}
    setCurrentTrack={setCurrentTrack}
    // token={token} 
    userToken = {userToken}
    setUserToken= {setUserToken}
    />
    
  </div>
  

    
);
}


export default App;
