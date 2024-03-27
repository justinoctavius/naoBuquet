import { useMutation } from 'react-query';
import { CancelScheduleDto } from '../../../services/services/types';
import { ServicesService } from '../../../services/services/services.service';
import { queryClient } from '../../../App';
import { GET_USER_RESERVES_QUERY_KEY } from '../../queries/services/useGetUserReserves';

const servicesService = new ServicesService();

export const useCancelSchedule = () => {
  const cancelSchedule = useMutation(
    (cancelScheduleDto: CancelScheduleDto) =>
      servicesService.cancelReserve(cancelScheduleDto),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(GET_USER_RESERVES_QUERY_KEY);
      },
    }
  );

  return {
    cancelSchedule,
  };
};
