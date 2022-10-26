import { Divider, useColorMode, Button, Image } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { HStack, Link, Center, Flex } from '@chakra-ui/layout';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { useMediaQuery } from '@chakra-ui/media-query';

function LinkedIcon({icon, link}) {
  return (
    <Link href={link}>
      <Icon as={icon} boxSize="50" />
    </Link>
  )
}

function Social() {
    const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");
    return (
      <Flex justifyContent="center" p="5vh">
        <HStack spacing={isNotSmallerScreen ? "24" : "12"}>
          <LinkedIcon icon={MdOutlineEmail} link={"mailto: bauerem@student.ethz.ch"}/>
          <LinkedIcon icon={FaGithub} link={"https://github.com/bauerem/"}/>
        </HStack>
      </Flex>
    )
}

export default Social


{/*
  function ContactButton(email) {
    return (
      <Center p={5}>
        <Link href={"mailto: " + email}>
          <Button mt={8}
                  colorScheme="blue">
            Contact me
          </Button>
        </Link>
      </Center>
    )
  }
*/}
