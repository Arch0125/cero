import { Divider, Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GetAccount from '../hooks/GetAccount';
import GetUSDCVault from '../hooks/GetUSDCVault';
import { decimals } from '../components/constants';
import GetUSDC from '../hooks/GetUSDC'

const UsdcVault = () => {

    useEffect(()=>{
        getBalance();
    })

    const usdcvault = GetUSDCVault();
    const usdc =  GetUSDC();
    const[bal,setBal]=useState('');
    const[totalSupply,setTotalSupply]=useState('')
    const[deposit,setDeposit]=useState('');
    var addr = GetAccount();

    const depositTo=async(deposit)=>{
        await usdc.approve('0x3F84668d2AF41D150546f5cd5bd3f8f1DE88669E',(100*decimals).toString())
        await usdcvault.deposit((deposit*decimals).toString()).then(console.log);
    }

    const getBalance=async()=>{
        const bigno = await usdcvault.balanceOf(`${addr}`);
        var tSupply = await usdcvault.totalSupply();
        tSupply=tSupply.toString() /decimals;
        var res = bigno.toString();
        res = res/decimals;
        setBal(res);
        setTotalSupply(tSupply);
    }

    // getBalance();

    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[rgb(26,6,54)] p-[15px] rounded-2xl mt-6 ' >
            <div className='flex flex-row justify-between px-2' >
                <label className='text-white font-bold ' >USDC Vault</label>
                <label className='text-white font-bold ' >TVL : $ {totalSupply}</label>
            </div>
            <div className='flex flex-row justify-between px-2 mt-2 mb-3' >
                <label className='text-white  ' >Total Supply : {totalSupply} USDC</label>
                <label className='text-white  ' >Your Supply : {bal} USDC</label>
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