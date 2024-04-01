import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  capitalize,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Service } from '../../../services/services/types';

interface DataTableProps {
  services: Service[];
  onDelete: (reserve: Service) => void;
}

const ServicesTable: React.FC<DataTableProps> = ({ services, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                {service.emoji} {capitalize(service.name || '')}
              </TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(service)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesTable;
