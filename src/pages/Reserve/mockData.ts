import { ServiceDetails } from './types';

export const service: ServiceDetails = {
  schedules: [
    {
      from: new Date('03/12/2024'),
      id: '1',
      to: new Date('03/12/2024'),
      isReserved: true,
    },
    {
      from: new Date('03/12/2024'),
      id: '2',
      to: new Date('03/12/2024'),
      isReserved: false,
    },
    {
      from: new Date(),
      id: '3',
      to: new Date(),
      isReserved: false,
    },
    {
      from: new Date(),
      id: '4',
      to: new Date(),
      isReserved: false,
    },
    {
      from: new Date(),
      id: '5',
      to: new Date(),
      isReserved: false,
    },
    {
      from: new Date(),
      id: '6',
      to: new Date(),
      isReserved: false,
    },
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  id: '1',
  name: 'Gimnasio',
};
