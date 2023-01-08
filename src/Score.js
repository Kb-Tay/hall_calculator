import { Heading } from '@chakra-ui/react'
import React from 'react'

const Score = ({ items }) => {
  const total = items.reduce((acc, curr) => acc + parseFloat(curr.points), 0)
  const round = Math.round(total)
  return (
    <Heading size="md" p={2}>
      Your points: {round}
    </Heading>
  )
}

export default Score
