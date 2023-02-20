import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import Dashboard from "../../Dashboard/Dashboard";

export default function PrivateRouteAdmin({ allowedRoles }) {
  const { dataToken } = useAuthContext();

  return allowedRoles?.includes(dataToken.role) ? (
    <Dashboard />
  ) : dataToken?.email ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
}
