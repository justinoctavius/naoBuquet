import { Box, Typography } from '@mui/material';
import OtpInput from '../../../components/molecules/OtpInput';
import { ResendOTPButton } from '../../../components/molecules/ResendOTPButton';
import { colors } from '../../../constants/theme/colors';
import EditIcon from '@mui/icons-material/Edit';

export const EmailSended = ({
  onOtpChange,
  resendOTP,
  onEditPress,
  helperText,
  email,
}: {
  onOtpChange: (otp: string) => void;
  resendOTP: () => void;
  onEditPress: () => void;
  helperText?: string;
  email: string;
}) => {
  function maskEmail(email: string) {
    const [username, domain] = email.split('@');
    const domainParts = domain.split('.');
    const maskedUsername =
      username.length > 2
        ? username.charAt(0) + '***' + username.charAt(username.length - 1)
        : username;
    const maskedDomain =
      domainParts[0].length > 2
        ? domainParts[0].charAt(0) +
          '***' +
          domainParts[0].charAt(domainParts[0].length - 1)
        : domainParts[0];
    const domainExtension = domainParts.slice(1).join('.');

    return `${maskedUsername}@${maskedDomain}.${domainExtension}`;
  }

  return (
    <>
      <Typography variant="h1" fontWeight={'bold'}>
        📧
      </Typography>
      <Box>
        <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
          Se ha enviado un código de verificación a este correo
        </Typography>
        <Box
          textAlign={'center'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            width={'fit-content'}
            color={colors.gray900}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            onClick={onEditPress}
            padding={1}
            sx={{
              bgcolor: colors.gray,
              cursor: 'pointer',
              backgroundColor: colors.gray,
              '&:hover': {
                backgroundColor: colors.gray700, // Color al pasar el mouse
              },
            }}
            px={2}
            borderRadius={4}
            gap={1}
          >
            <Typography variant="caption" fontWeight={'bold'}>
              {maskEmail(email)}
            </Typography>
            <EditIcon fontSize={'small'} />
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2">
        Por favor, ingresa el código para continuar
      </Typography>
      <OtpInput onOtpChange={onOtpChange} />
      <Typography variant="subtitle2" color={'error'}>
        {helperText}
      </Typography>

      <ResendOTPButton onClick={resendOTP} />
    </>
  );
};
