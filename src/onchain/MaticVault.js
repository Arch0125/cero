import { Divider, Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GetUSDCVault from '../hooks/GetMATICVault';
import GetWMATIC from '../hooks/GetWMATIC';
import { decimals } from '../components/constants';

const MaticVault = () => {

    const wmatic = GetWMATIC();
    const wmaticvault=GetUSDCVault();
    const[totalSupply,setTotalSupply]=useState('');
    const[tvl,setTvl]=useState(0);

    useEffect(()=>{
        getBalance();
    })

    const getBalance=async()=>{
        var tSupply = await wmaticvault.totalSupply();
        tSupply = (tSupply/decimals).toString();
        setTotalSupply(tSupply);
        setTvl(tSupply*0.45)
    }


    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[rgb(26,6,54)] p-[15px] rounded-2xl ' >
            <div className='flex flex-row justify-between px-2' >
                <label className='text-white font-bold ' >MATIC Vault</label>
                <label className='text-white font-bold ' >TVL : $ {tvl}</label>
            </div>
            <div className='flex flex-row justify-between px-2 mt-2 mb-3' >
                <label className='text-white  ' >Total Supply : {totalSupply} MATIC</label>
                
            </div>
            <Divider/>
            <label className='text-white  ' >Your Locked Assets : </label>
        </div>
     );
}
 
export default MaticVault;