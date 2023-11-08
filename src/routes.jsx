import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/login";
import { RegistrationPage } from "./pages/registrationPage/registration";
import {NotFound} from "./pages/not-found/notFound";
import {MinePage} from "./pages/mainPage/mainPage";
import {Favorites} from "./pages/favoritesPage/favorites";
import {Category} from "./pages/categoryPage/category";
import {ProtectedRoute} from './components/protected-route';

export const AppRoutes = ({token, currentTrack, setCurrentTrack, isLoading, setLoading}) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      
      <Route path="/" element={<ProtectedRoute isAllowed = {Boolean(token)}>
        <MinePage 
        currentTrack={currentTrack} 
        setCurrentTrack={setCurrentTrack} 
        isLoading={isLoading}
        setLoading={setLoading} />
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

