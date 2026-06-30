// src/router/AppRouter.tsx

import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

import MainLayout from "@/templates/MainLayout";

import HomePage from "@/features/home/pages/HomePage";
import AboutPage from "@/features/about/pages/AboutPage";
import ServicePage from "@/features/services/pages/ServicePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.serices} element={<ServicePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
