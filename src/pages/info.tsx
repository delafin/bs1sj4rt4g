import { type NextPage } from 'next';
import { useMethodName1Query } from '../store/currency';
import {useState} from 'react';
const Info: NextPage = () => {
    const [currency, setCurrency] = useState();

        const {
                data,
                isFetching,
                isLoading,
                isSuccess,
                isError,
                error,
            } = useMethodName1Query(null);

	return (
        <section className='py-10'>
                <div className='container'>
                    <div className='max-w-lg 2md:w-full rounded-xl bg-white p-4 shadow-xl mx-auto -translate-1/2 flex justify-center items-center flex-col gap-5'>
                    <p className='text-black text-center w-full p-1 mx-auto'>Currency Info</p>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] w-full px-3'>
                                <select name='from' id='from' className='w-full outline-none text-black px-3' defaultValue='UAH'>
                                <option value='UAH' className='w-full'>UAH</option>
                                {isLoading || isFetching ? null : 
                                    data && data.map((item, i) => {
                                        return (
                                                <option key={i} value={item.cc} className='w-full'>{item.cc}</option>
                                            );
                                    })
                                }
                                </select>
                        </div>
                        {isLoading || isFetching ? <h1>Loading...</h1> :
                        <table className='w-full'>
                                <thead>
                                        <tr>
                                                <th scope='col' className='text-black w-1/2'>Currency</th>
                                                <th scope='col' className='text-black w-1/2'>Rate</th>
                                        </tr>
                                </thead>   
                                <tbody>
                                        { 
                                           data && data.map((item, i) => {
                                            return (
                                                    <tr key={i}>
                                                            <td scope="col" className='border-y-[1px] border-[rgb(204, 204, 204)] text-black text-center'>{item.cc}</td>
                                                            <td scope="col" className='border-y-[1px] border-[rgb(204, 204, 204)] text-black text-center'>{item.rate}</td>
                                                    </tr>  
                                            );
                                            })
                                        
                                        }
       
                                </tbody> 
                        </table>      
                }

                               
                    </div>
                </div>
        </section>
        );
};

export default Info;
