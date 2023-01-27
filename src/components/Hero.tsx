import { type NextPage } from 'next';
import { useState } from 'react';
import UserList from './UserList';
import {useLazyMethodName1Query } from '../store/variableApi';
type TChildren = {
	children?: React.ReactNode;
};

const Hero: NextPage<TChildren> = () => {

	const [loading, setLoading] = useState<boolean>(false);
	// const {
		// data: variableFrom = [], // variableFrom - any variable to rename `data`
		// isFetching,
		// isLoading,
		// isSuccess,
		// isError,
		// error,
		// refetch
	// } = useMethodName1Query({
	// 	manual: true,
	//   });

	// You're looking for the "lazy query" feature:

	// https://redux-toolkit.js.org/rtk-query/usage/queries

	// https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#uselazyquery

	// Alternately, you can use "conditional fetching" and control the query via state updates:

	// https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
	// Conditional fetching:
	// const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {
	// 	const { data, error, status } = useGetPokemonByNameQuery(name, {
	// 	  skip,
	// 	});
	
	const [ trigger,
			{
			isLoading,
			isFetching,
			isError,
			data,
			error 
			}
	] = useLazyMethodName1Query();

	const classButton = (condition: boolean | undefined, condition2: boolean | undefined) => {
		const errorClass = condition || condition2 
			? `bg-gray-600 hover:bg-gray-500 focus:ring-gray-300`
			: `bg-blue-600 hover:bg-blue-500 focus:ring-blue-300`;
		return `mx-auto block transform rounded-md px-4 py-2 text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errorClass}`;
	};

	const onHancleClick = () => {
      	// eslint-disable-next-line
		trigger(null);
	}

	return (
		<header className='py-10'>
			<div className='container'>
				<button className={classButton(isLoading, isFetching)}
				// disabled={loading ? true : false}
				disabled={isLoading || isFetching ? true : false}
				onClick={() => onHancleClick()}
				>
					Show Users
				</button>
			</div>
			<div className='mt-5 h-1 w-full bg-blue-500'></div>
			<div className='container'>
				<UserList isLoading={isLoading} isFetching={isFetching}  variableFrom={data} />
			</div>
		</header>
	);
};




export default Hero;
