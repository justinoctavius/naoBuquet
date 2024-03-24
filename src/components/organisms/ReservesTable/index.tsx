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
import { Reserve } from '../../../pages/Reserve/types';
import moment from 'moment';

interface DataTableProps {
  reserves: Reserve[];
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ reserves, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Servicio</TableCell>
            <TableCell>Desde</TableCell>
            <TableCell>Hasta</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reserves.map(({ service: { name, emoji }, from, id, to }, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell>
                {emoji} {name}
              </TableCell>
              <TableCell>{moment(from).format('DD/MM/YYYY HH:mm')}</TableCell>
              <TableCell>{moment(to).format('DD/MM/YYYY HH:mm')}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(id)}>
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
