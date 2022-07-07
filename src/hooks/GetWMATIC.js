import { useContract, useProvider,useSigner } from 'wagmi'
import { WMATIC_ADDR } from '../components/constants';
import WMATICABI from '../contracts/ABIs/WMATICABI.json'

function GetWMATIC() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: WMATIC_ADDR,
    contractInterface: WMATICABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetWMATIC;

