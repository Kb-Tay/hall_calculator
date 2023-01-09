import React, { useState } from 'react'
import { Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const SearchBar = ({ cat, setCat }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Box mt={10}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? 'Close' : 'Select CCA'}
            </MenuButton>
            <MenuList>
              <MenuItem value={'dp'} onClick={(e) => setCat(e.target.value)}>
                Dance Production
              </MenuItem>
              <MenuItem value={'sports'} onClick={(e) => setCat(e.target.value)}>
                Sports
              </MenuItem>
              <MenuItem value={'ss'} onClick={(e) => setCat(e.target.value)}>
                Social Service / Other Comms
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}

export default SearchBar
