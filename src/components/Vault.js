import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Maticborrow from '../onchain/Maticborrow';
import Wethborrow from '../onchain/Wethborrow';
import MaticVault from '../onchain/MaticVault';
import UsdcVault from '../onchain/UsdcVault';

const Vault = () => {
    return ( 
        <div className=' flex flex-col justify-center w-[100%] h-[100%] bg-[#050229] rounded-3xl p-[20px] ' >
            <p className='text-white font-bold mb-6 ' >Present Vaults</p>
            <MaticVault/>
            <UsdcVault/>
        </div>
     );
}
 
export default Vault;