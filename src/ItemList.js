import { FaTrashAlt } from 'react-icons/fa'
import {
  Card,
  Flex,
  Spacer,
  Stack,
  Text,
  IconButton,
  CardHeader,
  Heading,
  CardBody,
  StackDivider,
} from '@chakra-ui/react'

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Your CCAs</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />}>
          {items.map((item) => (
            <Flex w="100%" p={2} align="center" justify="space-between" key={item.id}>
              <Stack direction="row" spacing={5}>
                <Text>{item.name}</Text>
                <Text>{item.points}</Text>
              </Stack>
              <Spacer />
              <IconButton icon={<FaTrashAlt />} onClick={() => handleDelete(item.id)} />
            </Flex>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ItemList
