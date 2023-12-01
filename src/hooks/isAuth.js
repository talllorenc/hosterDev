import { useEffect, useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    const checkToken = async () => {
      if (storedToken) {
        try {
          const response = await fetch('http://localhost:8080/api/get_info_me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            console.error('Token verification failed');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    checkToken();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    window.location.href = '/'; 
  };

  return { token, user, logout };
};

export default useAuth;
