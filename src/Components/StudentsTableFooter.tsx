import React from 'react';
import { IconButton, TableFooter, TablePagination, TableRow } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { KeyboardArrowLeft } from '@mui/icons-material';

interface Props {
	rowsLength: number;
	page: number;
	rowsPerPage: number;
	handlePageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
	handleChangeRowsPerPage: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

interface TablePaginationActionsProps {
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const ActionsComponent: React.FC<TablePaginationActionsProps> = ({
	count,
	page,
	rowsPerPage,
	onPageChange
}) => {
	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page + 1);
	};

	return (
		<>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				<KeyboardArrowLeft />
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				<KeyboardArrowRight />
			</IconButton>
		</>
	);
};

export const StudentsTableFooter: React.FC<Props> = ({
	rowsLength,
	page,
	rowsPerPage,
	handlePageChange,
	handleChangeRowsPerPage
}) => {
	return (
		<TableFooter>
			<TableRow>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					count={rowsLength}
					page={page}
					rowsPerPage={rowsPerPage}
					onPageChange={handlePageChange}
					onRowsPerPageChange={handleChangeRowsPerPage}
					// @ts-ignore
					ActionsComponent={ActionsComponent}
				/>
			</TableRow>
		</TableFooter>
	);
};
