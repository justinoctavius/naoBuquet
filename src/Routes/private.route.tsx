import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { routes } from '../constants/routes';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={routes.verifyEmail}
      state={{ navigateTo: routes.dashboard }}
    />
  );
};

export default PrivateRoute;
