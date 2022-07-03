import { Divider, Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react';
import React from 'react';

const UsdcVault = () => {
    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[rgb(26,6,54)] p-[15px] rounded-2xl mt-6 ' >
            <div className='flex flex-row justify-between px-2' >
                <label className='text-white font-bold ' >USDC Vault</label>
                <label className='text-white font-bold ' >TVL : </label>
            </div>
            <div className='flex flex-row justify-between px-2 mt-2 mb-3' >
                <label className='text-white  ' >Total Supply : </label>
                <label className='text-white  ' >Your Supply : </label>
            </div>
            <Divider/>
            <div className='flex flex-row justify-between px-2 mt-3 ' >
                <InputGroup>
                <InputLeftElement><img src='https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=022' className='w-[20px]' /></InputLeftElement>
                <Input className='text-gray-400' borderColor={'purple.900'}/>
                <InputRightAddon className='text-white cursor-pointer' bg={'purple.900'} border={'none'} >Deposit</InputRightAddon>
                </InputGroup>
            </div>
        </div>
     );
}
 
export default UsdcVault;