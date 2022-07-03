import { useContract, useSigner } from 'wagmi'
import USDCVaultABI from '../contracts/ABIs/USDCVaultABI.json'

function GetUSDCVault() {
  const { data: signer, isError, isLoading } = useSigner();

  const contract = useContract({
    addressOrName: '0x3F84668d2AF41D150546f5cd5bd3f8f1DE88669E',
    contractInterface: USDCVaultABI,
    signerOrProvider: signer,
  })

  return contract
}

export default GetUSDCVault