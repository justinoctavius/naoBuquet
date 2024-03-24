import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { NotFoundPage } from '../pages/NotFound';
import { ServicesPage } from '../pages/Services';
import { ReservePage } from '../pages/Reserve';
import { VerifyEmail } from '../pages/VerifyEmail';
import { ReserveConfirmed } from '../pages/ReserveConfirmed';
import { MyReserves } from '../pages/MyReserves';

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:id/reservar" element={<ReservePage />} />
        <Route path="/validar-email" element={<VerifyEmail />} />
        <Route path="/reserva-confirmada" element={<ReserveConfirmed />} />
        <Route path="/mis-reservas" element={<MyReserves />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default MainRoute;
