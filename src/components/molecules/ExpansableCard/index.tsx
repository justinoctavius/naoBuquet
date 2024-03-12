import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse } from '@mui/material';

const ExpandableCard: React.FC<{
  title: string;
  moreText: string;
}> = ({ title, moreText }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        minWidth: 200,
        maxWidth: 300,
        p: 2,
        boxShadow: 1,
        borderRadius: 3,
        cursor: 'pointer',
        height: 'fit-content',
      }}
      onClick={handleExpandClick}
    >
      <Box
        justifyContent={'space-between'}
        display={'flex'}
        alignItems={'center'}
        gap={2}
      >
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <IconButton
          sx={{ p: 0 }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography paragraph variant="caption" mt={2}>
          {moreText}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default ExpandableCard;
