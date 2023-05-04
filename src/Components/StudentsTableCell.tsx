import React from 'react';
import { TableCell } from '@mui/material';

interface Props {
	cellData: [string, string];
}

export const StudentsTableCell: React.FC<Props> = ({ cellData }) => {
	return cellData[0] !== 'id' ? <TableCell>{cellData[1]}</TableCell> : null;
};
