import { type NextPage } from 'next';
import { useLazyMethodApilayer1Query, useMethodApilayer2Query } from '../store/converter';
import {useRef, useState} from 'react'
const Home: NextPage = () => {
    const fromCurInput = useRef<HTMLSelectElement | null>(null);
    const toCurInput = useRef<HTMLSelectElement | null>(null);
    const amountCurInput = useRef<HTMLInputElement | null>(null);
    
    const [fromCur, setFromCur] = useState<string>('');
    const [toCur, setToCur] = useState<string>('');
    const [amountCur, setAmountCur] = useState<string>('');

    const [ trigger,
        {
            data,
            isLoading,
            isFetching,
        }
    ] = useLazyMethodApilayer1Query();

    const {
        data:list,
        isFetching:isFetchingList,
        isLoading:isLoadingList,
    } = useMethodApilayer2Query(null);

    const classButton = (condition: boolean | undefined, condition2: boolean | undefined) => {
		const errorClass = condition || condition2 
			? `bg-gray-600 hover:bg-gray-500 focus:ring-gray-300`
			: `bg-blue-600 hover:bg-blue-500 focus:ring-blue-300`;
		return `mx-auto block transform rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-40 flex text-white transition-colors px-4 py-2 ${errorClass}`;
	};

    const onHancleClick = (e:React.MouseEvent) => {
        e.preventDefault();
        typeof fromCurInput.current?.value === 'string' && setFromCur(()=> fromCurInput.current?.value as string)
        typeof toCurInput.current?.value === 'string' && setToCur(()=> toCurInput.current?.value as string)
        // async () => {
        //     await  
        // }
        // due api request limit
        if (fromCur.length > 1 && toCur.length > 1 && amountCur.length > 1) {
            void trigger({toCur,fromCur,amountCur});
        }
    }

    const onHancleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
         e.target.value.match(/^[0-9\b]+$/) && setAmountCur(() => e.target.value);
    }

	return (
        <section>
            <div className='container'>
                <div className='max-w-lg 2md:w-full rounded-xl bg-white p-4 shadow-xl mx-auto -translate-1/2 flex justify-center items-center flex-col gap-5'>
                <p className='text-black text-center w-full p-1 mx-auto'>Currency Converter</p>
                    <div className='flex justify-center items-center gap-5 w-full flex-col'>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] after:absolute after:h-1/2 after:bg-[#dadce0] after:left-[60%] after:w-[1px] before:absolute before:h-1/2 before:bg-[#dadce0] before:left-[30%] before:w-[1px] w-full px-3'>
                            <div className='w-[30%] text-black px-3'>From</div>
                            <input type='text' className='bg-white overflow-hidden px-3 text-base text-black outline-none w-[30%]' placeholder='0' value={amountCur} onChange={(e)=>onHancleChange(e)} ref={amountCurInput}/>
                            <select name='from' id='from' className='w-[40%] outline-none text-black px-3 cursor-pointer' onChange={(e) => setFromCur(()=> e.target.value)} ref={fromCurInput}>
                                {isLoadingList || isFetchingList ? null : 
                                       list && Object.entries(list.currencies).map((item, i) => {
                                            return (
                                                <option key={i} value={item[0]} className='w-full'>{item[0]}</option>
                                            );
                                       }) 
                                }
                            </select>
                        </div>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] after:absolute after:h-1/2 after:bg-[#dadce0] after:left-[60%] after:w-[1px] before:absolute before:h-1/2 before:bg-[#dadce0] before:left-[30%] before:w-[1px] w-full px-3'>
                            <div className='w-[30%] text-black px-3'>To</div>
                            <input type='number' className='bg-white overflow-hidden px-3 text-base text-black outline-none w-[30%] cursor-default' placeholder='0' value={isLoading || isFetching ? '' : data && data?.result ? data?.result : ''} readOnly/>
                            <select name='from' id='from' className='w-[40%] outline-none text-black px-3 cursor-pointer' onChange={(e) => setToCur(()=> e.target.value)} ref={toCurInput}>
                                {
                                    list && Object.entries(list.currencies).map((item, i) => {
                                    return (
                                        <option key={i} value={item[0]} className='w-full'>{item[0]}</option>
                                    );
                                    }) 
                                }
                            </select>
                        </div>
                    </div>
                    <button className={classButton(isLoading, isFetching)}
                    disabled={isLoading || isFetching ? true : false}
                    onClick={(e) => onHancleClick(e)}
                    >
                        Convert
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Home;




