import { useContract, useProvider,useSigner } from 'wagmi'
import USDCABI from '../contracts/ABIs/USDCABI.json'

function GetUSDC() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: '0xF74C572A86029553B9f90c90B9C2699b0dC51687',
    contractInterface: USDCABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetUSDC;

