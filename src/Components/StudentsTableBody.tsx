import React from 'react';
import { TableBody, TableRow } from '@mui/material';
import { StudentsTableCell } from '@/Components/StudentsTableCell';

interface Props {
	rows: {
		studentName: string;
		courseName: string;
		lessonName: string;
		progress: string;
		id: string;
	}[];
	page: number;
	rowsPerPage: number;
}

export const StudentsTableBody: React.FC<Props> = ({ rows, page, rowsPerPage }) => {
	return (
		<TableBody>
			{(rowsPerPage > 0
				? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				: rows
			).map(row => (
				<TableRow key={row.id}>
					{Object.entries(row).map(value => (
						<StudentsTableCell
							key={value[0]}
							cellData={value}
						/>
					))}
				</TableRow>
			))}
		</TableBody>
	);
};
