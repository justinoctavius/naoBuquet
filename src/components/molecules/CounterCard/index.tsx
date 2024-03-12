import { Box, Typography } from '@mui/material';
import { colors } from '../../../constants/theme/colors';

export function CounterCard({
  count,
  description,
  title,
}: {
  count: number;
  description: string;
  title: string;
}) {
  return (
    <Box sx={{ textAlign: 'center', p: 2, minWidth: 200, maxWidth: 300 }}>
      <Typography
        variant="h4"
        component="p"
        sx={{ fontWeight: 'bold' }}
        color={colors.blue}
      >
        +{count}
      </Typography>
      <Typography variant="subtitle1" component="p" fontWeight={'bold'}>
        {title}
      </Typography>
      <Typography variant="caption" component="p" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  );
}
