import React, { createContext, useContext, ReactNode } from 'react';
import { useLogin } from '../hooks/auth/useLogin';

interface AuthContextType {
  isAuthenticated: boolean;
  sendOtp: (email: string) => Promise<void>;
  logout: () => void;
  verifyOtp: (email: string, otp: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { sendOtp, verifyOtp, logout, isAuthenticated } = useLogin();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, sendOtp, verifyOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);
