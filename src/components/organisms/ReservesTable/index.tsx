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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { Reserve } from '../../../services/services/types';

interface DataTableProps {
  reserves: Reserve[];
  onDelete: (reserve: Reserve) => void;
}

const DataTable: React.FC<DataTableProps> = ({ reserves, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Servicio</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Desde</TableCell>
            <TableCell>Hasta</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reserves.map((reserve, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                {reserve.service.emoji} {reserve.service.name}
              </TableCell>
              <TableCell>{reserve.firstName}</TableCell>
              <TableCell>{reserve.lastName}</TableCell>
              <TableCell>
                {moment(reserve.schedule.from).format('DD/MM/YYYY HH:mm')}
              </TableCell>
              <TableCell>
                {moment(reserve.schedule.to).format('DD/MM/YYYY HH:mm')}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(reserve)}>
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

export default DataTable;
