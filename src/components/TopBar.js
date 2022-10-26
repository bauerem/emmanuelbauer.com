import { Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";

import { FaSun, FaMoon } from 'react-icons/fa'

function TopBar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%" p="2">
      <Spacer></Spacer>
      { /* <IconButton ml={2} icon={<FaLinkedin />} isRound="true" /> */}
      { /* <IconButton ml={2} icon={<FaInstagram />} isRound="true" /> */}
      { /* <IconButton ml={2} icon={<FaGithub />} isRound="true" /> */}
      <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon />} isRound='true' onClick={toggleColorMode}/>
    </Flex>
  )
}

export default TopBar;
