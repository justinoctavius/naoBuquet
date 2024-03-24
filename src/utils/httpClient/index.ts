import axios, { AxiosInstance } from 'axios';

const TOKEN_KEY = 'token';
const EXPIRES_AT_KEY = 'expiresAt';

export class HttpClient {
  readonly client: AxiosInstance;
  private token: string | null;
  private expiresAt: number | null;

  static instance: HttpClient;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.expiresAt = this.getExpiresAt();
    this.token = this.getToken();

    this.client.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${this.getToken()}`;
      return config;
    });
  }

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
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

    return this.token || sessionStorage.getItem(TOKEN_KEY);
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
