import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/login";
import { RegistrationPage } from "./pages/registrationPage/registration";
import {NotFound} from "./pages/not-found/notFound";
import {MinePage} from "./pages/mainPage/mainPage";
import {Favorites} from "./pages/favoritesPage/favorites";
import {Category} from "./pages/categoryPage/category";
import {ProtectedRoute} from './components/protected-route';

export const AppRoutes = ({token, currentTrack, setCurrentTrack, isLoading, setLoading, userToken, setUserToken, user, setUser}) => {
  
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage 
      setUserToken={setUserToken}
      user={user}
      setUser={setUser}
      />} />
      <Route path="/registration" element={<RegistrationPage 
      setUserToken={setUserToken}
      user={user}
      setUser={setUser}
      />} />
      
      <Route path="/" element={<ProtectedRoute isAllowed = {Boolean(userToken)}>
        <MinePage 
        currentTrack={currentTrack} 
        setCurrentTrack={setCurrentTrack} 
        isLoading={isLoading}
        setLoading={setLoading}
         />
      </ProtectedRoute>
      } />
      <Route path="/favorites" element={<ProtectedRoute isAllowed ={Boolean(token)}>
      <Favorites />
      </ProtectedRoute>
      } />
      <Route path="/category/:id" element={<ProtectedRoute isAllowed ={Boolean(token)}>
      <Category />
      </ProtectedRoute>
     } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

