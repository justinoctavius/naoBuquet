import { useQuery } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';

const FIND_SERVICES_BY_QUERY_KEY = 'find-services-by-query';

const servicesService = new ServicesService();

export const useFindServicesByQuery = (query: string) => {
  const { data, isLoading, error } = useQuery(
    FIND_SERVICES_BY_QUERY_KEY,
    () => servicesService.findServicesByQuery(query),
    {
      enabled: !!query,
    }
  );

  return { data, isLoading, error };
};
