import { NextPage } from 'next';
import Head from 'next/head';
import { StudentsTable } from '@/Components/StudentsTable';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Students table</title>
				<link
					rel="shortcut icon"
					href="/table.svg"
				/>
			</Head>
			<StudentsTable />
		</>
	);
};

export default Home;
