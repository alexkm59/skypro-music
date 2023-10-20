import React from 'react';
import './App.css';
import {AppRoutes} from './routes';
import Cookies from 'js-cookie'
// import{MinePage} from './pages/mainPage/mainPage'
// import{LoginPage} from './pages/loginPage/login'



function App() {

//  const [token, setToken] = useState();

//  const setUserToken = () => {

//  setToken(token);
//  }

const token = Cookies.get('token')
console.log(token);
 
return (
  
  <div className="wrapper">
    <AppRoutes token={token} />
    
     {/* {token ? MinePage() : LoginPage()} */}
  
  </div>
  

    
);
}


export default App;
