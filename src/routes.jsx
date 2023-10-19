import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/login";
import {NotFound} from "./pages/not-found/notFound"


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};