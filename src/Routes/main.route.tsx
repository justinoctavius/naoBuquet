import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { NotFoundPage } from '../pages/NotFound';
import { ServicesPage } from '../pages/Services';
import { ReservePage } from '../pages/Reserve';

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:id/reservar" element={<ReservePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default MainRoute;
