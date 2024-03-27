import { HttpClient } from '../../utils/httpClient';
import { Metrics } from './types';

export class MetricsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  async getMetrics() {
    const { data } = await this.httpClient.client.get<Metrics>('/metrics');
    return data;
  }
}
