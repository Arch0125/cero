import { Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';
 const MaticProtfolio = () => {
    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[#1a0636] p-[15px] mt-5  rounded-2xl text-white ' >
            <label className='text-white font-bold text-left ' >MATIC-USDC Loans</label>
            <Divider/>
            <div className='flex flex-row mt-3 justify-between' >
                <label>Locked Asset : </label>
                <label>Principal : </label>
            </div>
            <div className='flex flex-row mt-3 justify-between' >
                <label>Interest : </label>
                <label>Duration : </label>
            </div>
            <Divider/>
            <Button variant={"solid"} colorScheme={'purple'} mt={'3'} bgColor={"#050229"} >Repay and Unlock MATIC</Button>
        </div>

     );
 }
  
 export default MaticProtfolio;