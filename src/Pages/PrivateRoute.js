import React from "react";
import { Navigate } from "react-router-dom";
import {UserAuth} from '../context/Authcontext';

export default function PrivateRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }
  return children;
}
