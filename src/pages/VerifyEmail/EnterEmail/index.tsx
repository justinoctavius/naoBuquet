import { Box, Button, TextField, Typography } from '@mui/material';
import { EMAIL_REGEX } from '../../../constants/regex';
import { useState } from 'react';

export const EnterEmail = ({
  onEmailChange,
}: {
  onEmailChange: (email: string) => void;
}) => {
  const [email, seEmail] = useState('');
  const [helperText, setHelperText] = useState('');

  const validateEmail = () => {
    if (!email.match(EMAIL_REGEX)) {
      setHelperText('Correo inválido');
    } else {
      setHelperText('');
    }
  };

  const handleOnFieldChange = (value: string) => {
    seEmail(value);
    setHelperText('');
  };

  const handleOnSaveEmail = () => {
    if (!email.match(EMAIL_REGEX)) {
      setHelperText('Correo inválido');
      return;
    }

    onEmailChange(email);
  };

  const isButtonDisabled = !email.match(EMAIL_REGEX);

  return (
    <>
      <Typography variant="h1" fontWeight={'bold'}>
        📧
      </Typography>
      <Typography variant="subtitle1" fontWeight={'bold'}>
        Ingresa tu correo electronico para continuar
      </Typography>
      <Box>
        <TextField
          id="filled-email"
          label="Correo electronico"
          type="email"
          variant="outlined"
          fullWidth
          onChange={(e) => handleOnFieldChange(e.target.value)}
          value={email}
          required
          helperText={helperText}
          error={!!helperText}
          onBlur={validateEmail}
          sx={{ marginY: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleOnSaveEmail}
          disabled={isButtonDisabled}
          fullWidth
        >
          Continuar
        </Button>
      </Box>
    </>
  );
};
