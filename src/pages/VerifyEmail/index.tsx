import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Box, Typography } from '@mui/material';
import OtpInput from '../../components/molecules/OtpInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/auth/useLogin';
import { useEffect } from 'react';

export const VerifyEmail = () => {
  const navigate = useNavigate();

  const { sendOtp, verifyOtp } = useLogin();

  const location = useLocation();
  const { navigateTo, params, email } = location.state || {};

  const handleOnOTPChange = async (otp: string) => {
    if (otp.length !== 6) return;

    await verifyOtp(email, otp);
    navigate(navigateTo || '/', { state: { params } });
  };

  useEffect(() => {
    sendOtp(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
