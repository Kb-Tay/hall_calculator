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
import { useState, useEffect } from 'react'

const DPForm = ({newItem, setNewItem, addItem}) => {

  const data = [
    {item: 'Logistics', points: 10, extrapoints: 15},
    {item: 'Publicity' , points: 10, extrapoints: 16 },
    {item: 'Marketing', points: 10, extrapoints: 15},
    {item: 'Fundraising', points: 10, extrapoints: 15},
    {item: 'Sets', points: 12, extrapoints: 17},
    {item: 'Lights', points: 8, extrapoints: 12},
    {item: 'Sounds', points: 6, extrapoints: 12},
  ]

  //find better way to solve this 
  const [name, setName] = useState('Logistics')
  const [point, setPoint] = useState(10)
  const [leader, setLeader] = useState(false)

  useEffect(() => {
    if(name !== '') {
      const val = assignPoints(name)
      setPoint(val)
    } 
  }, [leader])

  useEffect(() => {
    const label = leader ? " Head" : " Member"
    setNewItem({item: "DP: " + name + label, points: point})
  }, [name, point])

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

  //need to add some error handling to the form
  const handlenewSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
  }

  const handleLeader = (e) => {
    if (e.target.value == 'false') {
      setLeader(false)
    } else {
      setLeader(true)
    }
  }

  return (
    <form onSubmit={handlenewSubmit}>
    <FormControl>
      <FormLabel><u>Dance Production</u></FormLabel>
      <HStack>
        <Select onChange={handleSelect}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        <FormLabel>Role:</FormLabel>
        <Select onChange={handleLeader}>
          <option value={false} default>Member</option>
          <option value={true}>Head</option>
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