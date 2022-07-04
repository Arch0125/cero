import { useContract, useSigner } from 'wagmi'
import USDCVaultABI from '../contracts/ABIs/USDCVaultABI.json'

function GetUSDCVault() {
  const { data: signer, isError, isLoading } = useSigner();

  const contract = useContract({
    addressOrName: '0x1371bB5c0F7cceAA80aDb528778930A11f17e365',
    contractInterface: USDCVaultABI,
    signerOrProvider: signer,
  })

  return contract
}

export default GetUSDCVault