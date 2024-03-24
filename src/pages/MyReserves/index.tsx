import { Box, Button, Typography } from '@mui/material';
import DashboardScreenTemplate from '../../components/templates/DashboardScreenTemplate';
import DataTable from '../../components/organisms/ReservesTable';
import { useGetUserReserves } from '../../hooks/queries/services/useGetUserReserves';
import { useCancelSchedule } from '../../hooks/mutations/services/useCancelSchedule';
import { Reserve } from '../../services/services/types';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { colors } from '../../constants/theme/colors';

export const MyReserves: React.FC = () => {
  const { data } = useGetUserReserves({ skip: 0, take: 50 });

  const { cancelSchedule } = useCancelSchedule();

  const navigate = useNavigate();

  const handleDelete = async ({ id, service }: Reserve) => {
    cancelSchedule.mutateAsync({ serviceId: service.id, reserveId: id });
  };

  return (
    <DashboardScreenTemplate>
      <Box>
        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems={'center'}
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Mis reservas
          </Typography>
          <Button variant="contained" onClick={() => navigate(routes.services)}>
            Reservar
          </Button>
        </Box>
        {data?.length ? (
          <DataTable reserves={data || []} onDelete={handleDelete} />
        ) : (
          <Box display="flex" justifyContent={'center'} mt={2}>
            <Typography variant="subtitle2" gutterBottom color={colors.gray900}>
              No tienes reservas
            </Typography>
          </Box>
        )}
      </Box>
    </DashboardScreenTemplate>
  );
};
