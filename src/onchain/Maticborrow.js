import React, { useEffect, useState } from 'react';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { decimals } from '../components/constants';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Divider,
    Button
  } from '@chakra-ui/react'
  import { InfoOutlineIcon } from '@chakra-ui/icons';
import GetUSDC from '../hooks/GetUSDC';
import GetUSDCVault from '../hooks/GetUSDCVault';
import GetOracle from '../hooks/GetOracle';
import GetLoanDetails from '../hooks/GetLoanDetails';

const Maticborrow = () => {

    const BigNumber = require('bignumber.js');

    useEffect(()=>{
        setColl(borrow*ratio/100);
        setRepay(borrow-coll);
        getOracle();
        checkLoan();
    })

    const usdc = GetUSDC();
    const usdcvault = GetUSDCVault();
    const oracle = GetOracle();
    const loans= GetLoanDetails();

    const[matic,setMatic]=useState(0);
    const[borrow,setBorrow]=useState(0);
    const[ratio,setRatio]=useState(50);
    const[apr,setApr]=useState(0.45);
    const[coll,setColl]=useState(0);
    const[repay,setRepay]=useState(0);
    const[currentprice,setCurrentprice]=useState(0);
    const[loan,setLoan]=useState(true);

    const depositTo=async(deposit)=>{
        await usdc.approve('0x3F84668d2AF41D150546f5cd5bd3f8f1DE88669E',(100*decimals).toString())
        await usdcvault.deposit((deposit*decimals).toString()).then(console.log);
    }

    const checkLoan=async()=>{
        var data = await loans.getLoan(1);
        if((data.status === true)||(data.apr === '')){
            setLoan(true);
        }else{
            setLoan(false);
        }
    }

    const getOracle=async()=>{
        var big = new BigNumber(1).shiftedBy(18).toString();
        var res = await oracle.estimateAmountOut('0xaa2ABC23B36E906cE603C6d19A88F0873A701b87',big,10);
        let x = new BigNumber(`${res}`).shiftedBy(-18).toFixed(5);
        setCurrentprice(x);
    }

    const createloan=async()=>{
        var bigborrow = new BigNumber(borrow).shiftedBy(18).toString();
        var bigvault = new BigNumber(1).toString();
        console.log(apr);
        var bigdate = new BigNumber(Date.now() / 1000 | 0).toString();
        var bigmatic = new BigNumber(matic).toString();
        await loans.createLoan(bigborrow,1,apr.toString(),matic,Date.now() / 1000 | 0).then(console.log);
    }

    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[#1a0636] p-[15px] rounded-2xl ' >
            <p className='font-thin text-gray-400 '   >Borrow USDC to buy MATIC</p>
            <InputGroup>
            <InputLeftElement pr={"2"} ><img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' className='w-[25px] mt-[40px] ml-3 ' /></InputLeftElement>
            <Input onChange={e=>{setMatic(e.target.value);setBorrow(e.target.value * currentprice)}} placeholder='0.0' color={"gray.600"} mt={'5'} borderColor={'purple.900'} rounded={'2xl'} />
            </InputGroup>
            <div className='flex flex-row w-[100%] justify-between px-2 font-light mt-2 text-gray-500' >
                <label>Current Price : {currentprice} USDC</label>
                <label>Borrow Amount : {borrow}</label>
            </div>
            <p className='font-thin text-gray-400 mt-2 '>Adjust Collateral</p>
            <Slider defaultValue={50} min={0} max={100} step={5} mt={2} onChange={(val)=>{setRatio(val);setApr(25/(val+5))}}  >
            <SliderTrack bg='purple.800'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='purple.400' />
            </SliderTrack>
            <SliderThumb boxSize={3} />
            </Slider>
            <div className='flex flex-row w-[100%] justify-between px-2 font-light mt-2 text-gray-500' >
                <label>Collateral : {ratio} %</label>
                <label>APR : {(apr).toString().substring(0,4)} %</label>
            </div>
            <div className='flex flex-row w-[100%] mt-4 text-gray-500' >
                <div className='flex flex-col w-[50%]' >
                    <p>Collateral</p>
                    <p  className='font-thin'>{coll} USDC</p>
                </div>
                <div className='flex flex-col w-[50%]' >
                    <p>Borrow</p>
                    <p className='font-thin'>{repay} USDC</p>
                </div>
            </div>
            {
                (loan === true)?<Button mt={5} variant={'solid'} bgColor={'purple.900'} textColor={'white'} onClick={()=>createloan()} className='hover:bg-purple-800'>Confirm Transaction</Button>
                :<Button mt={5} variant={'solid'} bgColor={'purple.900'} textColor={'white'} className='hover:bg-purple-800' >Repay before taking another loan</Button>

            }
            <Divider mt={3} />
            <label className= ' font-light text-gray-500 text-[15px] mt-2' ><InfoOutlineIcon w={3} mr={2} color={'gray.500'} />Lower the collateral, higher the APR</label>
        </div>
     );
}
 
export default Maticborrow;