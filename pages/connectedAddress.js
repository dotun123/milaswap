// pages/connectedAddress.js
import React, { useState, useEffect } from 'react';

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
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useAccount } from 'wagmi';
import { Sidebar,ConnectButtonComp } from '../components/global'
import myAccount from "../public/account.json"
const ConnectedAddress = () => {
  const [display, changeDisplay] = useState("hide");
  const { address } = useAccount();
  const [storedAddresses, setStoredAddresses] = useState([]);
  const toUrl = "https://mumbai.polygonscan.com/address/";

  useEffect(() => {
    // Fetch stored addresses from address.json on page load
    const fetchStoredAddresses = async () => {
      try {
        const response = await fetch('/api/getAddresses');
        const data = await response.json();
        if (data.success) {
          setStoredAddresses(data.addresses);
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchStoredAddresses();
  }, []);

  useEffect(() => {
    // Add the new address obtained from useAccount() if it doesn't exist in storedAddresses
    if (address && !storedAddresses.includes(address)) {
      setStoredAddresses((prevAddresses) => [...prevAddresses, address]);
      // Update the server-side storage (address.json)
      fetch('/api/updateAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });
    }
  }, [address]);

  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW="3000px"
    >
      {/* Sidebar Component */}
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
          <Flex
            h={[null, null]}
            flexDir={["column", "column", "column"]}
            w="100%"
            align="center"
            maxW="2000px"
          >
            {/* ... (Your ConnectButtonComp code here) */}
            <ConnectButtonComp/>

            {/* Column 2 */}
            <Flex
              w={["100%", "100%", "100%", "100%", "100%"]}
              pt={8}
              flexDir="column"
              overflow="auto"
              minH="100vh"
            >
              <Heading as="h2" size="lg" letterSpacing="Tight">
               {myAccount.length} Connected Address Found
              </Heading>

              <Flex flexDir="column" fontSize="smaller">
                <Flex overflow="auto">
                  <Table variant="unstyled" mt={2}>
                    <Thead>
                      <Tr color="gray">
                        <Th>Address</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {myAccount.map((storedAddress, index) => (
                        <Tr key={index}>
                          <Td>
                            <Flex align="center">
                              <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                              <Link
                                color="blue"
                                href={toUrl + storedAddress}
                                _hover={{ textDecor: "none" }}
                                target="_blank"
                              >
                                {storedAddress}
                              </Link>
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Flex>
                <Flex align="center">
                  <Divider />
                  <IconButton
                    icon={
                      display === "show" ? <FiChevronUp /> : <FiChevronDown />
                    }
                    onClick={() => {
                      if (display === "show") {
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ConnectedAddress;