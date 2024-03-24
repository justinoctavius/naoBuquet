export interface Schedule {
  id: string;
  from: Date;
  to: Date;
  isReserved: boolean;
}

export interface Reserve extends Schedule {
  service: Pick<ServiceDetails, 'id' | 'name' | 'emoji' | 'description'>;
}

export interface ServiceDetails {
  id: string;
  name: string;
  description: string;
  schedules: Schedule[];
  emoji?: string;
}
