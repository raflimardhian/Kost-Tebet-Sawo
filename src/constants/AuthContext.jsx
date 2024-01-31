import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [timeoutId, setTimeoutId] = useState(null);


  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    const loginTime = new Date().getTime();
    const timeoutId = setTimeout(() => {
      logout(); 
    }, 60 * 60 * 1000); 
    localStorage.setItem('loginTime', loginTime);
    localStorage.setItem('timeoutId', timeoutId);
    setTimeoutId(timeoutId);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    clearTimeout(timeoutId);
    localStorage.removeItem('loginTime');
    localStorage.removeItem('timeoutId');
  };

  useEffect(() => {
    const loginTime = localStorage.getItem('loginTime');
    const timeoutId = localStorage.getItem('timeoutId');

    if (loginTime && timeoutId) {
      const elapsedTime = new Date().getTime() - parseInt(loginTime);
      const remainingTime = 60 * 60 * 1000 - elapsedTime; 

      if (remainingTime <= 0) {
        logout();
      } else {
        const newTimeoutId = setTimeout(() => {
          logout();
        }, remainingTime);
        setTimeoutId(newTimeoutId);
        localStorage.setItem('timeoutId', newTimeoutId);
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
