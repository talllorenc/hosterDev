"use client"
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const setUserInfo = (userInfo) => {
    setUser(userInfo);
  };


  return (
    <UserContext.Provider value={ {user, setUserInfo, logout} }>
      {children}
    </UserContext.Provider>
  );
};
