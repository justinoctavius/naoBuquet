import { useQuery } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';
import { Paginate } from '../../../services/services/types';

export const SERVICES_QUERY_KEY = 'services';

const servicesService = new ServicesService();

export const useGetServices = ({ skip, take }: Paginate) => {
  const { data, isLoading, error } = useQuery(SERVICES_QUERY_KEY, () =>
    servicesService.getServices({ skip, take })
  );

  return {
    data,
    isLoading,
    error,
  };
};
