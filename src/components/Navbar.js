import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row justify-between w-[100vw] h-[fit-content] p-2 bg-[#1a0636] ' >
            <div className='flex flex-row' >
            <img src='https://svgshare.com/i/iiW.svg' className='w-[20px]' />
            <label className='font-bold text-white text-2xl ml-2 mt-1'>CERO</label>
            </div>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;