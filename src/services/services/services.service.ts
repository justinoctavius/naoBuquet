import { HttpClient } from '../../utils/httpClient';
import { Paginate, ReserveScheduleDto, Service } from './types';

export class ServicesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  async getServices({ skip, take }: Paginate): Promise<Service[]> {
    const { data } = await this.httpClient.client.get<Service[]>(
      `/services?skip=${skip}&take=${take}`
    );
    return data;
  }

  async getServiceDetails(id: string): Promise<Service> {
    const { data } = await this.httpClient.client.get<Service>(
      `/services/${id}`
    );
    return data;
  }

  async reserveSchedule({
    serviceId,
    scheduleId,
    ...rest
  }: ReserveScheduleDto) {
    await this.httpClient.client.post(
      `/services/${serviceId}/schedules/${scheduleId}/reserve`,
      { ...rest }
    );
  }

  async cancelSchedule(serviceId: string, scheduleId: string) {
    await this.httpClient.client.post(
      `/services/${serviceId}/schedules/${scheduleId}/cancel`
    );
  }

  async findServicesByQuery(query: string): Promise<Service[]> {
    const { data } = await this.httpClient.client.get<Service[]>(
      `/services/search?query=${query}`
    );
    return data;
  }
}
