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

  const [name, setName] = useState('')
  const [point, setPoint] = useState(0)
  const[title, setTitle] = useState(null)

  const handleSports = (event) => {
    setPoint(7)
    setName(event.target.value)
    setTitle('Member')
  } 

  const addPoints = (points,point) => {
    const newPoints = point + points
    setPoint(newPoints)
  }

  const handleRole = (e) => {
    if (e.target.value == 'Captain') {
      addPoints(5)
      setTitle('Captain')
      console.log('testing')
      
    }
    
    else if (e.target.value == 'Vice-Captain') {
      addPoints(3)
      setTitle('Vice-Captain')
    }

    else if (e.target.value == 'Team manager') {
      addPoints(3)
      setTitle('Team Manager')
    }

    else {addPoints(0)}
  }  

  const handleFinalCut = (e) => {
    if (e.target.value == 'Yes') 
    {
    addPoints(1)
    
  }
  
  else {
    addPoints(0)
  }}


  useEffect(() => {
    setNewItem({item: name + ' ' + title , points: point})
  }, [name])


  //need to add some error handling to the form
  const handlenewSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
  }



  return (
    <form onSubmit={handlenewSubmit}>
    <FormControl>
      <FormLabel>You've Selected: Sports</FormLabel>
      <HStack>
        <Select placeholder='Select Sport' onChange={handleSports}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        
        <Select placeholder='Role' onChange={handleRole}>
          <option>Member</option>
          <option> Captain </option>
          <option> Vice-Captain </option>
          <option>Team manager</option>
        </Select>

        <Select placeholder= 'Made Final Cut?' onChange={handleFinalCut}>
          <option value={true}>Yes</option>
          <option value={false}> No </option>
          
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