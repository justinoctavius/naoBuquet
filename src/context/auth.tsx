import React, { createContext, useContext, ReactNode } from 'react';
import { useLogin } from '../hooks/auth/useLogin';
import { User } from '../utils/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  sendOtp: (email: string) => Promise<void>;
  logout: () => void;
  verifyOtp: (email: string, otp: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { sendOtp, verifyOtp, logout, isAuthenticated, user } = useLogin();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, sendOtp, verifyOtp, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);
