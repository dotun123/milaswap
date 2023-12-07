
import {
    Flex,
    Heading,
    Avatar,

    Text,
  
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
 
    VStack,
  } from "@chakra-ui/react";

  import {
    
    FiChevronDown,
    FiChevronUp,
  
  } from "react-icons/fi";
  import React, {useState,useContext } from "react";
import { ConnectButtonComp } from "./ConnectButton";
import { Etherescan } from "./FetchData";


const WalletAddress = () => {
    const [display, changeDisplay] = useState("hide");
    const { uniqueAddressLength } = useContext(Etherescan);
    const { uniqueFromAddresses } = useContext(Etherescan);
    const toUrl = "https://mumbai.polygonscan.com/address/";
  
    const maxAddressesPerRow = 10;
    const totalAddressesToShow = 30;
  
    // Slice the last 30 addresses
    const slicedAddresses = uniqueFromAddresses.slice(-totalAddressesToShow);
  
    // Group addresses into rows, ensuring at most 10 addresses in each row
    const addressRows = [];
    for (let i = 0; i < slicedAddresses.length; i += maxAddressesPerRow) {
      addressRows.push(slicedAddresses.slice(i, i + maxAddressesPerRow));
    }
  
    return (
      <Flex
        h={[null, null]}
        flexDir={["column", "column", "column"]}
        w="100%"
        align="center"
        maxW="2000px"
      >
        <ConnectButtonComp />
  
        {/* column 2 */}
        <Flex
          w={["100%", "100%", "100%", "100%", "100%"]}
          pt={8}
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          <Heading as="h2" size="lg" letterSpacing="Tight">
            {uniqueAddressLength} {" "}Wallet Address Found
          </Heading>
          {/* ... (previous code) */}
          <Flex flexDir="column" fontSize="smaller">
            <Flex overflow="auto">
              {addressRows.map((row, rowIndex) => (
                <Table variant="unstyled" mt={2} key={rowIndex}>
                  <Thead>
                    <Tr color="gray">
                      <Th isNumeric>Address</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {row.map((address, index) => (
                      <Tr key={index}>
                        <Td>
                          <Flex align="center">
                            <Avatar size="sm" mr={2} src="avatar-1.jpg" />
                            <Link
                              color="blue"
                              href={toUrl + address}
                              _hover={{ textDecor: "none" }}
                              target="_blank"
                            >
                              {address}
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ))}
            </Flex>
            <Flex align="center">
              <Divider />
              <IconButton
                icon={display === "show" ? <FiChevronUp /> : <FiChevronDown />}
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
    );
  };
  
  export default WalletAddress;
  