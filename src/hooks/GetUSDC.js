import { useContract, useProvider,useSigner } from 'wagmi'
import USDCABI from '../contracts/ABIs/USDCABI.json'

function GetUSDC() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: '0xE923CD10386C0e196fb9EcA75F2A3994d46794b1',
    contractInterface: USDCABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetUSDC;

