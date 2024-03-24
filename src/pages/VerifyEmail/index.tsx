import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EmailSended } from './EmailSended';
import { EnterEmail } from './EnterEmail';
import { useAuth } from '../../context/auth';

export const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [helperText, setHelperText] = useState('');
  const navigate = useNavigate();

  const { sendOtp, verifyOtp } = useAuth();

  const location = useLocation();
  const { navigateTo, params, email: paramsEmail } = location.state || {};

  const handleOnOTPChange = async (otp: string) => {
    try {
      setHelperText('');
      if (otp.length !== 6) return;

      await verifyOtp(email, otp);
      navigate(navigateTo || '/', { state: { params } });
    } catch (error) {
      console.error(error);
      setHelperText('Código incorrecto o expirado');
    }
  };

  useEffect(() => {
    if (paramsEmail) setEmail(paramsEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsEmail]);

  useEffect(() => {
    if (email) {
      sendOtp(email);
    }
  }, [email]);

  return (
    <FormScreenTemplate>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        alignItems={'center'}
      >
        {email ? (
          <EmailSended
            email={email}
            onEditPress={() => setEmail('')}
            resendOTP={() => sendOtp(email)}
            onOtpChange={handleOnOTPChange}
            helperText={helperText}
          />
        ) : (
          <EnterEmail onEmailChange={setEmail} />
        )}
      </Box>
    </FormScreenTemplate>
  );
};
