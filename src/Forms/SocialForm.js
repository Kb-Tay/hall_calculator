import { useState, useEffect } from 'react'
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Radio,
  RadioGroup,
  Stack,
  HStack,
  Button
} from '@chakra-ui/react'

const SocialForm = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(role)
  }, [role])
  
  const data = [
    {item: 'Eusoff Expeditions', points: role == 'exco' ? 17 : role == 'head' ? 19 : 12},
    {item: 'Green Committee', points: role == 'exco' ? 7 : role == 'head' ? 11 : 5},
    // {item: 'Elderly Services', points: 7},
    // {item: 'MINDS', points: 6},
    // {item: 'Salvation Army', points: 6}
  ]

  const roles = [
    {id: 1,
     name: 'member',
     value: 'member'},
    {id: 2, 
     name: 'exco'},
    {id: 3,
     name: 'head'},
  ]

  const handleRole = (e) => {
    console.log(e.target.value)
    setRole(e.target.value)
  }

  return (
    <form>
    <FormControl>
      <FormLabel>Social Services hello!</FormLabel>
      <HStack>
        <Select placeholder='Select Community'>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        <FormLabel>Role:</FormLabel>
        <RadioGroup onChange={handleRole}>
          <HStack>
            {roles.map((role) => (
              <Radio key={role.id} value={role.name}>{role.name}</Radio>
            ))}
          </HStack>
        </RadioGroup>
        <Button
            colorScheme='teal'
            type='submit'
          >
            Add
          </Button>
      </HStack>
    </FormControl>
    </form>
    
  )
}

export default SocialForm