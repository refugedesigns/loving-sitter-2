import React from "react"
import { Navigate } from "react-router-dom"

export interface ProtectedRouteProps {
  isAuthenticated: boolean
  outlet: JSX.Element
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  outlet,
}) => {
  return isAuthenticated ? outlet : <Navigate to="/" />
}

export default PrivateRoute
