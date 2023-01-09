import React from 'react'
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

const SportsForm = ({newItem, setNewItem, addItem}) => {

  const data = [
    {item: 'Badminton', points: 10, extrapoints: 15},
    {item: 'Basketball' , points: 10, extrapoints: 16 },
    {item: 'Floorball', points: 10, extrapoints: 15},
    {item: 'Frisby', points: 10, extrapoints: 15},
    {item: 'Handball', points: 12, extrapoints: 17},
    {item: 'Netball', points: 8, extrapoints: 12},
    {item: 'Road Relay', points: 6, extrapoints: 12},
    {item: 'Sepak Takraw', points: 6, extrapoints: 12},
    {item: 'Soccer', points: 6, extrapoints: 12},
    {item: 'Softball', points: 6, extrapoints: 12},
    {item: 'Squash', points: 6, extrapoints: 12},
    {item: 'Swimming', points: 6, extrapoints: 12},
    {item: 'Table Tennis', points: 6, extrapoints: 12},
    {item: 'Tennis', points: 6, extrapoints: 12},
    {item: 'Touch Rugby', points: 6, extrapoints: 12},
    {item: 'Rugby', points: 6, extrapoints: 12},
    {item: 'Track', points: 6, extrapoints: 12},
    {item: 'Volleyball', points: 6, extrapoints: 12},
  ]

  const [name, setName] = useState('Badminton')
  const [point, setPoint] = useState(7)
  const[title, setTitle] = useState('Member')

  const addPoints = (points, point) => {
    const newPoint = points + point
    setPoint(newPoint)
  }

  const handleSports = (event) => {
    setName(event.target.value)
    setTitle('Member')
  } 


  const handleRole = (e) => {
    if (e.target.value == 'Captain') {
      setPoint(12)
      setTitle('Captain')      
    }
    
    else if (e.target.value == 'Vice-Captain') {
      setTitle('Vice-Captain')
      setPoint(10)
    }

    else if (e.target.value == 'Team manager') {
      setPoint(10)
      setTitle('Team Manager')
    }

    else {setPoint(7)}
  }  


  useEffect(() => {
    setNewItem({item: name + ` (${title})` , points: point})
  }, [name, point])

  const handleFinalCut = (e) => {
    if (e.target.value == 'Yes') 
    {
      const newPoint = point + 1
      setPoint(newPoint)
    
  }
}

  //need to add some error handling to the form
  const handlenewSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
  }

  return (
    <form onSubmit={handlenewSubmit}>
    <FormControl>
      <FormLabel><u>You've Selected: Sports</u></FormLabel>
      <HStack>
        <Select onChange={handleSports}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        
        <FormLabel>Select Role:</FormLabel>
        <Select onChange={handleRole}>
          <option>Member</option>
          <option> Captain </option>
          <option> Vice-Captain </option>
          <option>Team manager</option>
        </Select>

        <FormLabel>Made IHG cut:</FormLabel>
        <Select onChange={handleFinalCut}>
        <option>Yes</option>
        <option> No </option>
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

export default SportsForm