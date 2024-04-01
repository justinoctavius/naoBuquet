export interface ScheduleDto {
  from: string;
  to: string;
}

export interface Props {
  onSelectSchedule: (schedule: ScheduleDto[]) => void;
}
