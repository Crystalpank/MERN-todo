import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Auth/Login'
import Registration from './components/Auth/Registration'
import MyNavbar from './components/Navbar/MyNavbar'
import { useState, useEffect, createContext } from 'react'
import Todo from './pages/Todo'
import axios from 'axios'
import { useAuth } from './hooks/auth.hook'
export const AuthContext = createContext(null)

function App() {

  const { login, logout, token, userId, isAuth } = useAuth()



  return (
    <AuthContext.Provider value={{
      login,
      logout,
      token,
      userId,
      isAuth
    }}>
      <BrowserRouter>
        <div className="app">
          <MyNavbar />
          {console.log(isAuth)}
          {
            !isAuth ?
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
              :
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/registration" element={<Navigate to="/" />} />
              </Routes>
          }
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
