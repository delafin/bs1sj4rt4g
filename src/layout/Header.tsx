import { type NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
// import UserList from './UserList';
// import {useLazyMethodName1Query } from '../store/variableApi';
type TChildren = {
	children?: React.ReactNode;
};

const Header: NextPage<TChildren> = ({children}) => {

	const [loading, setLoading] = useState<boolean>(false);
	
	// const [ trigger,
	// 		{
	// 		isLoading,
	// 		isFetching,
	// 		isError,
	// 		data,
	// 		error 
	// 		}
	// ] = useLazyMethodName1Query();

	const classButton = (condition: boolean | undefined, condition2: boolean | undefined) => {
		const errorClass = condition || condition2 
			? `bg-gray-600 hover:bg-gray-500 focus:ring-gray-300`
			: `bg-blue-600 hover:bg-blue-500 focus:ring-blue-300`;
		return `mx-auto block transform rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-40 flex ${errorClass}`;
	};

    const isLoading = false;
    const isFetching = false;
	return (
			<>
		<header className='py-10 flex justify-center items-center flex-col'>
			<div className='container'>
                <nav className='flex justify-center items-center gap-10 self-center'>
                    <button className={classButton(isLoading, isFetching)}
                    disabled={isLoading || isFetching ? true : false}
                    // onClick={() => onHancleClick()}
                    >
                        <Link href={`/`} className='text-white transition-colors px-4 py-2'>
                            Currency Converter
                        </Link>
                    </button>
                    <button className={classButton(isLoading, isFetching)}
                    disabled={isLoading || isFetching ? true : false}
                    // onClick={() => onHancleClick()}
                    >
                        <Link href={`/info`} className='text-white transition-colors px-4 py-2'>
                            Currency Info
                        </Link>
                    </button>
                </nav>
			</div>
			<div className='mt-5 h-1 w-full bg-blue-500'></div>
		</header>
		{children}
		</>
	);
};

export default Header;
