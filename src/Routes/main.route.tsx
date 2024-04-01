import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFound';
import { ServicesPage } from '../pages/Services';
import { ReservePage } from '../pages/Reserve';
import { VerifyEmail } from '../pages/VerifyEmail';
import { ReserveConfirmed } from '../pages/ReserveConfirmed';
import { MyReserves } from '../pages/MyReserves';
import PrivateRoute from './private.route';
import { routes } from '../constants/routes';
import { UnderConstruction } from '../pages/UnderConstruction';
import PrivateHomeRoute from './private-home.route';
import { MyServices } from '../pages/MyServices';
import { AddServices } from '../pages/AddServices';

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateHomeRoute />} />
        <Route path={routes.services} element={<ServicesPage />} />
        <Route path={routes.about} element={<UnderConstruction />} />
        <Route path="/servicios/:id/reservar" element={<ReservePage />} />
        <Route path={routes.verifyEmail} element={<VerifyEmail />} />
        <Route path={routes.reserveConfirmed} element={<ReserveConfirmed />} />
        <Route path={`${routes.dashboard}/*`} element={<PrivateRoute />}>
          <Route path={routes.myServices} element={<MyServices />} />
          <Route path={'agregar-servicio'} element={<AddServices />} />
          <Route path={'recordatorios'} element={<UnderConstruction />} />
          <Route path={'configuracion'} element={<UnderConstruction />} />
          <Route path={'notificaciones'} element={<UnderConstruction />} />
          <Route
            path={'metricas-y-analitica'}
            element={<UnderConstruction />}
          />
          <Route path="" element={<MyReserves />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default MainRoute;
