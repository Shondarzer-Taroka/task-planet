
import gift from '../../../src/assets/icons/gift-box_15330193.png'

import { MdCurrencyRupee } from "react-icons/md";
import anouncement from '../../../src/assets/icons/announcement_4175664.png'
const NavBar = () => {
    return (
        <section>

            <aside className='flex gap-3 items-center justify-between'>
                <div id='home'>
                    <p className='font-bold'>Home</p>
                </div>

                <div className='flex gap-3 items-center'>
                    <button className=' h-max hover:bg-[#e2f4e5] font-semibold border px-2 py-1 flex items-center gap-2 rounded-3xl text-red-500'> <img src={gift} alt="" /> 2982</button>
                    <button className=' h-max hover:bg-[#e4f2e6] hover:text-[#80fd95e4] font-semibold border px-2 py-1 flex items-center gap-1 rounded-3xl text-red-500'> <MdCurrencyRupee /> 2982.00</button>
                    <button className=' h-max hover:bg-[#e2f4e5] font-semibold border px-4 py-1 flex items-center rounded-3xl text-red-500'> <MdCurrencyRupee />  100</button>
                    <div className='w-[50px]'>
                        <img className='w-[100%]' src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png" alt="" />
                    </div>
                </div>
            </aside>


            <div className='bg-[#fea502] text-white flex h-12 items-center'> <p className='text-xl font-semibold flex items-center justify-around gap-3'> <img src={anouncement} alt="" /> Taskplanet.Get 10 Points on every referral</p> </div>
        </section>
    );
};

export default NavBar;