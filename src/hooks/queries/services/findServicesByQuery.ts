import { ServicesService } from '../../../services/services/services.service';
import { useEffect, useState } from 'react';
import { Service } from '../../../services/services/types';

const servicesService = new ServicesService();

export const useFindServicesByQuery = (query: string) => {
  const [data, setData] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const refetch = async ({ query }: { query: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      const services = await servicesService.findServicesByQuery(query);
      setData(services);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch({ query });
  }, [query]);

  return { data, isLoading, error, refetch };
};
