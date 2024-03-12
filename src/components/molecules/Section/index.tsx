import { Box, Typography } from '@mui/material';
import { Props } from './types';

export const Section = ({ children, title }: Props) => {
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      my={16}
    >
      <Typography variant="h5" fontWeight={600} textAlign={'center'} mb={2}>
        {title}
      </Typography>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={2}
        maxWidth={800}
      >
        {children}
      </Box>
    </Box>
  );
};
