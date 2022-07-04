import { useContract, useProvider,useSigner } from 'wagmi'
import WMATICABI from '../contracts/ABIs/WMATICABI.json'

function GetWMATIC() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: '0xaa2ABC23B36E906cE603C6d19A88F0873A701b87',
    contractInterface: WMATICABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetWMATIC;

