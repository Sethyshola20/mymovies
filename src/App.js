import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/Authcontext';
import PrivateRoute from "./Components/PrivateRoute";
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/mymovies/' index element ={<Login />} />
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
