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
import {useState, useEffect} from 'react'

const CulturalForm = ({addItem, setNewItem, newItem}) => {


  const [role, setRole] = useState('member');
  const [name, setName] = useState('Cultural Management Comm');
  const [point, setPoint] = useState(.7 * 5);

    
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


  const data = [
    {item: 'Cultural Management Comm', points: role == 'exco' ? (.7 * 5) + 3: role == 'head' ? (.7 * 5) + 5: (.7 * 5)},
    {item: 'Acapella', points: role == 'exco' ? (.7 * 10) + 2: role == 'head' ? (.7 * 10) + 5: (.7 * 10)},
    {item: 'Band', points: role == 'exco' ? .7 * 11 + 3: role == 'head' ? .7 * 11 + 6: .7 * 11},
    {item: 'Choir', points: role == 'exco' ? .7 * 10 + 3: role == 'head' ? .7 * 10 + 5: .7 * 10},
    {item: 'Drama', points: role == 'exco' ? .7 * 10 + 3: role == 'head' ? .7 * 10 + 5: .7 * 10},
    {item: 'Eusoff Dance Crew', points: role == 'exco' ? .7 * 10 + 2: role == 'head' ? .7 * 10 + 5: .7 * 10},
    {item: 'Dance Uncensored', points: .7 * 5 + 5},
    {item: 'Rockfest', points: .7 * 3},
    {item: 'CHEC', points: .7 * 3}
  ]

  //find better way to solve this 
  const roles = [
    {id: 1,
     name: 'member'},
    {id: 2, 
     name: 'exco'},
    {id: 3,
     name: 'head'},
  ]

  const others = [
    'Dance Uncensored',
    'Rockfest',
    'CHEC'
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
      <FormLabel><u>You've Selected: Cultural / Interhall Production</u></FormLabel>
      <HStack>
        <Select onChange={handleChange}>
        {
          data.map(item => 
            <option key={item.item} value={item.item}>{item.item}</option>              
          )
        }
        </Select>
        <FormLabel>Role:</FormLabel>
        {
          others.includes(name) 
            ? <p></p>
            :  
            <Select onChange={handleRole}>
            {roles.map(role => 
              <option key={role.id} value={role.name}>
                {role.name}
              </option>)}
          </Select>
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

export default CulturalForm