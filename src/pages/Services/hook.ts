import { useRef, useState } from 'react';
import { services as mockData } from './mockData';
import { Service } from './types';

export const useServices = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [services, setServices] = useState<Service[]>([]);

  const searchDelayRef = useRef<number>();

  const findServiceByName = async (name: string) => {
    try {
      const nameFormatted = name.trim().toLowerCase();

      if (!nameFormatted) {
        setServices([]);
        return;
      }

      if (nameFormatted.length < 3) {
        return;
      }

      setLoading(true);
      const servicesFiltered = mockData.filter((service) =>
        service.name.toLowerCase().includes(nameFormatted)
      );

      setServices(servicesFiltered);
    } finally {
      setLoading(false);
    }
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

  return {
    onSearch,
    loading,
    services,
    name,
  };
};
