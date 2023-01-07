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
  const [leader, setLeader] = useState(false)

  useEffect(() => {
    if(name !== '') {
      const val = assignPoints(name)
      setPoint(val)
    } 
  }, [leader])

  useEffect(() => {
    const label = leader ? " head" : " member"
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
      <FormLabel>You've Selected: Sports</FormLabel>
      <HStack>
        <Select placeholder='Select Sport' onChange={handleSelect}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        
        <Select placeholder='Role' onChange={handleLeader}>
          <option value={false} >Member</option>
          <option value={true}> Captain </option>
          <option value={true}> Vice-Captain </option>
          <option value={true}>Team manager</option>
        </Select>

        <Select placeholder= 'Made Final Cut?' onChange={handleLeader}>
          <option value={false}>Yes</option>
          <option value={true}> No </option>
          
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