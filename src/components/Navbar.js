import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row justify-between w-[100vw] h-[fit-content] p-2 bg-[#1a0636] ' >
            <label className='font-bold text-white text-2xl ' >CERO</label>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;