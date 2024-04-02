import { useMutation } from 'react-query';
import { queryClient } from '../../../App';
import { ServicesService } from '../../../services/services/services.service';
import { SERVICES_QUERY_KEY } from '../../queries/services/useGetServices';

const servicesService = new ServicesService();

export const useDeleteService = () => {
  const deleteService = useMutation(
    (id: string) => servicesService.deleteService(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(SERVICES_QUERY_KEY);
      },
    }
  );

  return {
    deleteService,
  };
};
