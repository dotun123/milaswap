
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

import {ownerAddress} from "../abi/utils/constant"

export const Sidebar = () => {
  const [isTransactionOpen, setTransactionOpen] = useState(false);
  const { address } = useAccount();

  const toggleTransaction = () => {
    setTransactionOpen(!isTransactionOpen);
  };

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
            mt={30}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
          >
            Mila.
          </Heading>
          <Flex
            flexDir={["column", "column", "column", "column", "column"]}
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
            {/* Milaswap Link */}
            <Flex
              className="sidebar-items"
              mr={[2, 6, 0, 0, 0]}
              mb={[0, 0, 6, 6, 6]}
              mt={[2,2,0,0,0]}
            >
              <Link href="/milaswap" display={["none", "none", "flex", "flex", "flex"]}>
                <Icon as={FiDroplet} fontSize="2xl" className="active-icon" />
              </Link>
              <Link href="/milaswap" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                <Text>Swap</Text>
              </Link>
            </Flex>

            {/* Admin Link (visible only for ownerAddress) */}
            {address === ownerAddress && (
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={[0, 0, 6, 6, 6]}>
                <Link href="/admin">
                  <Icon as={FiBox} fontSize="2xl" display={["none", "none", "flex", "flex", "flex"]} />
                </Link>
                <Link href="/admin" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text>Admin</Text>
                </Link>
              </Flex>
            )}

            {/* Transaction Folder with Toggle Icon */}
            <Flex
              className="sidebar-items"
              mr={[2, 6, 0, 0, 0]}
              mb={[0, 0, 6, 6, 6]}
              mt={[2,2,0,0,0]}
              onClick={toggleTransaction}
              cursor="pointer"
            >
              <Icon as={FiPieChart} fontSize="2xl" display={["none", "none", "flex", "flex", "flex"]} />
              <Text display={["flex", "flex", "none", "flex", "flex"]}>Analytics</Text>
              <Icon as={isTransactionOpen ? FiChevronUp : FiChevronDown} mt="3px" display={["flex", "flex", "none", "flex", "flex"]}/>
            </Flex>

            {/* Connect wallets Link (visible only when Transaction is open) */}
            {isTransactionOpen && (
              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                mb={[0, 0, 6, 6, 6]}
                mt={[2,2,0,0,0]}
              >
                <Link href="/connectedAddress" display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link href="/connectedAddress" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text>Connect Wallets</Text>
                </Link>
              </Flex>
            )}
            {/* Wallet Link (visible only when Transaction is open) */}
            {isTransactionOpen && (
              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                mb={[0, 0, 6, 6, 6]}
                mt={[2,2,0,0,0]}
              >
                <Link href="/home" display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiCreditCard} fontSize="2xl" />
                </Link>
                <Link href="/home" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text>Tx Wallets</Text>
                </Link>
              </Flex>
            )}
            {/* Wallet Link (visible only when Transaction is open) */}
            {isTransactionOpen && (
              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                mb={[0, 0, 6, 6, 6]}
                mt={[2,2,0,0,0]}
              >
                <Link href="/month" display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiPlus} fontSize="2xl" />
                </Link>
                <Link href="/month" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text>Monthly Tx</Text>
                </Link>
              </Flex>
            )}
            {/* Mobile Link (visible only when Transaction is open) */}
            {isTransactionOpen && (
              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                mb={[0, 0, 6, 6, 6]}
                mt={[2,2,0,0,0]}
                
              >
                <Link href="/weekly" display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDroplet} fontSize="2xl" />
                </Link>
                <Link href="/weekly" _hover={{ textDecor: "none" }} display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text>Weekly Tx</Text>
                </Link>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      {/* User Info Section */}
      <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
        {/* Avatar and Name */}
        <Avatar my={2} src="avatar-1.jpg" />
        <Text textAlign="center">Ola Silva A.</Text>
      </Flex>
    </Flex>
  );
};

