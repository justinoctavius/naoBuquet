// ScheduleComponent.tsx
import { Box, Button, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import TrashIcon from '@mui/icons-material/Delete';
import { Props, ScheduleDto } from './types';

const ScheduleComponent: React.FC<Props> = ({ onSelectSchedule }: Props) => {
  const [fields, setFields] = useState<ScheduleDto>({
    from: '',
    to: '',
  });
  const [helperText, setHelperText] = useState('');

  const [schedules, setSchedules] = useState<ScheduleDto[]>([]);

  const handleAddSchedule = () => {
    const isFormValid = validateField();

    if (!isFormValid) return;

    setSchedules([...schedules, { ...fields }]);

    setFields({ from: '', to: '' });
  };

  const handleRemoveSchedule = (index: number) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  const handleOnFieldChange = (field: 'from' | 'to', value: string) => {
    console.log({ value });
    setFields({ ...fields, [field]: value });
    setHelperText('');
  };

  const validateField = () => {
    const currentDate = new Date().getTime();

    const toDate = new Date(fields.to).getTime();
    const fromDate = new Date(fields.from).getTime();

    if (toDate < currentDate || fromDate < currentDate) {
      setHelperText(
        'La fecha y hora deben ser mayores que la fecha y hora actual.'
      );
      return false;
    }
    if (fromDate >= toDate) {
      setHelperText(
        'La fecha/hora "Desde" debe ser menor que la fecha/hora "Hasta".'
      );
      return false;
    }
    if (toDate <= fromDate) {
      setHelperText(
        'La fecha/hora "Hasta" debe ser mayor que la fecha/hora "Desde".'
      );
      return false;
    }

    setHelperText('');
    return true;
  };

  useEffect(() => {
    onSelectSchedule(schedules);
  }, [schedules]);

  return (
    <div>
      <Typography variant="subtitle1" fontWeight={'bold'} mb={2}>
        Horarios disponibles
      </Typography>
      <Box display="flex" gap={1}>
        <TextField
          type="datetime-local"
          label="Desde"
          InputLabelProps={{
            shrink: true,
          }}
          value={fields.from}
          error={!!helperText}
          onChange={(e) => handleOnFieldChange('from', e.target.value)}
        />
        <TextField
          type="datetime-local"
          label="Hasta"
          InputLabelProps={{
            shrink: true,
          }}
          value={fields.to}
          error={!!helperText}
          onChange={(e) => handleOnFieldChange('to', e.target.value)}
        />
        <Button variant="contained" onClick={handleAddSchedule}>
          Agregar horario
        </Button>
      </Box>
      <Box>
        <Typography color="error" variant="caption">
          {helperText}
        </Typography>
      </Box>
      {!!schedules?.length && (
        <Box mt={2}>
          <Typography variant="caption">Horarios</Typography>
        </Box>
      )}
      <Box display="grid" gridTemplateColumns={'1fr 1fr 1fr'} gap={1}>
        {schedules.map((schedule, index) => (
          <Box
            key={index}
            boxShadow={2}
            p={2}
            borderRadius={4}
            display="flex"
            position="relative"
            minWidth={200}
            gap={1}
          >
            <Box
              position={'absolute'}
              right={16}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleRemoveSchedule(index)}
            >
              <TrashIcon color="error" />
            </Box>
            <Box>
              <Box display="flex" flexDirection={'column'}>
                <Typography variant="caption" fontWeight={'bold'}>
                  Desde
                </Typography>
                <Typography variant="caption">
                  {moment(schedule.from).format('DD/MM/YYYY HH:mm')}
                </Typography>
              </Box>
              <Box display="flex" flexDirection={'column'}>
                <Typography variant="caption" fontWeight={'bold'}>
                  Hasta
                </Typography>
                <Typography variant="caption">
                  {moment(schedule.to).format('DD/MM/YYYY HH:mm')}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ScheduleComponent;
