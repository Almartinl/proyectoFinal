import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Configurador from "./views/Configurador/Configurador";
import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./views/login/Login";
import DashboardView from "./views/DashboardView/DashboardView";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="configurador" element={<Configurador />} />
          </Route>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
