import { NextPage } from 'next';
import Head from 'next/head';
import { Table } from '@/Components/Table';

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
			<Table />
		</>
	);
};

export default Home;
