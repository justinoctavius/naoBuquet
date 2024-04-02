/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { Schedule } from '../../../pages/Reserve/types';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Button, Stack, Typography } from '@mui/material';
import { colors } from '../../../constants/theme/colors';

interface CalendarProps {
  schedule: Schedule[];
  onSelectReserve: (id: string | null) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  schedule,
  onSelectReserve,
}) => {
  const [selectedReserve, setSelectedReserve] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>();

  // Verificar si todas las reservas para un día específico están llenas
  const isDayFullyBooked = (day: Dayjs): boolean => {
    const dayReservations = schedule.filter(({ from, to }) => {
      const dayStart = day.startOf('day').toDate();
      const dayEnd = day.endOf('day').toDate();
      return new Date(from) <= dayEnd && new Date(to) >= dayStart;
    });
    return dayReservations.every((reservation) => reservation.isReserved);
  };

  // Filtro para mostrar solo las horas disponibles del día seleccionado
  const availableTimes = (selectedDay: Dayjs) => {
    return schedule.filter(({ from, to }) => {
      const dayStart = selectedDay.startOf('day').toDate();
      const dayEnd = selectedDay.endOf('day').toDate();
      return new Date(from) >= dayStart && new Date(to) <= dayEnd;
    });
  };

  const handleOnSelectTime = (id: string) => {
    if (selectedReserve === id) {
      setSelectedReserve(null);
      return;
    }

    setSelectedReserve(id);
  };

  useEffect(() => {
    onSelectReserve(selectedReserve);
  }, [selectedReserve]);

  useEffect(() => {
    if (selectedDate) {
      setSelectedReserve(null);
    }
  }, [selectedDate]);

  return (
    <Box display={'flex'} flexDirection={'column'} maxWidth={'fit-content'}>
      <Typography variant="subtitle1" mb={2}>
        Selecciona una fecha:{' '}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          // renderInput={(params: any) => params.inputProps}
          shouldDisableDate={isDayFullyBooked}
        />
        {selectedDate &&
          (availableTimes(selectedDate).length ? (
            <>
              <Typography variant="subtitle1" mt={2}>
                Selecciona un horario:{' '}
              </Typography>
              <Stack
                gridTemplateColumns={'repeat(2, minmax(100px, 1fr))'}
                marginTop={2}
                gap={1}
                display={'grid'}
                alignContent={'center'}
                justifyContent={'center'}
              >
                {availableTimes(selectedDate).map(
                  ({ id, from, to, isReserved }) => (
                    <Button
                      key={id}
                      variant={
                        selectedReserve === id ? 'contained' : 'outlined'
                      }
                      disabled={isReserved}
                      onClick={() => handleOnSelectTime(id)}
                    >
                      {`${dayjs(from).format('HH:mm')} - ${dayjs(to).format(
                        'HH:mm'
                      )}`}
                    </Button>
                  )
                )}
              </Stack>
            </>
          ) : (
            <Box mt={2}>
              <Typography
                variant="subtitle2"
                color={colors.danger}
                textAlign={'center'}
              >
                No hay horarios disponibles para el día seleccionado 😢
              </Typography>
            </Box>
          ))}
      </LocalizationProvider>
    </Box>
  );
};
