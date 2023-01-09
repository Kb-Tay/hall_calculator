import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Alert
      status="warning"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={2}
    >
      <AlertIcon />
      <AlertTitle>Disclaimer</AlertTitle>
      This calculator is meant to give a rough estimate of your points. Actual points may differ due
      to factors such as attendance and playing duration during IHG.
    </Alert>
  )
}

export default Footer
