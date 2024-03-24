import { useMutation } from 'react-query';
import { CancelScheduleDto } from '../../../services/services/types';
import { ServicesService } from '../../../services/services/services.service';
import { queryClient } from '../../../App';
import { SERVICES_DETAILS_QUERY_KEY } from '../../queries/services/useGetServiceDetails';
import { GET_USER_RESERVES_QUERY_KEY } from '../../queries/services/useGetUserReserves';

const servicesService = new ServicesService();

export const useCancelSchedule = (cancelScheduleDto: CancelScheduleDto) => {
  const cancelSchedule = useMutation(
    () => servicesService.cancelReserve(cancelScheduleDto),
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
    cancelSchedule,
  };
};
