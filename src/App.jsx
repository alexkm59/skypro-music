import React from 'react';
import './App.css';
import{MinePage} from './pages/mainPage/mainPage'
import {AppRoutes} from './routes';

function App() {

const token = false;

 return (
  
  <div className="wrapper">
    <AppRoutes />
     {token? MinePage() : undefined}
    </div>
  

    
);
}


export default App;
