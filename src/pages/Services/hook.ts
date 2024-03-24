/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { useFindServicesByQuery } from '../../hooks/queries/services/findServicesByQuery';
import { Service } from '../../services/services/types';

export const useServices = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [services, setServices] = useState<Service[]>([]);

  const { data, isLoading, error } = useFindServicesByQuery(query);

  const searchDelayRef = useRef<any>();

  const findServiceByName = async (name: string) => {
    const nameFormatted = name.trim().toLowerCase();

    if (!nameFormatted) {
      setServices([]);
      return;
    }

    if (nameFormatted.length < 3) {
      return;
    }

    setQuery(nameFormatted);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (searchDelayRef.current) {
      clearTimeout(searchDelayRef.current);
    }

    searchDelayRef.current = setTimeout(async () => {
      await findServiceByName(event.target.value);
    }, 500);
  };

  useEffect(() => {
    if (data) {
      setServices(data);
    }
  }, [data]);

  return {
    onSearch,
    loading: isLoading,
    services,
    error,
    name,
  };
};
