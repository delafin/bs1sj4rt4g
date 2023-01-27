import { type NextPage } from 'next';

const Home: NextPage = () => {
	return (
        <section className=''>
            <div className='container'>
                <div className='max-w-lg 2md:w-full rounded-xl bg-white p-4 shadow-xl mx-auto -translate-1/2 flex justify-center items-center flex-col gap-5'>
                <p className='text-black text-center w-full p-1 mx-auto'>Currency Converter</p>
                    <div className='flex justify-center items-center gap-5 w-full flex-col'>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] after:absolute after:h-1/2 after:bg-[#dadce0] after:left-[30%] after:w-[1px] w-full px-3'>
                            <input type='number' className='bg-white overflow-hidden px-3 text-base text-black outline-none w-[30%]' placeholder='1'/>
                            <select name='from' id='from' className='w-[70%] outline-none text-black px-3'>
                                <option selected value='1' className='w-full'>UAH</option>
                                <option value='2' className='w-full'>EUR</option>
                                <option value='3' className='w-full'>USD</option>
                            </select>
                        </div>
                        <div className='relative flex justify-center items-center rounded-md caret-[#1a73e8] border-[#dadce0]  transition-all h-10 border-[1px] focus-within:border-[#1a73e8] after:absolute after:h-1/2 after:bg-[#dadce0] after:left-[30%] after:w-[1px] w-full px-3'>
                            <input type='number' className='bg-white overflow-hidden px-3 text-base text-black outline-none w-[30%]' placeholder='1'/>
                            <select name='from' id='from' className='w-[70%] outline-none text-black px-3'>
                                <option value='1' className='w-full'>UAH</option>
                                <option selected value='2' className='w-full'>EUR</option>
                                <option value='3' className='w-full'>USD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;
