import { useNavigate } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import ScheduleComponent from '../../components/organisms/SchedulesSelector';
import { ScheduleDto } from '../../components/organisms/SchedulesSelector/types';
import { useCreateService } from '../../hooks/mutations/services/useCreateService';

interface Fields {
  name: string;
  description: string;
  emoji: string;
}

const descriptionMaxLength = 200;

export const AddServices = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useCreateService();

  const [schedules, setSchedules] = useState<ScheduleDto[]>([]);
  const [fields, setFields] = useState<Fields>({
    name: '',
    description: '',
    emoji: '',
  });
  const [helperText, setHelperText] = useState<Fields>({
    name: '',
    description: '',
    emoji: '',
  });

  const isFormValid = useMemo(
    () => !!fields.name && schedules.length > 0,
    [fields, schedules]
  );

  const validateFields = (fieldName: string) => {
    const field = fields[fieldName];

    if (!field) {
      setHelperText({ ...helperText, [fieldName]: 'Campo requerido' });
    }
  };

  const handleOnEmojiChange = (value: string) => {
    setFields({ ...fields, emoji: value });
  };

  const handleOnDescriptionChange = (value: string) => {
    if (value.length > descriptionMaxLength) {
      return;
    }

    setFields({ ...fields, description: value });
  };

  const handleOnFieldChange = (field: string, value: string | null) => {
    setFields({ ...fields, [field]: value });
    setHelperText({ ...helperText, [field]: '' });
  };

  const handleOnAddService = async () => {
    await mutateAsync({
      name: fields.name,
      description: fields.description,
      emoji: fields.emoji,
      schedules: schedules.map(({ from, to }) => ({
        from: new Date(from),
        to: new Date(to),
      })),
    });

    navigate('/dashboard/mis-servicios');
  };

  return (
    <FormScreenTemplate>
      <Box display={'flex'} mb={8} alignItems={'center'} gap={2}>
        <Typography variant="h4">➕ Agregar servicio</Typography>
      </Box>
      <Box gap={4}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <TextField
            id="filled-name"
            label="Nombre del servicio"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(e) => handleOnFieldChange('name', e.target.value)}
            value={fields.name}
            onBlur={() => validateFields('name')}
            helperText={helperText.name}
            error={!!helperText.name}
            required
          />
          <TextField
            id="filled-emoji"
            label="Emoji"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(e) => handleOnEmojiChange(e.target.value)}
            value={fields.emoji}
            onBlur={() => validateFields('emoji')}
            helperText={helperText.emoji}
            error={!!helperText.emoji}
            required
          />
          <TextField
            id="filled-description"
            label="Description"
            type="text"
            variant="outlined"
            fullWidth
            rows={4}
            multiline
            onChange={(e) => handleOnDescriptionChange(e.target.value)}
            value={fields.description}
            helperText={`${fields.description.length}/${descriptionMaxLength}`}
          />
          <ScheduleComponent onSelectSchedule={setSchedules} />
          <Button
            variant="contained"
            fullWidth
            disabled={!isFormValid}
            onClick={handleOnAddService}
            sx={{ marginTop: 4 }}
          >
            Agregar
          </Button>
        </Box>
      </Box>
    </FormScreenTemplate>
  );
};
