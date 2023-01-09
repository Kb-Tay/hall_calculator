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
    {item: 'Logistics', points: .7 * 10, extrapoints: .7 * 10 + 5},
    {item: 'Publicity' , points: .7 * 11, extrapoints: .7 * 11 + 5 },
    {item: 'Marketing', points: .7 * 10, extrapoints: .7 + 10 + 5},
    {item: 'Fundraising', points: .7 * 10, extrapoints: .7 * 10 + 5},
    {item: 'Sets', points: .7 * 12, extrapoints: .7 * 12 + 5},
    {item: 'Lights', points: .7 * 6, extrapoints: .7 * 8 + 4},
    {item: 'Sounds', points: .7 * 6, extrapoints: .7 * 8 + 4},
    {item: 'Producers', points: .7 * 11 + 14}, 
    {item: 'Secretary/Treasurer', points: .7 * 11 + 12},
    {item: 'ScriptWriter', points: .7 * 11},
    {item: 'Production Manager', points: .7 * 10 + 4},
    {item: 'Assistant Production Manager', points: .7 * 10},
    {item: 'Dance Director', points: .7 * 11 + 8},
    {item: 'Drama Director', points: .7 * 11 + 8},
    {item: 'Junior Dance Director', points: .7 * 9 + 3},
    {item: 'Junior Drama Director', points: .7 * 9 + 3},
    {item: 'Dance Coordinators', points: .7 * 7},
    {item: 'Stage Manager', points: .7 * 9 + 4},
    {item: 'Assistant Stage Manager', points: .7 * 6},
    {item: 'Choreographers', points: .7 * 10 + 7},
    {item: 'Dancer', points: .7 * 10},
    {item: 'Dance ICs', points: .7 * 2},
    {item: 'Cast', points: .7 * 20}
  ]

  //find better way to solve this 
  const [name, setName] = useState('Logistics')
  const [point, setPoint] = useState(10)
  const [leader, setLeader] = useState(false)

  const anotherData = [
    'Producers',
    'Secretary/Treasurer',
    'ScriptWriter',
    'Production Manager',
    'Assistant Production Manager',
    'Dance Director',
    'Drama Director', 
    'Junior Dance Director',
    'Junior Drama Director',
    'Dance Coordinators',
    'Stage Manager', 
    'Assistant Stage Manager',
    'Choreographers',
    'Dancer',
    'Dance ICs',
    'Cast',
  ]
    
  useEffect(() => {
    if(name !== '') {
      const val = assignPoints(name)
      setPoint(val)
    } 
  }, [leader])

  useEffect(() => {
    const label = leader ? " Head" : " Member"
    let num = point.toFixed(2)
    if (anotherData.includes(name)) {
      setNewItem({item: "DP " + name, points: num})
    } else {
      setNewItem({item: "DP: " + name + label, points: num})
    }
  }, [name, point])

  const assignPoints = (value) => {
    for (let i = 0; i < data.length; i++ ) {
      if(data[i].item === value && !leader) {
        return data[i].points
      } 
      if (data[i].item === value && leader) {
        return anotherData.includes(value) ? data[i].points : data[i].extrapoints
      }
    }
  }

  const handleSelect = (event) => {
    const obj = event.target.value
    const obj_point = assignPoints(obj)
    setName(obj)
    setPoint(obj_point)
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
      <FormLabel><u>You've Selected: DP</u></FormLabel>
      <HStack>
        <Select onChange={handleSelect}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        
        {
          anotherData.includes(name) ?
          <p></p>
          : (<FormLabel>Role:</FormLabel>)
        }
        {
          anotherData.includes(name) ?
          <p></p>
          : (
          <Select onChange={handleLeader}>
            <option value={false} default>Member</option>
            <option value={true}>Head</option>
          </Select>)
        }
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