import React from 'react';
import MaticProtfolio from '../onchain/MaticPortfolio';
import WethProtfolio from '../onchain/WethPortfolio';

const Portfolio = () => {
    return ( 
        <div className=' flex flex-col justify-center w-[100%] h-[100%] bg-[#050229] rounded-3xl p-[20px] ' >
            <label className='font-bold text-white' >My Portfolio</label>
            <MaticProtfolio/>
            <WethProtfolio/>
        </div>
     );
}
 
export default Portfolio;