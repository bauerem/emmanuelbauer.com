import Icon from '@chakra-ui/icon';

import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';

import { DiAndroid, DiCodeigniter, DiWebplatform } from 'react-icons/di';

function AppSquare({ icon , text }) {
  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
      <Icon color="white" p="4" as={icon} fontSize="100"/>
      <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  )
}

function Profile() {

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (

      <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl:"130vh"}}>

        <Box>
          {/*<Text fontWeight="bold" fontSize="2xl">Product Designer and Developer, specialised in mobile app development.</Text>*/}
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <AppSquare icon={DiAndroid} text="Android Apps" />
            <AppSquare icon={DiCodeigniter} text="Flutter Apps" />
            <AppSquare icon={DiWebplatform} text="Android Apps" />
          </Flex>
        </Box>

      </Flex>

  )
}

export default Profile


/*

function XPBox() {
  return (
    <Box alignSelf="center" px="32">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
    </Box>
  )
}

*/
