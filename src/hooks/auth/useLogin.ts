import { useEffect, useState } from 'react';
import { AuthService } from '../../services/auth';
import { VerifyOTPResponse } from '../../services/auth/types';
import { AuthSingleton } from '../../utils/auth';

const auth = AuthSingleton.getInstance();

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authService = new AuthService();

  const sendOtp = async (email: string) => {
    try {
      await authService.sendOtp(email);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const verifyOtp = async (email: string, otp: string) => {
    try {
      setLoading(true);
      const response = await authService.verifyOtp(email, otp);
      saveToken(response);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    auth.removeToken();
    verifyIsAuthenticated();
  };

  const saveToken = ({ accessToken, expiresAt }: VerifyOTPResponse) => {
    auth.setToken({ token: accessToken, expiresAt });
    verifyIsAuthenticated();
  };

  const verifyIsAuthenticated = () => {
    setIsAuthenticated(!!auth.getToken());
  };

  useEffect(() => {
    verifyIsAuthenticated();
  }, []);

  return { sendOtp, verifyOtp, logout, isAuthenticated, loading };
};
