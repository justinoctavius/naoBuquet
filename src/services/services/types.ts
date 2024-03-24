export interface Service {
  id: string;
  name: string;
  description: string;
  emoji: string;
  schedules: Schedule[];
}

export interface Schedule {
  id: string;
  from: Date;
  to: Date;
  isReserved: boolean;
}

export interface Paginate {
  skip: number;
  take: number;
}

export interface Reserve {
  firstName: string;
  lastName: string;
  email: string;
  service: Pick<Service, 'id' | 'name' | 'emoji' | 'description'>;
  schedule: Pick<Schedule, 'id' | 'from' | 'to'>;
}

export interface ReserveScheduleDto {
  firstName: string;
  lastName: string;
  email: string;
  scheduleId: string;
  serviceId: string;
}

export interface CancelScheduleDto {
  serviceId: string;
  scheduleId: string;
}
