import { useState, useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  Select,
  HStack,
  Button
} from '@chakra-ui/react'

const SocialForm = ({newItem, setNewItem, addItem}) => {
  const [role, setRole] = useState('Member');
  const [name, setName] = useState('Eusoff Expeditions');
  const [point, setPoint] = useState(.7 * 12);

  useEffect(() => {
    if(name !== '') {
      const val = assignPoints(name)
      setPoint(val)
    } 
  }, [role, name])

  useEffect(() => {
    let num = point.toFixed(2)
    setNewItem({item: name + ' ' + role, points: num})
  }, [name, point])

  console.log(point)

  const data = [
    {item: 'Eusoff Expeditions', points: role == 'exco' ? (.7 * 12) + 5: role == 'head' ? (.7 * 12) + 7: (.7 * 12)},
    {item: 'Green Committee', points: role == 'exco' ? (.7 * 5) + 2: role == 'head' ? (.7 * 5) + 6: (.7 * 5)},
    {item: 'Elderly Services', points: role == 'exco' ? .7 * 7 + 2: role == 'head' ? .7 * 7 + 4: .7 * 7 },
    {item: 'MINDS', points: role == 'exco' ? .7 * 6 + 6: role == 'head' ? .7 * 6 + 6: .7 * 6},
    {item: 'Sports Management Comm', points: role == 'exco' ? .7 * 11 + 6: role == 'head' ? .7 * 11 + 10: .7 * 11},
    {item: 'IHG Convening', points: role == 'exco' ? .7 * 11 + 6: role == 'head' ? .7 * 11 + 10: .7 * 11},
    {item: 'Block Comm', points: role == 'exco' ? .7 * 7: role == 'head' ? .7 * 7: .7 * 7},
    {item: 'Special Projects', points: role == 'exco' ? .7 * 11 + 4: role == 'head' ? .7 * 11 + 5: .7 * 11},
    {item: 'Hall Relation Board', points: role == 'exco' ? .7 * 11 + 4: role == 'head' ? .7 * 11 + 6: .7 * 11},
    {item: 'Hall Promotion Board', points: role == 'exco' ? .7 * 7 + 4: role == 'head' ? .7 * 7 + 6: .7 * 7},
    {item: 'Auditor Comm', points: role == 'exco' ? .7 * 6 + 4: role == 'head' ? .7 * 6 + 4: .7 * 6},
    {item: 'Elections Comm', points: role == 'exco' ? .7 * 5 + 4: role == 'head' ? .7 * 5 + 4: .7 * 5},
    {item: 'Finance Comm', points: role == 'exco' ? .7 * 7 + 4: role == 'head' ? .7 * 7 + 4: .7 * 7},
    {item: 'Eusoff Hackers', points: role == 'exco' ? .7 * 7: role == 'head' ? .7 * 7 + 5: .7 * 7},
    {item: 'Eusoff External Relations', points: role == 'exco' ? .7 * 8 + 5: role == 'head' ? .7 * 8 + 5: .7 * 8}
  ]

  const roles = [
    {id: 1,
     name: 'Member'},
    {id: 2, 
     name: 'Exco'},
    {id: 3,
     name: 'Head'},
  ]

  const assignPoints = (value) => {
    for (let i = 0; i < data.length; i++ ) {
      if(data[i].item === value) {
        return data[i].points
      } 
    }
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleRole = (e) => {
    setRole(e.target.value)
  }

  const handlenewSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
  }

  return (
    <form onSubmit={handlenewSubmit}>
    <FormControl>
      <FormLabel><u>You've Selected: Social Services & Other Comms</u></FormLabel>
      <HStack>
        <Select onChange={handleChange}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        <FormLabel>Role:</FormLabel>
          <Select onChange={handleRole}>
            {roles.map(role => 
              <option key={role.id} value={role.name}>
                {role.name}
              </option>)}
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

export default SocialForm