import { useEffect, useState } from 'react';
import { ServiceDetails } from './types';
import { service as mockData } from './mockData';

export const useReserve = ({ id }: { id: string }) => {
  const [service, setService] = useState<ServiceDetails>();

  const findServiceById = (id: string) => {
    setService(mockData);
  };

  useEffect(() => {
    findServiceById(id);
  }, [id]);

  return {
    service,
  };
};
