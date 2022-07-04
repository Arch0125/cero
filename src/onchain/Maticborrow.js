import React, { useState } from 'react';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
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

const Maticborrow = () => {

    const[matic,setMatic]=useState(0);
    const[borrow,setBorrow]=useState(0);
    const[ratio,setRatio]=useState(0);
    const[apr,setApr]=useState(0);
    const[coll,setColl]=useState(0);
    const[repay,setRepay]=useState(0);

    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[#1a0636] p-[15px] rounded-2xl ' >
            <p className='font-thin text-gray-400 '   >Borrow USDC to buy MATIC</p>
            <InputGroup>
            <InputLeftElement pr={"2"} ><img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' className='w-[25px] mt-[40px] ml-3 ' /></InputLeftElement>
            <Input onChange={e=>{setMatic(e.target.value);setBorrow(e.target.value * 0.45 * 1.03)}} placeholder='0.0' color={"gray.600"} mt={'5'} borderColor={'purple.900'} rounded={'2xl'} />
            </InputGroup>
            <div className='flex flex-row w-[100%] justify-between px-2 font-light mt-2 text-gray-500' >
                <label>Current Price : $0.45</label>
                <label>Borrow Amount : {borrow}</label>
            </div>
            <p className='font-thin text-gray-400 mt-2 '>Adjust Collateral</p>
            <Slider defaultValue={50} min={0} max={100} step={5} mt={2} onChange={(val)=>{setRatio(val);setApr(25/(val+5));setColl(borrow*(ratio/100));setRepay(borrow*(1-ratio/100))}} >
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
                    <p  className='font-thin'>${coll}</p>
                </div>
                <div className='flex flex-col w-[50%]' >
                    <p>Borrow</p>
                    <p className='font-thin'>${repay}</p>
                </div>
            </div>
            <Button mt={5} variant={'solid'} bgColor={'purple.900'} textColor={'white'} >Confirm Transaction</Button>
            <Divider mt={3} />
            <label className= ' font-light text-gray-500 text-[15px] mt-2' ><InfoOutlineIcon w={3} mr={2} color={'gray.500'} />Lower the collateral, higher the APR</label>
        </div>
     );
}
 
export default Maticborrow;