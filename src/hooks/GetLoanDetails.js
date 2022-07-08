import React from 'react';
import { LOAN_DETAILS } from '../components/constants';
import LoanDetailsABI from '../contracts/ABIs/LoanDetailsABI.json'
import { useContract,useSigner } from 'wagmi';

function GetLoanDetails() {
    const { data: signer, isError, isLoading } = useSigner();
  
    const contract = useContract({
      addressOrName: LOAN_DETAILS,
      contractInterface: LoanDetailsABI,
      signerOrProvider: signer,
    })
  
    return contract
  }
  
  export default GetLoanDetails