import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Flex } from '@adobe/react-spectrum';

interface Props {
	columns: { name: string; key: string }[];
	sortType: 'ASC' | 'DESC' | null;
	setSortType: (value: 'ASC' | 'DESC') => void;
}

export const StudentsTableHead: React.FC<Props> = React.memo(
	({ columns, sortType, setSortType }) => {
		return (
			<TableHead>
				<TableRow>
					{columns.map(column => (
						<TableCell
							key={column.key}
							onClick={() => {
								if (column.name === 'Student name') {
									setSortType(sortType === 'ASC' ? 'DESC' : 'ASC');
								}
							}}
						>
							<Flex>
								{column.name}
								{column.name === 'Student name' && sortType === 'ASC' && <KeyboardArrowUp />}
								{column.name === 'Student name' && sortType !== 'ASC' && <KeyboardArrowDown />}
							</Flex>
						</TableCell>
					))}
				</TableRow>
			</TableHead>
		);
	}
);
