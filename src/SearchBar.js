import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Menu>
      <MenuButton as={Button}>
        Actions
      </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
    </MenuList>
  </Menu>
  );
};

export default SearchBar;