import { HttpClient } from '../../utils/httpClient';
import { VerifyOTPResponse } from './types';

export class AuthService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  async sendOtp(email: string) {
    await this.httpClient.client.post('/auth/send-otp', { email });
  }

  async verifyOtp(email: string, otp: string): Promise<VerifyOTPResponse> {
    const { data } = await this.httpClient.client.post<VerifyOTPResponse>(
      '/auth/verify-otp',
      {
        email,
        otp,
      }
    );
    return data;
  }
}
