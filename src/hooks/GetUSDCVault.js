import { useContract, useSigner } from 'wagmi'
import { USDC_VAULT } from '../components/constants';
import USDCVaultABI from '../contracts/ABIs/USDCVaultABI.json'

function GetUSDCVault() {
  const { data: signer, isError, isLoading } = useSigner();

  const contract = useContract({
    addressOrName: USDC_VAULT,
    contractInterface: USDCVaultABI,
    signerOrProvider: signer,
  })

  return contract
}

export default GetUSDCVault