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
import React, { useEffect, useMemo, useState, useRef } from "react";
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
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

import {ownerAddress} from "../../pages/abi/utils/constant"
export const Sidebar = () => {
  const { address} = useAccount()
  
  return (
    <Flex
          w={["100%", "100%", "10%", "15%", "15%"]}
          flexDir="column"
          alignItems="center"
          backgroundColor="#001013"
          color="#B495B1"
        >
 <Flex
            flexDir="column"
            justifyContent="space-between"
            h={[null, null, "100vh"]}
          >
            <Flex flexDir="column" as="nav">
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
                alignSelf="center"
                letterSpacing="tight"
              >
                Mila.
              </Heading>
              <Flex
                flexDir={["row", "row", "column", "column", "column"]}
                align={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
                justifyContent="center"
                mb={[0, 0, 6, 6, 6]}
              >
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiHome} fontSize="2xl" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    <Text>Home</Text>
                  </Link>
                </Flex>
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon
                      as={FiDroplet}
                      fontSize="2xl"
                      className="active-icon"
                    />
                  </Link>
                  <Link href="/milaswap"
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    <Text className="active">Dashboard </Text>
                  </Link>
                </Flex>
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiPieChart} fontSize="2xl" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    <Text>Wallet</Text>
                  </Link>
                </Flex>
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiBox} fontSize="2xl" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    <Text>Services</Text>
                  </Link>

                  <Link
                    _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]}
                  >
                    
                  </Link>
                </Flex>
                {address==ownerAddress&&(
                <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                  <Link href="/admin"  >
                    <Icon as={FiBox} fontSize="2xl" display={["none", "none", "flex", "flex", "flex"]}/>
                    
                  </Link> 
                  <Link href="/admin"  _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]} >
                 <Text>Admin</Text>
                </Link>
                </Flex>)}
              </Flex>
            </Flex>


           
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              <Avatar my={2} src="avatar-1.jpg" />
              <Text textAlign="center">Ola Silva A.</Text>
            </Flex>
          </Flex>
</Flex>
  )
}
