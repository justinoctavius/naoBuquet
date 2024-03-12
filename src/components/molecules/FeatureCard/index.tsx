import { Box, Typography } from '@mui/material';
import { Props } from './types';

export const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="justify"
      p={2}
      minWidth={200}
      maxWidth={300}
    >
      {icon}
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="caption" marginTop={1}>
        {description}
      </Typography>
    </Box>
  );
};
