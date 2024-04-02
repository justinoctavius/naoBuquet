import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

export function ResendOTPButton({ onClick }: { onClick: () => void }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    // Nada que hacer si el botón no está desactivado
    if (!isDisabled) return;

    // Si el botón está desactivado, inicia la cuenta regresiva
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    // Limpia el intervalo si el tiempo llega a 0
    if (timeLeft === 0) {
      clearInterval(intervalId);
      setIsDisabled(false);
      setTimeLeft(60);
    }

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [isDisabled, timeLeft]);

  const handleClick = () => {
    onClick();
    // Desactiva el botón y comienza la cuenta regresiva
    setIsDisabled(true);
  };

  return (
    <Button variant="text" disabled={isDisabled} onClick={handleClick}>
      {isDisabled
        ? `Por favor espera ${timeLeft} segundos`
        : 'Reenviar Código '}
    </Button>
  );
}
