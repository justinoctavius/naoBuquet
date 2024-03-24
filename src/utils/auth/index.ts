/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'token';
const EXPIRES_AT_KEY = 'expiresAt';

export interface User {
  id: string;
  email: string;
}

export class AuthSingleton {
  private token: string | null;
  private expiresAt: number | null;
  private user: User | null;

  static instance: AuthSingleton;

  constructor() {
    this.expiresAt = this.getExpiresAt();
    this.token = this.getToken();
    this.user = this.getUser();
  }

  static getInstance() {
    if (!AuthSingleton.instance) {
      AuthSingleton.instance = new AuthSingleton();
    }

    return AuthSingleton.instance;
  }

  setToken({ token, expiresAt }: { token: string; expiresAt: number }) {
    this.token = token;
    this.expiresAt = expiresAt;
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(EXPIRES_AT_KEY, expiresAt.toString());
  }

  removeToken() {
    this.token = '';
    this.expiresAt = 0;
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(EXPIRES_AT_KEY);
  }

  getToken() {
    if (this.isTokenExpired()) {
      this.removeToken();
      return null;
    }

    if (!this.token) {
      this.token = sessionStorage.getItem(TOKEN_KEY);
    }

    return this.token;
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    if (!this.getToken()) {
      return null;
    }

    const { email, id }: any = jwtDecode(this.getToken() || '') || {};

    this.user = { email, id };

    return this.user;
  }

  isTokenExpired() {
    return Date.now() >= this.getExpiresAt();
  }

  getExpiresAt() {
    return (
      this.expiresAt || parseInt(sessionStorage.getItem(EXPIRES_AT_KEY) || '0')
    );
  }
}
