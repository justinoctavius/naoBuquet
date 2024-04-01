import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { ServicesService } from '../../../services/services/services.service';
import { CreateServiceDto } from '../../../services/services/types';
import { SERVICES_DETAILS_QUERY_KEY } from '../../queries/services/useGetServiceDetails';
import { GET_USER_RESERVES_QUERY_KEY } from '../../queries/services/useGetUserReserves';

const servicesService = new ServicesService();

export const useCreateService = () => {
  const { mutateAsync } = useMutation(
    (variables: CreateServiceDto) => servicesService.createService(variables),
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
    mutateAsync,
  };
};
