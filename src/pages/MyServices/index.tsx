import { Box, Button, Typography } from '@mui/material';
import DashboardScreenTemplate from '../../components/templates/DashboardScreenTemplate';
import { Service } from '../../services/services/types';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../constants/theme/colors';
import { useGetServices } from '../../hooks/queries/services/useGetServices';
import ServicesTable from '../../components/organisms/ServicesTable';
import { useDeleteService } from '../../hooks/mutations/services/useDeleteService';

export const MyServices: React.FC = () => {
  const { data } = useGetServices({ skip: 0, take: 50 });

  const { deleteService } = useDeleteService();

  const navigate = useNavigate();

  const handleDelete = async ({ id }: Service) => {
    deleteService.mutateAsync(id);
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
            Mis servicios
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/agregar-servicio')}
          >
            Agregar servicio
          </Button>
        </Box>
        {data?.length ? (
          <ServicesTable services={data || []} onDelete={handleDelete} />
        ) : (
          <Box display="flex" justifyContent={'center'} mt={2}>
            <Typography variant="subtitle2" gutterBottom color={colors.gray900}>
              No tienes servicios
            </Typography>
          </Box>
        )}
      </Box>
    </DashboardScreenTemplate>
  );
};
