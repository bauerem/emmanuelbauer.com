import { Box, Flex, Link, Text, Image } from '@chakra-ui/react'

import portrait from './assets/portrait.jpg'

function TopBar() {
  return (
    <Flex color="#E3DCD2" height="5vh" justifyContent="space-between" flexDir="row" backgroundColor="#100C0D">
      <h1>Object 1</h1>
      <Flex >
        <Flex>About</Flex>
        <Flex>Thing 1</Flex>
      </Flex>
    </Flex>
  )
}

function LeftSideBar() {
  return (
    <Flex color="#E3DCD2" zIndex="1" pos="fixed" height="95vh" width="20vh" flexDir="column" justifyContent="space-between" backgroundColor="#100C0D">
      <Flex >Object 1</Flex>
      <Flex >Object 2</Flex>
    </Flex>
  )
}

function PageContent() {
  return (
    <Flex color="#E3DCD2" pos="absolute" height="100%" width="100%" flexDir="column" backgroundColor="#013328">
      <Flex fontSize="55"  flexDir="column" alignItems="center" justifyContent="center" minHeight="93vh">
        <Box width="45%">
          <Text color="#CC8B65" fontSize="40">
            Hi there, my name is
          </Text>
          <Text fontSize="75">
            Emmanuel Achille
          </Text>
          <Text color="#CC8B65" fontSize="45">
            I am a Mathematics MSc student that the <Link href="https://ethz.ch">Swiss Federal Institute of Technology Zurich </Link>
            focusing on machine learning. I am especially interested in reinforcement learning and deep learning applied to
            natural language processing and computer vision.
          </Text>
          <Image src={portrait}/>
        </Box>
      </Flex>
    </Flex>
  )
}

function App() {
  return (
    <Box height="200vh" fontSize="65">
      <TopBar />
      <Flex height="100%">
        <LeftSideBar />
        <PageContent />
      </Flex>
    </Box>
  );
}

export default App;


/*

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
