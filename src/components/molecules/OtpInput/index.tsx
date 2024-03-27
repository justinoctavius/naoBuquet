/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { OtpInputProps } from './types';

const OtpInput = ({ onOtpChange }: OtpInputProps) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const inputRefs = new Array(6).fill(React.createRef());

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return false; // Asegurarse de que es un número
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (inputRefs[index + 1] && element.value) {
      console.log();
      inputRefs[index + 1].current.focus();
    }

    // Mover al siguiente campo si el actual tiene un número
    const nextSibling = element.parentNode.parentNode.nextSibling;

    if (nextSibling && element.value) {
      nextSibling.querySelector('input').focus();
    }
  };

  const handlePaste = (e: any) => {
    const data: string = e.clipboardData.getData('text').slice(0, 6); // Obtener y cortar los datos del portapapeles
    if (isNaN(Number(data))) return false; // Verificar que los datos sean números

    // Separar los datos en el array y actualizar el estado
    let newOtp = [...otp];
    newOtp = data.split('').map((digit) => digit.trim());
    setOtp(newOtp);

    // Focus en el último campo rellenado o el siguiente vacío
    const lastIndex = newOtp.findIndex(
      (value, index) => value === '' && index > 0
    );
    const inputs = document.querySelectorAll('#otp > input');
    const lastInput: any =
      inputs[lastIndex >= 0 ? lastIndex - 1 : newOtp.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  };

  useEffect(() => {
    const otpString = otp.join('').trim();

    if (otpString.length === 6) {
      onOtpChange(otpString);
    }
  }, [otp, onOtpChange]);

  return (
    <Box
      id="otp"
      onPaste={handlePaste}
      display={'flex'}
      alignItems={'center'}
      gap={1}
    >
      {otp.map((data, index) => (
        <React.Fragment key={index}>
          <TextField
            type="text"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            ref={inputRefs[index]}
            inputProps={{
              maxLength: 1,
              style: { width: '10px', height: '10px', textAlign: 'center' },
            }}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default OtpInput;
