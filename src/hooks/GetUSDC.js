import { useContract, useProvider,useSigner } from 'wagmi'
import { USDC_ADDR } from '../components/constants';
import USDCABI from '../contracts/ABIs/USDCABI.json'

function GetUSDC() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: USDC_ADDR,
    contractInterface: USDCABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetUSDC;

