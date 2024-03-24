export interface Schedule {
  id: string;
  from: Date;
  to: Date;
  isReserved: boolean;
}

export interface ServiceDetails {
  id: string;
  name: string;
  description: string;
  schedules: Schedule[];
  emoji?: string;
}
