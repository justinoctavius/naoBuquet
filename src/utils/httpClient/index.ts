import axios, { AxiosInstance } from 'axios';
import { AuthSingleton } from '../auth';

export class HttpClient {
  readonly client: AxiosInstance;
  private auth = AuthSingleton.getInstance();
  static instance: HttpClient;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://citas-972986e71115.herokuapp.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${this.auth.getToken()}`;
      return config;
    });
  }

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }
}
