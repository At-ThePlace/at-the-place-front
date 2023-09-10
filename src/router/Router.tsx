import MainLayout from "@components/layout/MainLayout";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const Main = lazy(() => import("@pages/Main"));

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}
