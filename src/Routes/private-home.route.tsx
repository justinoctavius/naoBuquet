import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { routes } from '../constants/routes';
import { HomePage } from '../pages/Home';

const PrivateHomeRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={routes.dashboard} /> : <HomePage />;
};

export default PrivateHomeRoute;
