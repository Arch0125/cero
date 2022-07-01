import React, { useState } from 'react';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
  } from '@chakra-ui/react'

const Maticborrow = () => {

    const[ratio,setRatio]=useState(0);

    return ( 
        <div className=' flex flex-col w-[100%] h-[100%] bg-[#1a0636] p-[15px] rounded-2xl ' >
            <p className='font-thin text-gray-400 '   >Borrow USDC to buy MATIC</p>
            <InputGroup>
            <InputLeftElement pr={"2"} ><img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' className='w-[25px] mt-[40px] ml-3 ' /></InputLeftElement>
            <Input placeholder='0.0' color={"gray.600"} mt={'5'} rounded={'2xl'} />
            </InputGroup>
            <div className='flex flex-row w-[100%] justify-between px-2 font-light mt-2 text-gray-500' >
                <label>Current Price</label>
                <label>Borrow Amount</label>
            </div>
            <p className='font-thin text-gray-400 mt-2 '>Adjust Collateral</p>
            <Slider defaultValue={50} min={0} max={100} step={5} onChange={(val)=>setRatio(val)} >
            <SliderTrack bg='purple.400'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='purple.800' />
            </SliderTrack>
            <SliderThumb boxSize={3} />
            </Slider>
            <div className='flex flex-row w-[100%] justify-between px-2 font-light mt-2 text-gray-500' >
                <label>Collateral : {ratio}%</label>
                <label>APR : </label>
            </div>
            <div className='flex flex-row w-[100%] mt-4 text-gray-500' >
                <div className='flex flex-col w-[50%]' >
                    <p>Collateral</p>
                    <p  className='font-thin'>$0.0</p>
                </div>
                <div className='flex flex-col w-[50%]' >
                    <p>Borrow</p>
                    <p className='font-thin'>$0.0</p>
                </div>
            </div>
            <label className= ' font-thin text-gray-500 text-[15px] mt-5' >Lower the collateral, higher the APR</label>
        </div>
     );
}
 
export default Maticborrow;