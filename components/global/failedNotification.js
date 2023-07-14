import {React,useState} from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon,
    IconButton,
    Divider,
    Link,
    Box,
    Button,
    Input,
    Skeleton,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    color,
    useDisclosure,
  } from "@chakra-ui/react";
const FailedNotification = ({transactionUrl}) => {
  const {
    isOpen: isVisible,
    onClose
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    
    <Alert status="error" position="absolute"   variant="solid"  fontWeight={"500"}  height={"200px"} w={"50%"} zIndex={"99"}  flexDir={["column", "column", "row"]} >
    <AlertIcon /> 
    <AlertTitle mr={2}>Transaction was not successful!</AlertTitle>
    <AlertDescription>Your payment has not been processed.</AlertDescription>
    <AlertDescription><Link href={transactionUrl} _hover={{ textDecor: "none" }} target="_blank" ><Text  _hover={{  color: "black"  }}   >click to check Transaction details</Text></Link></AlertDescription>

    <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
    
  </Alert>  

  ):null
}

export default FailedNotification;