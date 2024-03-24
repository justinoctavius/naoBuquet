import { useQuery } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';

export const SERVICES_DETAILS_QUERY_KEY = 'service-details';

const servicesService = new ServicesService();

export const useGetServiceDetails = (id: string) => {
  const { data, isLoading, error } = useQuery(SERVICES_DETAILS_QUERY_KEY, () =>
    servicesService.getServiceDetails(id)
  );

  return {
    data,
    isLoading,
    error,
  };
};
