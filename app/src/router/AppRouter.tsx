// src/router/AppRouter.tsx

import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

import MainLayout from "@/templates/MainLayout";

import HomePage from "@/features/home/pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
