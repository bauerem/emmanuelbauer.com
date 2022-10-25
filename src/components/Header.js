import { Divider, useColorMode, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Image, Text } from '@chakra-ui/layout';
import React from 'react';

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
          <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
          <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
              <Box mt={isNotSmallerScreen ? "0" : 16}>
                <Text fontSize="3vh" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="5vh" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Bob.</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>PyTorch, React, Flask</Text>
              </Box>
              <Button mt={8}
                      colorScheme="blue"
                      onClick={()=>
                        window.open("https://emmanuelbauer.com")
                      }>
                Hire me
              </Button>
          </Flex>
        </Stack>
    )
}

export default Header
