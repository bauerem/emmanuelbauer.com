import { Divider, useColorMode, Button, Image } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text, Link, Center } from '@chakra-ui/layout';
import React from 'react';
import portrait from '../assets/portrait.jpg';


function Introduction() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <Text fontSize="3vh" fontWeight="semibold">
        Hello and welcome! <br/> I am
      </Text>

      <Text fontSize="5vh" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Emmanuel Bauer.</Text>

      <Text color={isDark ? "gray.200" : "gray.500"}>
        I am a Mathematics MSc student at ETH Zürich focusing on machine learning. <br />
        More specifically, I am interested in reinforcement learning and deep learning applied to natural language processing and computer vision.
      </Text>
    </Box>
  )
}

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
        <Flex direction={isNotSmallerScreen ? "row" : "column-reverse"}
              maxWidth={isNotSmallerScreen ? "50%" : ""}
              alignSelf="center"
              >
            <Introduction />
            {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle> */}
            <Image alignSelf="center"
                    mb={isNotSmallerScreen ? "0" : "5"}
                    borderRadius="full"
                    boxSize="300px" src={portrait}/>

        </Flex>
  )
}

export default Header
