import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Configurador from "./views/Configurador/Configurador";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ROLES } from "./const/roles";
import Login from "./views/login/Login";
import DashboardInicio from "./views/DashboardInicio/DashboardInicio";
import DashboardUsuarios from "./views/DashboardUsuarios/DashboardUsuarios";
import Account from "./views/Account/Account";
import PrivateRouteAdmin from "./components/routes/PrivatRoute/PrivateRouteAdmin";
import PrivateRoute from "./components/routes/PrivatRoute/PrivateRoute";
import Unauthorized from "./views/unauthorized/Unauthorized";
import DashboardPresupuestos from "./views/DashboardPresupuestos/DashboardPresupuestos";
import Contact from "./views/Contact/Contact";
import Productos from "./views/Productos/Productos";
import DashboardContacto from "./views/DashboardContacto/DashboardContacto";
import Proyectos from "./views/Proyectos/Proyectos";
import Nosotros from "./views/Nosotros/Nosotros";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="configurador" element={<Configurador />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="productos" element={<Productos />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="nosotros" element={<Nosotros />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route element={<PrivateRouteAdmin allowedRoles={[ROLES.Admin]} />}>
            <Route path="/dashboard" element={<DashboardInicio />} />
            <Route path="/dashboard/usuarios" element={<DashboardUsuarios />} />
            <Route
              path="/dashboard/presupuestos"
              element={<DashboardPresupuestos />}
            />
            <Route path="/dashboard/contacto" element={<DashboardContacto />} />
          </Route>
          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
