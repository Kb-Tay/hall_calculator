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
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import { useState, useEffect } from 'react'

const DPForm = ({newItem, setNewItem, handleSubmit, addItem}) => {

  const data = [
    {item: 'Logistics', points: 10, extrapoints: 15},
    {item: 'Publicity' , points: 10, extrapoints: 16 },
    {item: 'Marketing', points: 10, extrapoints: 5},
    {item: 'Fundraising', points: 10, extrapoints: 5},
    {item: 'Sets', points: 12, extrapoints: 5},
    {item: 'Lights', points: 8, extrapoints: 4},
    {item: 'Sounds', points: 6, extrapoints: 6},
  ]

  const [name, setName] = useState('')
  const [point, setPoint] = useState(0)
  const [leader, setLeader] = useState(false)

  useEffect(() => {
    if(name !== '') {
      const val = assignPoints(name)
      setPoint(val)
    } 
  }, [leader])

  useEffect(() => {
    setNewItem({item: name, points: point})
  }, [name, point])

  console.log(leader)
  console.log(newItem)

  const assignPoints = (value) => {
    for (let i = 0; i < data.length; i++ ) {
      if(data[i].item === value && !leader) {
        console.log('hi')
        return data[i].points
      } 
      if (data[i].item === value && leader) {
        console.log('bye')
        return data[i].extrapoints
      }
    }
  }

  const handleSelect = (event) => {
    const obj = event.target.value
    const obj_point = assignPoints(obj)
    setName(obj)
    setPoint(obj_point)
  } 

  const onClickHandler = (event) => {
    setLeader(event.target.value)
  }

  const handlenewSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
  }

  return (
    <form onSubmit={handlenewSubmit}>
    <FormControl>
      <FormLabel>Dance Production</FormLabel>
      <HStack>
        <Select placeholder='Select role' onChange={handleSelect}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        <FormLabel>Role:</FormLabel>
        <Select onChange={onClickHandler}>
          <option value={false} default>Member</option>
          <option value={true} >Head</option>
        </Select>
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

export default DPForm