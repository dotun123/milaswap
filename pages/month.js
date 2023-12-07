import React from 'react'
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
    
  } from "@chakra-ui/react";
 import { Sidebar } from '../components/global'
import Transaction2 from '../components/global/Transaction2';

function months() {


   
    
  return (
    <Flex  
        h={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="3000px"
      >

        {/* SideBar Component */}
        <Sidebar/>

        
        
        
        <Flex flexDir="column" w={["100%", "100%", "100%"]}>
<Flex
   w={["100%", "100%", "100%"]}
   minW={[null, null, "300px", "300px", "400px"]}
   bgColor="#F5F5F5"
   p="3%"
   flexDir="column"
   overflow="auto"
   align="center"
 >
 
  <Transaction2/>

   
     
  
   </Flex>
</Flex>
</Flex>
  )
}

export default months;
