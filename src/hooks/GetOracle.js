import { useContract, useProvider,useSigner } from 'wagmi'
import OracleABI from '../contracts/ABIs/OracleABI.json';

function GetOracle() {
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: '0x6c8bC30fD6F2Ca2a9B79Df63dd0a31eE0823ffc8',
    contractInterface: OracleABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetOracle;

