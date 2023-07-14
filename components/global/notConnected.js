
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
  import React, {useState } from "react";
import { ConnectButtonComp } from "./ConnectButton";

const NotConnected = () => {
    const [display, changeDisplay] = useState("hide");


  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW="2000px"
    >
  
      {/* column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "75%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
       
      >
        <Heading fontWeight="normal">
          Milala,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Blockchain.
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          Invest in African Businesses from anywhere
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          Connect Wallet
        </Text>
        <Flex justifyContent="space-between" mt={8} align="center">
          <Text fontSize="sm" color="gray.700" fontWeight="bold">
            MILA/USDT: 
          </Text>
          <Button
            borderRadius="20px"
            w="auto"
            boxShadow="xl"
            variant="outline"
            fontSize="x-small"
            mr={0}
          >
            24hr
          </Button>
        </Flex>
        
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="lg" letterSpacing="Tight">
              Transactions
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              Apr 2021
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>
        <Flex flexDir="column" fontSize="smaller">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th> Name of Transation</Th>
                  <Th> Category</Th>
                  <Th isNumeric> Cashback</Th>
                  <Th isNumeric> Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Amazon3
                        </Heading>
                       
                      </Flex>
                    </Flex>
                  </Td>
                  <Td> Electronic Devices </Td>
                  <Td isNumeric> +2$</Td>
                  <Td isNumeric>
                    {" "}
                    <Text fontWeight="bold" display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>
             
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Amazon
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 24, 2021 at 1:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td> Electronic Devices </Td>
                  <Td isNumeric> +2$</Td>
                  <Td isNumeric>
                    {" "}
                    <Text fontWeight="bold" display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Amazon
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 24, 2021 at 1:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td> Electronic Devices </Td>
                  <Td isNumeric> +2$</Td>
                  <Td isNumeric>
                    {" "}
                    <Text fontWeight="bold" display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display === "show" && (
                  <>
                    {/* {bscScanData?.map((trans) => ( */}
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Amazon2
                            </Heading>
                          
                          </Flex>
                        </Flex>
                      </Td>
                      <Td> Electronic Devices </Td>
                      <Td isNumeric> +2$</Td>
                      <Td isNumeric>
                        {" "}
                        <Text fontWeight="bold" display="inline-table">
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    {/* ))} */}
                  </>
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
      
      <Flex
        w={["100%", "100%", "40%"]}
        minW={[null, null, "300px", "300px", "550px"]}
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
       
      >
      
        <ConnectButtonComp/>

       
      </Flex>
    </Flex>
  )
}

export default NotConnected;
