import { type NextPage } from 'next';

const Info: NextPage = () => {
	return (
        <section className=''>
                <div className='container'>
                    <div className='max-w-lg 2md:w-full rounded-xl bg-white p-4 shadow-xl mx-auto -translate-1/2 flex justify-center items-center flex-col gap-5'>
                    <p className='text-black text-center w-full p-1 mx-auto'>Currency Info</p>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] w-full px-3'>
                                <select name='from' id='from' className='w-full outline-none text-black px-3'>
                                        <option selected value='1' className='w-full'>UAH</option>
                                        <option value='2' className='w-full'>EUR</option>
                                        <option value='3' className='w-full'>USD</option>
                                </select>
                        </div>
                        {/* <div className='w-full px-5 flex justify-center items-center flex-col gap-5'>
                                <div className='flex justify-between items-center gap-5 border-[1px] rounded-md p-2 w-full'>
                                        <div className='text-black'>USD</div>
                                        <div className='text-black'>27</div>
                                </div>
                        </div> */}
                        <table className='w-full'>
                                <thead>
                                        <tr>
                                                <th scope='col' className='text-black w-1/2'>Currency</th>
                                                <th scope='col' className='text-black w-1/2'>Rate</th>
                                        </tr>
                                </thead>   
                                <tbody>
                                        <tr>
                                                <td scope="col" className='border-y-[1px] border-[rgb(204, 204, 204)] text-black text-center'>USD</td>
                                                <td scope="col" className='border-y-[1px] border-[rgb(204, 204, 204)] text-black text-center'>27</td>
                                        </tr>         
                                </tbody> 
                        </table>            
                    </div>
                </div>
        </section>
        );
};

export default Info;
