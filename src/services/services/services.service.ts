import { HttpClient } from '../../utils/httpClient';
import {
  CancelScheduleDto,
  Paginate,
  Reserve,
  ReserveScheduleDto,
  Service,
} from './types';

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

  async getUserReserves({ skip, take }: Paginate): Promise<Reserve[]> {
    const { data } = await this.httpClient.client.get<Reserve[]>(
      `/reserves?skip=${skip}&take=${take}`
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

  async cancelSchedule({ serviceId, scheduleId }: CancelScheduleDto) {
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
