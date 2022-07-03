import logo from './logo.svg';
import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Borrow from './components/Borrow';
import Vault from './components/Vault';
import GetAccount from './hooks/GetAccount';
import GetUSDC from './hooks/GetUSDC';

function App() {

  const usdc = GetUSDC();

  const showBal=async()=>{
    const bal = await usdc.balanceOf('0x6549a235e999ed06d2bd8d6f6382176ce3c3f17d');
    console.log(bal.toString())
  }

  showBal();

  return (
    <div className='flex flex-col pt-[5%] items-center w-[100vw] h-[100vh] bg-gradient-to-b from-[#1a0636] to-[#060424] ' >
      <Tabs variant={'solid-rounded'} colorScheme='purple' width={"40%"}align={'center'} >
        <TabList>
          <Tab>Borrow</Tab>
          <Tab>Vault</Tab>
          <Tab>Swap</Tab>
          <Tab>Portfolio</Tab>
        </TabList>
        <TabPanels  >
          <TabPanel>
            <Borrow/>
          </TabPanel>
          <TabPanel>
            <Vault/>
          </TabPanel>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
