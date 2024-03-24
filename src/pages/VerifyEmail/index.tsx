import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Box, Typography } from '@mui/material';
import OtpInput from '../../components/molecules/OtpInput';
import { useLocation, useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { navigateTo } = location.state || {};

  const handleOnOTPChange = (otp: string) => {
    if (otp.length !== 6) return;

    //TODO: Validar el código de verificación
    navigate(navigateTo || '/');
  };

  return (
    <FormScreenTemplate>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        alignItems={'center'}
      >
        <Typography variant="h1" fontWeight={'bold'}>
          📧
        </Typography>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          Se ha enviado un código de verificación a tu correo
        </Typography>
        <Typography variant="subtitle2">
          Por favor, ingresa el código para continuar
        </Typography>
        <OtpInput onOtpChange={handleOnOTPChange} />
      </Box>
    </FormScreenTemplate>
  );
};
