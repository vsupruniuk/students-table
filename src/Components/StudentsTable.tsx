import React, { useCallback, useEffect, useState } from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Paper, Table, TableContainer } from '@mui/material';
import { StudentsTableHead } from '@/Components/StudentsTableHead';
import { StudentsTableBody } from '@/Components/StudentsTableBody';
import { StudentsTableFooter } from '@/Components/StudentsTableFooter';
import studenstFromJSON from '../students.json';

const columns = [
	{ name: 'Student name', key: 'studentName' },
	{ name: 'Course name', key: 'courseName' },
	{ name: 'Lesson name', key: 'lessonName' },
	{ name: 'Progress', key: 'progress' }
];

export const StudentsTable: React.FC = React.memo(() => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [students, setStudents] = useState(studenstFromJSON);
	const [sortType, setSortType] = useState<'ASC' | 'DESC' | null>(null);

	useEffect(() => {
		if (sortType === 'ASC') {
			const sortedStudents = students.sort((firstStudent, secondStudent) => {
				return secondStudent.studentName.localeCompare(firstStudent.studentName);
			});

			setStudents(sortedStudents);
			setPage(0);
		} else if (sortType === 'DESC') {
			const sortedStudents = students.sort((firstStudent, secondStudent) => {
				return firstStudent.studentName.localeCompare(secondStudent.studentName);
			});

			setStudents(sortedStudents);
			setPage(0);
		}
	}, [sortType]);

	const handlePageChange = useCallback(
		(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
			setPage(newPage);
		},
		[page]
	);

	const handleChangeRowsPerPage = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setRowsPerPage(parseInt(event.target.value, 10));
			setPage(0);
		},
		[rowsPerPage, page]
	);

	return (
		<SSRProvider>
			<Provider theme={defaultTheme}>
				<TableContainer component={Paper}>
					<Table>
						<StudentsTableHead
							columns={columns}
							sortType={sortType}
							setSortType={setSortType}
						/>
						<StudentsTableBody
							rows={students}
							page={page}
							rowsPerPage={rowsPerPage}
						/>
						<StudentsTableFooter
							page={page}
							rowsPerPage={rowsPerPage}
							rowsLength={students.length}
							handlePageChange={handlePageChange}
							handleChangeRowsPerPage={handleChangeRowsPerPage}
						/>
					</Table>
				</TableContainer>
			</Provider>
		</SSRProvider>
	);
});
