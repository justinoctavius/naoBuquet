import { useMutation } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';
import { ReserveScheduleDto } from '../../../services/services/types';
import { queryClient } from '../../../App';
import { SERVICES_DETAILS_QUERY_KEY } from '../../queries/services/useGetServiceDetails';
import { GET_USER_RESERVES_QUERY_KEY } from '../../queries/services/useGetUserReserves';

const servicesService = new ServicesService();

export const useReserveSchedule = (reserveScheduleDto: ReserveScheduleDto) => {
  const reserveSchedule = useMutation(
    () => servicesService.reserveSchedule(reserveScheduleDto),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          SERVICES_DETAILS_QUERY_KEY,
          GET_USER_RESERVES_QUERY_KEY,
        ]);
      },
    }
  );

  return {
    reserveSchedule,
  };
};
