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
  import React, { useEffect, useMemo, useState, useRef } from "react";
  import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'
  import { ConnectButton } from '@rainbow-me/rainbowkit';
  import { contractABI,contractAddress } from "./abi/utils/constant";
  import { contractABI2,contractAddress2 } from "./abi/utils/constant";
  import { contractABI3,contractAddress3 } from "./abi/utils/constant";
  import { useContractRead } from 'wagmi'
  import { useContractEvent } from 'wagmi'
  import { useContractWrite, usePrepareContractWrite } from 'wagmi'
  import {ownerAddress} from "./abi/utils/constant";
  import { ethers } from "ethers";
  import Dashboard from "./milaswap";


  function ethValue(weiValue){
    return(
      ethers.utils.formatEther(weiValue)
    )
  };

  

  function weiValue(ethValue){
    if((ethValue != undefined) && (ethValue != "")){
      return(
        ethers.utils.parseUnits(ethValue.toString(), 'ether').toString()
      )
    }
  };




  
  



  export default function Admin(){


 const [allowValue, setAllowValue] = useState("0");
   const [ownerValue, setOwnerValue] = useState("0");
    const [milaBalance, setMilaBalance] = useState(0);
     const [allowanceBalance,setAllowanceBalance ] = useState(0);
    const { address, connector, isConnected } = useAccount()
    
    


    const { data: milaAllowance, error: allowanceError } = useContractRead({
      address:contractAddress3,
      abi: contractABI3,
       functionName: "allowance",
       args:[address,contractAddress2],
       watch: true,
       })
  


        useEffect(() => {
      if (milaAllowance) {
       let Allow = milaAllowance;
       setAllowanceBalance(Allow);
     }
     }, [milaAllowance]);
  
    /* console.log data to view variables */
     useEffect(() => {
     
        console.log("MilaAllowance:", milaAllowance);
      })
  








    const { data: ownerBalance, error: ownerBalanceError } = useContractRead({
       address:contractAddress,
       abi: contractABI,
     functionName: "balanceOf",
         args:[ownerAddress],
         watch: true,
     })
  
    useEffect(() => {
      if (ownerBalance) {
        let own = ownerBalance;
         setMilaBalance(own);
      }
     }, [ownerBalance]);
  
     /* console.log data to view variables */
     useEffect(() => {
     
    console.log("ownerBalance:", ownerBalance);
     })







     const { config:allowanceIncrease } = usePrepareContractWrite({
       address: contractAddress,
       abi: contractABI,
      functionName: 'increaseAllowance',
       args:[contractAddress2,weiValue(allowValue)]
     })
     const { data:allowanceData,  isSuccess, write:writeAllowance } = useContractWrite(allowanceIncrease)
    
    
    
    
    const { config:configMint } = usePrepareContractWrite({
      address: contractAddress,
       abi: contractABI,
       functionName: 'mint',
     args:[address,weiValue(ownerValue)],
     })
    const { data:mintData,  isSuccess:mintSuccess, write:writeMint } = useContractWrite(configMint)
    
    
    
   











   




return(
(address===ownerAddress)?(
  
<Flex h={[null, null, "100vh"]}
 flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="3000px"
>
      <Flex w={["100%", "100%", "10%", "15%", "15%"]}
          flexDir="column"
          alignItems="center"
          backgroundColor="#001013"
          color="#B495B1">
      <Flex
          
        ></Flex>
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
          align={["center", "center", "center", "flex-start", "flex-start"]}
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
              <Icon as={FiDroplet} fontSize="2xl" className="active-icon" />
            </Link>
            <Link href="/milaswap"
              _hover={{ textDecor: "none" }}
              display={["flex", "flex", "none", "flex", "flex"]}
            >
              <Text className="active">Dashboard</Text>
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
          </Flex>
          <Flex
                  className="sidebar-items"
                  mr={[2, 6, 0, 0, 0]}
                  mb={[0, 0, 6, 6, 6]}
                >
                   <Link href="/admin" >
                    <Icon as={FiBox} fontSize="2xl" display={["none", "none", "flex", "flex", "flex"]}/>
                    
                  </Link> 
                  <Link href="/admin" _hover={{ textDecor: "none" }}
                    display={["flex", "flex", "none", "flex", "flex"]} >
                 <Text>Admin</Text>
</Link>
                </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
        <Avatar my={2} src="avatar-1.jpg" />
        <Text textAlign="center">Ola Silva A.</Text>
 </Flex>
      </Flex>
 <Flex alignContent="center"     w={["100%", "100%", "50%"]}
        minW={[null, null, "300px", "300px", "400px"]}
       ml={["0","0","15%"]}
        p="3%"
        flexDir="column"
        overflow="auto" >
      <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div id="button-connect-wallet"
style={{  alignItems:"center",alignContent:"center", width:"100%",border:"1px", fontSize:"18px",borderRadius:"30px", padding:"0.7rem",textAlign:"center" }} 
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'flex', alignItems: 'center'
                            
              },
            })}
          >
          { (() => {
              
            if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",width:"100%" }} >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
               
                return (
                  <button onClick={openChainModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",width:"100%" }}>
                    Wrong network
                  </button>
                
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",width:"50%" }}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom> 
   
 
   <Flex   flexDir={["column", "column","row","row", "row"]}
  justifyContent={"center"}  overflow="hidden" mt={["30px","30px","20%"]}
     ml={["40px","40px","0"]}
  w={["80%","80%","100%","100%","100%"]} >



  
                

    <Box
    bg="#ffffff"
    p={4}
    mt={8}
    borderRadius="20px"
    border="0px"
    borderColor="#dc35464b"
    boxShadow="xl"
    color="gray.700"
  >
    <Flex flexDir="column">
      <Flex flexDir="row" justifyContent="space-between">
        <Flex flexDir="column">
          <Text fontWeight="medium"> MILA</Text>
        
        </Flex>

        <Flex flexDir="row" align="center">
          <Flex flexDir="column">
            <Text
              fontSize="ms"
              fontWeight="bold"
              mx="2"
              align="end"
              color="gray.500"
            >
              Allowance Bal:
            </Text>
            {ethValue(allowanceBalance.toString())}
           
          </Flex>
       
        </Flex>
      </Flex>

      <Flex
        flexDir="row"
        p={6}
        mt={4}
        borderRadius="20px"
        bgColor="gray.200"
        align="center"
        justify="space-between"
      >
        <Input
          placeholder="0.0"
          w="100%"
          min="1"
          type="number"
          
          _hover={{
            border: "0px",
          }}
          onChange={(e) => setAllowValue(e.target.value)}
                        
                        value={allowValue}
        />
      </Flex>
     

      <Flex align="center" mt={3}>
        <Divider />

        <Divider />
      </Flex>

    
      <Flex flexDir="row" w={"100%"} justifyContent="flex-end">
        <Button
          w={"100%"}
          py={5}
          borderRadius="15px"
          bgColor="#dc35464b"
      
          mt={5}
          onClick={()=>{
                          try{
                            writeAllowance?.();
                            
                      
                          }
                          catch(err){
                            console.log(err);
                          }
                        }}
        >
          Increase Allowance
        </Button>
      </Flex>
    </Flex>
    <Flex></Flex>
  </Box>
  <Box
    bg="#ffffff"
    p={4}
    mt={8}
    ml={[0,0,"22px"]}
    borderRadius="20px"
    border="0px"
    borderColor="#dc35464b"
    boxShadow="xl"
    color="gray.700"
  >
    <Flex flexDir="column">
      <Flex flexDir="row" justifyContent="space-between">
        <Flex flexDir="column">
          <Text fontWeight="medium"> MILA</Text>
        
        </Flex>

        <Flex flexDir="row" align="center">
          <Flex flexDir="column">
            <Text
              fontSize="ms"
              fontWeight="bold"
              mx="2"
              align="end"
              color="gray.500"
            >
              MILA Bal:
            </Text>
            {ethValue(milaBalance.toString())}{" MILA"}
           
          </Flex>
       
        </Flex>
      </Flex>

      <Flex
        flexDir="row"
        p={6}
        mt={4}
        borderRadius="20px"
        bgColor="gray.200"
        align="center"
        justify="space-between"
      >
        <Input
          placeholder="0.0"
          w="100%"
          min="1"
          type="number"
        
          _hover={{
            border: "0px",
          }}
          onChange={(e) => setOwnerValue(e.target.value)}
                     
                        value={ownerValue}
        />
      </Flex>
     

      <Flex align="center" mt={3}>
        <Divider />

        <Divider />
      </Flex>

    
      <Flex flexDir="row" w={"100%"} justifyContent="flex-end">
        <Button
          w={"100%"}
          py={5}
          borderRadius="15px"
          bgColor="#dc35464b"
         
          mt={5}
          onClick={()=>{
                          try{
                            writeMint?.();
                            
                      
                          }
                          catch(err){
                            console.log(err);
                          }
                        }}
        >
         MINT
        </Button>
      </Flex>
    </Flex> 
    
   </Box> 
   </Flex> 
  </Flex> 
  
  </Flex> 
):(
  <Dashboard/>
)
)
  };