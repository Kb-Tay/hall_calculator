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
import { useState } from 'react'

const DPForm = ({newItem, setNewItem, handleSubmit, handleChange}) => {
  const data = [
    {item: 'Logistics', points:'10'}

  ]

  const [CCA, setCCA] = useState([
    {item: '', points: ''}
  ])

  console.log(CCA)

  const assignPoints = (value) => {
    for (let i = 0; i <= data.length; i++ ) {
      if(data[i].item == value) {
        setCCA({item: value, points: data[i].points})
        console.log(CCA)
        setCCA({item: '', points: ''})
      }
    }
  }

  return (
    <FormControl>
      <FormLabel onSubmit={assignPoints}>Dance Production</FormLabel>
      <HStack>
        <Select placeholder='Select role'>
            <option value='Producers' onChange={e => e.target.value}>Producers</option>
            <option>Secretary/Treasurer</option>
            <option>Scriptwriter</option>
            <option>Production Manager</option>
            <option>Assistant Production Manager</option>
            <option>Dance/Drama Director</option>
            <option>Junior Dance/Drama Director</option>
            <option>Dance Coordinators</option>
            <option>Stage Manager</option>
            <option>Assistant Stage Manager</option>
            <option>Choreographers/Dancers</option>
            <option>Dance ICs</option>
            <option>Cast</option>
            <option value='Logistics' onChange={e => e.target.value}>Logistics</option>
            <option>Publicity</option>
            <option>Marketing</option>
            <option>Fundraising</option>
            <option>Sets</option>
            <option>Lights</option>
            <option>Sounds</option>
        </Select>
        <FormLabel>Select:</FormLabel>
        <RadioGroup defaultValue='Member'>
          <Stack direction='row'>
            <Radio value='Member'>Member</Radio>
            <Radio value='HEad'>Head</Radio>
          </Stack>
        </RadioGroup>
        <Button
            colorScheme='teal'
            type='submit'
          >
            Add
          </Button>
      </HStack>
    </FormControl>
  )
}

export default DPForm