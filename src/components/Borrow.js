import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Maticborrow from '../onchain/Maticborrow';

const Borrow = () => {
    return ( 
        <div className=' flex flex-col justify-center w-[100%] h-[100%] bg-[#050229] rounded-3xl p-[20px] ' >
            <p className='text-white font-bold ' >Select Pool</p>
            <Tabs mt={"20px"} variant='solid-rounded'   width={"100%"}>
            <TabList  >
                <Tab _selected={{bg:"#1a0636"}} width={"50%"} ><img src='https://svgshare.com/i/iis.svg' width={"40px"} className='mr-3' />MATIC-USDC</Tab>
                <Tab _selected={{bg:"#1a0636"}} width={"50%"} ><img src='https://svgshare.com/i/iiV.svg' width={"40px"} className='mr-3' />WETH-USDC</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Maticborrow/>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </div>
     );
}
 
export default Borrow;