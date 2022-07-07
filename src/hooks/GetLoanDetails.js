import React from 'react';
import LoanDetailsABI from '../contracts/ABIs/LoanDetailsABI.json'

function GetLoanDetails() {
    const { data: signer, isError, isLoading } = useSigner();
  
    const contract = useContract({
      addressOrName: '0x1371bB5c0F7cceAA80aDb528778930A11f17e365',
      contractInterface: LoanDetailsABI,
      signerOrProvider: signer,
    })
  
    return contract
  }
  
  export default GetLoanDetails