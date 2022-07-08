import { Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GetLoanDetails from '../hooks/GetLoanDetails';

 const MaticProtfolio = () => {

    const loans = GetLoanDetails();

    const BigNumber = require('bignumber.js');

    useEffect(()=>{
        getDetails();
    })

    const[lockedasset,setLockedasset]=useState(0);
    const[principal,setPrincipal]=useState(0);
    const[interest,setInterest]=useState('');
    const[duration,setDuration]=useState(0);

    const getDetails = async()=>{
        var data = await loans.getLoan(1);
        var asset = await loans.getLockedAsset(1);
        asset = asset.toString();
        setLockedasset(asset);
        var borrowamt = new BigNumber(`${data.borrowamt}`).shiftedBy(-18).toString().slice(0,6);
        setPrincipal(borrowamt)
    }

    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[#1a0636] p-[15px] mt-5  rounded-2xl text-white ' >
            <label className='text-white font-bold text-left ' >MATIC-USDC Loans</label>
            <Divider/>
            <div className='flex flex-row mt-3 justify-between' >
                <label>Locked Asset : {lockedasset} MATIC</label>
                <label>Principal : {principal} MATIC</label>
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