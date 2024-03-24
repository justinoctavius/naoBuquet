import { useQuery } from 'react-query';
import { ServicesService } from '../../../services/services/services.service';
import { Paginate } from '../../../services/services/types';

export const GET_USER_RESERVES_QUERY_KEY = 'get-user-reserves';
const servicesService = new ServicesService();

export const useGetUserReserves = ({ skip, take }: Paginate) => {
  const { data, isLoading, error, refetch } = useQuery(
    GET_USER_RESERVES_QUERY_KEY,
    () => servicesService.getUserReserves({ skip, take })
  );

  return { data, isLoading, error, refetch };
};
