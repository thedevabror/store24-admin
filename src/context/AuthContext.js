import React, { createContext, useContext, useState } from "react";

// AuthContext'ni yaratish
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login funksiyasi
  const login = () => {
    setIsAuthenticated(true);
  };

  // Logout funksiyasi
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
