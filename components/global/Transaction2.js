
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Alert,
  VStack,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiDroplet,
} from "react-icons/fi";
import React, {useState,useContext } from "react";
import { ConnectButtonComp } from "./ConnectButton";
import { Etherescan } from "./FetchData";



const Transaction2 = () => {
  const [display, changeDisplay] = useState("hide");
const {eventData2}=useContext(Etherescan)
const{days}=useContext(Etherescan)
const hashUrl="https://mumbai.polygonscan.com/tx/";
const blockUrl="https://mumbai.polygonscan.com/block/";
const toUrl="https://mumbai.polygonscan.com/address/"


return (
  <Flex
    h={[null, null]}
    flexDir={["column", "column", "column"]}
        w="100%"
     align="center"  
    maxW="2000px"
  >
  
  <ConnectButtonComp/>
 
 

    {/* column 2 */}
    <Flex
      w={["100%", "100%", "100%", "100%", "100%"]}
     
     pt={8}
      flexDir="column"
      overflow="auto"
      minH="100vh"
    
    >
  
      <Heading fontWeight="normal" >
        Milala,{" "}
        <Flex fontWeight="bold" display="inline-flex">
          Blockchain.
        </Flex>
      </Heading>
      <Text color="gray" fontSize="sm">
        Invest in African Businesses from anywhere
      </Text>
    
      
      <Flex  mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="Tight">
           Monthly Transactions
          </Heading>
          <Text fontSize="sm" color="gray" ml={4}>
    
          </Text>
        </Flex>
       
      </Flex>
      <Flex flexDir="column" fontSize="smaller">
        <Flex overflow="auto">
          <Table variant="unstyled" mt={2} >
            <Thead >
              <Tr color="gray">
                <Th > Txn Hash</Th>
                <Th> 	
From</Th>
                <Th isNumeric> Block</Th>
                <Th isNumeric> Age</Th>
                <Th isNumeric> To</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>

            
            {eventData2.map((hash,index)=>
              <Tr >
              <VStack>
            
                <Td >
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                   
                     
                         <Link color="blue" href={(hashUrl+(hash.transactionHash))}  _hover={{ textDecor: "none" }} target="_blank">{(hash.transactionHash).slice(0,24)}{"..."} </Link>
                     
                     
                   
                  </Flex>
                  </Td>
                  </VStack>
                <Td >   {(hash.from).slice(0,24)}{"..."}</Td>
                <Td >
                <Link color="blue" href={(blockUrl+(hash.blockNumber))}  _hover={{ textDecor: "none" }} target="_blank">{(hash.blockNumber)} </Link>
            
                </Td>
                {days[index]?(<td>{days[index]}</td>):(<td>days and hours</td>)}
              <Td> <Link color="blue" href={(toUrl+(hash.to))}  _hover={{ textDecor: "none" }} target="_blank">{(hash.to).slice(0,24)}{"..."} </Link></Td>
              <Td>{hash.value}{"MILA"}</Td>
                
             
                
                      </Tr> 
                      )}

                      
                  
               
             
            </Tbody>
          </Table>
        </Flex>
        <Flex align="center">
          <Divider />
          <IconButton
            icon={display === "show" ? <FiChevronUp /> : <FiChevronDown />}
            onClick={() => {
              if (display == "show") {
                changeDisplay("none");
              } else {
                changeDisplay("show");
              }
            }}
          />
          <Divider />
        </Flex>
      </Flex>
    </Flex>
    
   
  </Flex>
)
}

export default Transaction2;
