import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/login";
import { RegistrationPage } from "./pages/registrationPage/registration";
import {NotFound} from "./pages/not-found/notFound";
import {MinePage} from "./pages/mainPage/mainPage";
import {Favorites} from "./pages/favoritesPage/favorites";
import {Category} from "./pages/categoryPage/category";
import {ProtectedRoute} from './components/protected-route';

export const AppRoutes = ({token}) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<ProtectedRoute isAllowed ={Boolean(token)}>
        <MinePage />
      </ProtectedRoute>
      } />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

