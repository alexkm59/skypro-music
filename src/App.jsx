import {React, useState} from 'react';
import './App.css';
import {AppRoutes} from './routes';
import Cookies from 'js-cookie'
// import{MinePage} from './pages/mainPage/mainPage'
// import{LoginPage} from './pages/loginPage/login'



function App() {

  const [currentTrack, setCurrentTrack] = useState(null);

const token = Cookies.get('token')
console.log(token);
 
return (
  
  <div className="wrapper">
    <AppRoutes 
    currentTrack={currentTrack}
    setCurrentTrack={setCurrentTrack}
    token={token} />
    
  </div>
  

    
);
}


export default App;
