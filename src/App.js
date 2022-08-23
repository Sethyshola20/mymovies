import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { AuthProvider } from './context/Authcontext';
import { AuthContextProvider } from './context/Authcontext';
import PrivateRoute from "./Pages/PrivateRoute";
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Footer from './Pages/Footer';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' index element ={<Login />} />
          <Route path='/signup' element ={<SignUp />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/accueil" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='*' element ={<ErrorPage />} />
        </Routes>
      </AuthContextProvider>
      <Footer/>
    </Router>
  );
}

export default App;
