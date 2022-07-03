import logo from './logo.svg';
import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Borrow from './components/Borrow';
import Vault from './components/Vault';
import GetAccount from './hooks/GetAccount';

function App() {
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
