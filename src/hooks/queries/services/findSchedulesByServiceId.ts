import { useQuery } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';

export const FIND_SCHEDULES_BY_SERVICE_ID = 'service-details';

const servicesService = new ServicesService();

export const useFindSchedulesByServiceId = (
  id: string,
  options?: { refetchInterval: number }
) => {
  const { data, isLoading, error } = useQuery(
    FIND_SCHEDULES_BY_SERVICE_ID,
    () => servicesService.findScheduleByServiceId(id),
    { refetchInterval: options?.refetchInterval }
  );

  return {
    data,
    isLoading,
    error,
  };
};
