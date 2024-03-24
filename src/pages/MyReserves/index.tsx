import { Box } from '@mui/material';
import DashboardScreenTemplate from '../../components/templates/DashboardScreenTemplate';
import DataTable from '../../components/organisms/ReservesTable';
import { Reserve } from '../Reserve/types';

const reservesMock: Reserve[] = [
  {
    from: new Date(),
    to: new Date(),
    id: '1',
    isReserved: true,
    service: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      emoji: '🏋️‍♂️',
      id: '1',
      name: 'Gimnasio',
    },
  },
  {
    from: new Date(),
    to: new Date(),
    id: '1',
    isReserved: true,
    service: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      emoji: '🏋️‍♂️',
      id: '1',
      name: 'Gimnasio',
    },
  },
];

export const MyReserves: React.FC = () => {
  return (
    <DashboardScreenTemplate>
      <Box>
        <DataTable reserves={reservesMock} onDelete={(id) => console.log(id)} />
      </Box>
    </DashboardScreenTemplate>
  );
};
