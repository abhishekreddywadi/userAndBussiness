import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check for stored authentication data on component mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    const refreshToken = localStorage.getItem('refreshToken');

    if (token && userData && refreshToken) {
      try {
        const parsedUserData = JSON.parse(userData);
        dispatch(loginSuccess({
          ...parsedUserData,
          tokenData: {
            token,
            refreshToken
          }
        }));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('refreshToken');
      }
    }
  }, [dispatch]);

  const value = {
    isAuthenticated,
    user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
