import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const SearchBar = ({cat, setCat}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };


  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
            {isOpen ? 'Close' : 'Select CCA'}
          </MenuButton>
          <MenuList>
            <MenuItem value={'dp'} onClick={e => setCat(e.target.value)}>Dance Production</MenuItem>
            <MenuItem value={'sport'} onClick={e => setCat(e.target.value)}>Sports</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SearchBar;