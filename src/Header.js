import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const Header = ({ title }) => {
  return (
    <Flex w="100%" px={6} py={5} align="center">
      <Heading size="xl" mx="auto">
        {title}
      </Heading>
    </Flex>
  )
}

Header.defaultProps = {
  title: 'Default Title',
}

export default Header
