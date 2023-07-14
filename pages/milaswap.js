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
import React, { useEffect, useState } from "react";
import { FiChevronDown,FiChevronUp,FiCreditCard,} from "react-icons/fi";


import { contractABI,contractAddress,contractABI2,contractAddress2,contractABI3,contractAddress3  } from "../components/abi/utils/constant";




import { useAccount,useContractRead, useContractWrite, usePrepareContractWrite,useWaitForTransaction } from 'wagmi';
import { ethers } from "ethers";
import { Loading,NotConnected,ConnectButtonComp,Sidebar,FailedNotification,Notification } from "../components/global";

import { useDebounce } from 'use-debounce'

export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
 

  const [sellBnbQuote, setSellBnbQuote] = useState({
    sbToTokenPrice: null,
    sbFromTokenPrice: null,
    sbQuoteGas: null,
    sbLoading: false,
  });

  const [quote, setQuote] = useState({
    toTokenPrice: null,
    quoteGas: null,
  });

 

   //I want to hide the dex ui for now
   const [dexTuggle, setDexTuggle] = useState(false);

  // I want to set price loading or otherwise

   const [loadingUsdtPrice, setLoadingUsdtPrice] = useState(false);
  

  

  const [supplyData, setSupplyData] = useState(0);
  const [milaBalance, setMilaBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [usdtData, setUsdtSupply] = useState(0);
  const [tokenId, setTokenId] = useState("");
  const debouncedTokenId = useDebounce(tokenId)
  const { address,  isConnected } = useAccount()




  const { data: totalMilaBalance, error: totalError } = useContractRead({
    address:contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args:[address],
    watch: true,
     })



     const { data: totalUsdtBalance, error: usdtTotalError } = useContractRead({
      address:contractAddress3,
      abi: contractABI3,
      functionName: "balanceOf",
      args:[address],
      watch: true,
    })
  

  const { data: milaTotalSupply, error: totalSupplyError } = useContractRead({
    address:contractAddress,
    abi: contractABI,
    functionName: "totalSupply",
    watch: true,

  })
  
  const { data: milaData, error: milaDataError } = useContractRead({
    address:contractAddress2,
    abi: contractABI2,
    functionName: "sysVars",
    watch: true,

  })
  const { data: usdtTotalSupply, error: usdttotalSupplyError } = useContractRead({
  address:contractAddress3,
  abi: contractABI3,
  functionName: "totalSupply",
  watch: true,
  })



 

  





 
  const { data:buyData , isLoading:buyLoading,isError:writeError,isIdle, write:writeBuy} = useContractWrite({
    address: contractAddress2,
    abi: contractABI2,
    functionName: 'buyMila',
    args: [parseInt(debouncedTokenId)],
    enabled: Boolean(debouncedTokenId),
  
  
  })

  const { isLoading:botLoading,isError:botError, isSuccess:botSuccess,isFetching} = useWaitForTransaction({
     confirmations: 1,
      hash: buyData?.hash,
    })

console.log("error:",botError)
console.log("error2:",writeError)
console.log("error3:",isIdle)

const { config:milaApprove } = usePrepareContractWrite({
      address: contractAddress3,
      abi: contractABI3,
      functionName: 'approve',
      args:[contractAddress2,weiValue((tokenId)*ethValue((milaData?milaData[3]:0).toString()))],
    
  
  
      onSuccess(appSuccess){
    console.log("sucess:",appSuccess);
  
      },
    })
   
  const { data:approveData ,isLoading:appLoading,isSuccess:appSuccess, write:writeApprove } = useContractWrite(milaApprove)
  
    const { isLoading:waitLoading, isSuccess:waitSuccess } = useWaitForTransaction({
      confirmations:1,
      hash: approveData?.hash,
    })
  
    console.log("hash:",waitSuccess,waitLoading)




 
  useEffect(() => {
    if (milaTotalSupply) {
      let supply = milaTotalSupply;
      setSupplyData(supply);
      console.log("milaData:", supply);
    }
     if (totalMilaBalance) {
      let bal = totalMilaBalance;
      setMilaBalance(bal);
    }
      if (usdtTotalSupply) {
    let total = usdtTotalSupply;
    setUsdtSupply(total);
  } 
  // if (totalUsdtBalance) {
    let bal2 = totalUsdtBalance;
    setUsdtBalance(bal2);
   }, [isConnected,totalMilaBalance,totalUsdtBalance,milaTotalSupply,usdtTotalSupply,address]);
 

   useEffect(() => {
    // Run milaBuy whenever count changes
    if (!buyLoading) {
      writeBuy?.()
            }
            else{
              console.log("not loading")
            }
    
    }, [waitSuccess,isConnected,address]);

  
  
const Max=usdtBalance?.toString()/(milaData?milaData[3]:0).toString()

const url="https://mumbai.polygonscan.com/address/" + (milaData ? milaData[0] : 0).toString();
const url2="https://mumbai.polygonscan.com/address/" + (milaData ? milaData[1] : 0).toString();
const transactionUrl="https://mumbai.polygonscan.com/tx/" + (buyData?.hash);


function ethValue(weiValue){
  if (weiValue != undefined){
    return(
      ethers.utils.formatEther(weiValue)
    )
  }
};
function weiValue(ethValue){
  if((ethValue != undefined) && (ethValue != "")){
    return(
      ethers.utils.parseUnits(ethValue.toString(), 'ether').toString()
    )
  }
};



const handleClick2 = () => {

   writeApprove?.()


}


    return (
      <Flex  
        h={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="3000px"
      >

        {/* SideBar Component */}
        <Sidebar/>

        {/* SideBar Component End */}

        {/* column2 */}
        
        
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
  {botSuccess&&<Notification transactionUrl={transactionUrl}/>}
{(botError)&&<FailedNotification transactionUrl={transactionUrl}/>}
  {(!isConnected)?<NotConnected/>:<ConnectButtonComp />}
  
   <Flex alignContent="center">
     
  
   </Flex>
 </Flex>
     




{isConnected &&(



       
 
          <Flex
            w={["100%", "100%", "100%","100%","100%"]}
            
            bgColor="#F5F5F5"
            p="3%"
            flexDir="column"
            overflow="auto"
            align="center"
          >


            <Flex alignContent="center">
            
            </Flex>
            <Flex
              w={["100%", "100%", "100%","100%","100%"]}
              minW={[null, null, "300px", "300px", "900px"]}
            >
              <Flex
                w={["100%", "100%", "100%"]}
                minW={[null, null, "300px", "300px", "400px"]}
                bgColor="#F5F5F5"
                p="3%"
                flexDir="column"
              >
                <Flex alignContent="center">
                  <Heading letterSpacing="tight" mt="5">
                    Wallet
                  </Heading>
                </Flex>
                {value == 1 && (
                  <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, #B57295, #29259A)"
                    boxShadow="md"
                  >
                    <Flex
                      p="1em"
                      color="#fff"
                      flexDir="column"
                      h="100%"
                      justify="space-between"
                    >
                      <Flex justify="space-between" w="100%" align="flex-start">
                        <Flex flexDir="column">
                          <Text color="gray.400">
                            Current Balance :
                          
                          </Text>
                          {ethValue( milaBalance.toString())+ " MILA"}
                          
                        </Flex>
                        <Flex align="center">
                          <Icon mr={2} as={FiCreditCard} />
                          <Text color="#D8ABD8">MILALA TOKEN</Text>
                        </Flex>
                      </Flex>
                   
                      <Flex align="flex-end" justify="space-between">
                        <Flex>
                          <Flex flexDir="column" mr={4}>
                            <Text
                              textTransform="uppercase"
                              color="#D8ABD8"
                              fontSize="xs"
                            >
                             Total Supply :
                            </Text>
                           <Text fontSize="sm"> {ethValue(supplyData.toString())}</Text>
                          </Flex>
                          
                        </Flex>
                        
                      </Flex>
                     
                      <Text  color="#D8ABD8" >milaToken Address : </Text>
                    <Link href={url}> <Text fontSize="sm">{(milaData?milaData[0]:0).toString()}</Text></Link> 
                     
                    
                     
                    </Flex>
                  </Box>
                )}
                {value == 2 && (
                  <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, #1f306e, #f5487f)"
                  >
                    <Flex
                      p="1em"
                      color="#fff"
                      flexDir="column"
                      h="100%"
                      justify="space-between"
                    >
                      <Flex justify="space-between" w="100%" align="flex-start">
                        <Flex flexDir="column">
                          <Text color="#CDFFF9" fontSize="sm">Current USDT Balance: </Text>
                          <Text  >
                          {ethValue(usdtBalance)}$
                          </Text>
                        </Flex>
                        <Flex align="center">
                          <Icon mr={2} as={FiCreditCard} />
                          <Text fontSize="sm">MILAUSDT TOKEN.</Text>
                        </Flex>
                      </Flex>
                    <Text fontSize="xs" color="#CDFFF9"  mt="3" textTransform="uppercase">
                      Total Supply:
                    </Text>
                      <Text mb={4} fontSize="sm">
                      {ethValue(usdtData.toString())}
                      </Text>
                      <Flex align="flex-end" justify="space-between">
                        <Flex>
                          <Flex flexDir="column" mr={4}>
                            <Text
                              mb={3}
                              color="#CDFFF9"
                             
                            >
                             MilaUsdt Address:
                            </Text>
                            <Link href={url2}>
                            <Text fontSize="sm" >
                            {(milaData?milaData[1]:0).toString()}
                            </Text>
                            </Link>
                          </Flex>
                          <Flex flexDir="column">
                            <Text
                              textTransform="uppercase"
                              fontSize="xs"
                              color="#CDFFF9"
                            >
                              
                            </Text>
                          
                          </Flex>
                        </Flex>
                       
                      </Flex>
                    </Flex>
                  </Box>
                )}

                {value == 3 && (
                  <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, orange.300, pink.600)"
                  >
                    <Flex
                      p="1em"
                      color="#fff"
                      flexDir="column"
                      h="100%"
                      justify="space-between"
                    >
                      <Flex justify="space-between" w="100%" align="flex-start">
                        <Flex flexDir="column">
                          <Text color="gray.400">MilaPrice: </Text>
                          <Text fontWeight="bold" fontSize="xl">
                           
                          </Text>
                          {ethValue((milaData?milaData[3]:0).toString())}{" USDT"}
                        </Flex>
                        <Flex align="center">
                          <Icon mr={2} as={FiCreditCard} />
                          <Text>Mila.</Text>
                        </Flex>
                      </Flex>
                      <Text mb={4}>
                        
                      </Text>
                      <Flex align="flex-end" justify="space-between">
                        <Flex>
                          
                         
                        </Flex>
                     
                      </Flex>
                          <Text textTransform="uppercase" fontSize="xs">
                             Transaction Fee:
                            
                            </Text>
                       {ethValue((milaData?milaData[4]:0).toString())}{" %"}
                    </Flex>
                    
                  </Box>
                )}
                <Flex justifyContent="center" mt={2}>
                  <Button
                    bgColor={value == 1 ? "gray.600" : "gray.400"}
                    onClick={() => changeValue(1)}
                    size="xs"
                    mx={1}
                  />
                  <Button
                    bgColor={value == 2 ? "gray.600" : "gray.400"}
                    onClick={() => changeValue(2)}
                    size="xs"
                    mx={1}
                  />
                  <Button
                    bgColor={value == 3 ? "gray.600" : "gray.400"}
                    onClick={() => changeValue(3)}
                    size="xs"
                    mx={1}
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w={["100%", "100%", "100%"]}
              minW={[null, null, "300px", "300px", "900px"]}
              bgColor="#F5F5F5"
              p="3%"
              flexDir={["column", "column", "row"]}
              justifyContent="center"
             
            >
             
              <Flex
                minW={[null, null, "300px", "300px", "400px"]}
                flexDir="column" 
              >
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
                        <Text fontWeight="medium">Buy MILA</Text>
                        <Text
                          fontWeight="medium"
                          fontSize={"x-small"}
                          color="#9E6596"
                        >
                          sell USDT
                        </Text>
                      </Flex>
                      <Flex flexDir="row" align="center">
                        <Flex flexDir="column">
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            mx="2"
                            align="end"
                            color="gray.500"
                          >
                            USDT Bal:
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            mx="2"
                            align="end"
                          >
                            {loadingUsdtPrice ? "Loading" : ethValue(usdtBalance?.toString())}{" "}$
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            mx="2"
                            align="end"
                          >
                           
                          </Text>
                        </Flex>
                        <Button
                          borderRadius="20px"
                          w="auto"
                          boxShadow="xl"
                          variant="outline"
                          fontSize="sm"
                          onClick={() => {
                            setTokenId(Max);
                          }}
                        >
                          max
                        </Button>
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
                        placeholder="0"
                        type="number"
                       
                        w="100%"
                        step="1"
                        _hover={{
                          border: "0px",
                        }}
                        onChange={(e) => setTokenId(e.target.value)}
                  
                        value={tokenId}
                      />
                    </Flex>
                    <Flex flexDir="row" justifyContent="flex-end">
                      <Text fontSize="xs" fontWeight="bold">
                    
                      </Text>
                    </Flex>

                    <Flex align="center" mt={3}>
                      <Divider />

                      <Divider />
                    </Flex>

                    <Flex
                      flexDir="column"
                      justifyContent="flex-end"
                      align={"flex-end"}
                    >
                      <Text fontSize="xs" fontWeight="bold">
                        Mila Bal:{" "}
                      </Text>
                      <Text fontSize="xs" fontWeight="bold">
                        {ethValue(milaBalance.toString())}{" "}MILA
                      </Text>
                      {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                    </Flex>
                    <Flex flexDir="row" w={"100%"} justifyContent="center">


                          
                  {(waitSuccess&&buyLoading||botLoading||isFetching||appLoading||waitLoading)?<Loading/>:(<Button w={"50%"} py={5} 
                      borderRadius="15px" bgColor="#dc35464b"  disabled={tokenId % 1 !== 0 || tokenId > Max || tokenId <"1"}  mt={5}
                        onClick={handleClick2}
                        
                      >Buy MILA</Button>)}
                    </Flex>
                  </Flex>
                  <Flex></Flex>
                </Box>
                <Box align={"center"}>
                  <Skeleton isLoaded={1}>
                    <Flex
                      bg="#f9f9f9"
                      p={4}
                      borderRadius="20px"
                      borderTopRadius="0px"
                      w={"90%"}
                      border="0px"
                      borderColor="#dc35464b"
                      boxShadow="xl"
                      color="gray.700"
                      justifyContent={"space-between"}
                    >
                      <Flex
                        flexDir="row"
                        justifyContent={"space-between"}
                        w={"100%"}
                      >
                        <Flex
                          flexDir="column"
                          justifyContent="flex-start"
                          align={"flex-start"}
                        >
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            color="gray.500"
                          >
                            Spend USDT:{" "}{(tokenId)*ethValue((milaData?milaData[3]:0).toString())}{" $"}
                          </Text>
                          <Text fontSize="xs" fontWeight="bold">
                            {/* {buyBnbFromAmount} */}
                          </Text>
                          {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                        </Flex>
                        <Flex
                          flexDir="column"
                          justifyContent="flex-end"
                          align={"flex-end"}
                        >
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            color="gray.500"
                          >
                            Get MILA:{" "}{tokenId}{" MILA"}
                          </Text>
                          <Text fontSize="xs" fontWeight="bold">
                            {/* ~{buyBnbExpectedAmount} */}
                          </Text>
                          {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Skeleton>
                </Box>
              </Flex>
              {dexTuggle && swap == "fromto" && (
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
                      <Text fontWeight="medium">Swap2</Text>

                      <Flex flexDir="row" align="center">
                        <Flex flexDir="column">
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            mx="2"
                            align="end"
                          >
                            walletTokenBalance
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            mx="2"
                            align="end"
                          >
                            tokenBalance
                          </Text>
                        </Flex>
                        <Button
                          borderRadius="20px"
                          w="auto"
                          boxShadow="xl"
                          variant="outline"
                          fontSize="sm"
                        >
                          max
                        </Button>
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
                        w="50%"
                        _hover={{
                          border: "0px",
                        }}
                        // onChange={handleFromAmountChange}
                     
                        // value={fromAmount? fromAmount:0}
                      />

                      <Button
                        borderRadius="20px"
                        w="auto"
                        boxShadow="xl"
                        fontSize="sm"
                        onClick={() => setFromModalActive(true)}
                      >
                        {/* <Icon as={FiDroplet} mx={3} /> */}
                        {fromToken ? (
                          <img
                            src={
                              fromToken?.logoURI ||
                              "https://etherscan.io/images/main/empty-token.png"
                            }
                            alt="nologo"
                            width="30px"
                            preview={false}
                            style={{
                              borderRadius: "15px",
                              paddingRight: "5px",
                            }}
                          />
                        ) : (
                          <span>Select a token</span>
                        )}
                        <span pl="5px"> {fromToken?.symbol}</span>
                        <Icon as={FiChevronDown} mx={3} />
                      </Button>
                    </Flex>
                    <Flex flexDir="row" justifyContent="flex-end">
                      <Text fontSize="xs" fontWeight="bold">
                        fromTokenPriceUsd
                      </Text>
                    </Flex>

                    <Flex align="center" mt={3}>
                      <Divider />
                      <IconButton
                        icon={
                          <>
                            <FiChevronUp /> <FiChevronDown />
                          </>
                        }
                        onClick={() => {
                          if (swap == "fromto") {
                            swapChange("tofrom");
                          } else {
                            swapChange("fromto");
                          }
                        }}
                      />

                      {/* <IconButton
                                    icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
                                    onClick={() => {
                                        if (display == 'show') {
                                            changeDisplay('none')
                                        } else {
                                            changeDisplay('show')
                                        }
                                    }

                                    } /> */}
                      <Divider />
                    </Flex>

                    <Flex
                      flexDir="row"
                      p={6}
                      mt={3}
                      borderRadius="20px"
                      bgColor="gray.200"
                      align="center"
                      justify="space-between"
                    >
                      <Input
                        placeholder="0.0"
                        w="50%"
                        _hover={{
                          border: "0px",
                        }}
                        // value={quote ? Moralis.Units.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals).toFixed(6) : ""}
                      />

                      <Button
                        borderRadius="20px"
                        boxShadow="xl"
                        w="auto"
                        fontSize="sm"
                        onClick={() => setToModalActive(true)}
                      >
                        <span> toToken?.symbol</span>
                        <Icon as={FiChevronDown} mx={2} />
                      </Button>
                    </Flex>
                    <Flex flexDir="row" justifyContent="flex-end">
                      <Text fontSize="xs" fontWeight="bold">
                        toTokenPriceUsd
                      </Text>
                    </Flex>

                    <Button
                      py={5}
                      borderRadius="15px"
                      bgColor="#dc35464b"
                      // isDisabled={buttonEnable}
                      mt={5}
                      // onClick={() => trySwap(currentTrade)}
                    >
                      Swap
                    </Button>
                  </Flex>
                  <Flex></Flex>
                </Box>
              )}
              {dexTuggle && swap === "tofrom" && (
                <Box
                  bg="#ffffff"
                  p={4}
                  mt={8}
                  borderRadius="20px"
                  border="0px"
                  borderColor="#dc35464b"
                  boxShadow="xl"
                >
                  <Flex flexDir="column">
                    <Text fontWeight="medium">Swap</Text>
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
                        w="50%"
                        _hover={{
                          border: "0px",
                        }}
                      />

                      <Button
                        borderRadius="20px"
                        w="auto"
                        boxShadow="xl"
                        fontSize="sm"
                        onClick={() => setToModalActive(true)}
                      >
                        {/* <Icon as={FiDroplet} mx={3} /> */}
                        {toToken ? (
                          <img
                            src={
                              toToken?.logoURI ||
                              "https://etherscan.io/images/main/empty-token.png"
                            }
                            alt="nologo"
                            width="30px"
                            preview={false}
                            style={{
                              borderRadius: "15px",
                              paddingRight: "5px",
                            }}
                          />
                        ) : (
                          <span>Select a token</span>
                        )}
                        <span pl="5px"> toToken?.symbol</span>
                        <Icon as={FiChevronDown} mx={3} />
                      </Button>
                    </Flex>
                    <Flex align="center" mt={3}>
                      <Divider />
                      <IconButton
                        icon={
                          <>
                            <FiChevronUp /> <FiChevronDown />
                          </>
                        }
                        onClick={() => {
                          if (swap == "fromto") {
                            swapChange("tofrom");
                          } else {
                            swapChange("fromto");
                          }
                        }}
                      />

                      {/* <IconButton
                                    icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
                                    onClick={() => {
                                        if (display == 'show') {
                                            changeDisplay('none')
                                        } else {
                                            changeDisplay('show')
                                        }
                                    }

                                    } /> */}
                      <Divider />
                    </Flex>

                    <Flex
                      flexDir="row"
                      p={6}
                      mt={3}
                      borderRadius="20px"
                      bgColor="gray.200"
                      align="center"
                      justify="space-between"
                    >
                      <Input
                        placeholder="0.0"
                        w="50%"
                        _hover={{
                          border: "0px",
                        }}
                      />

                      <Button
                        borderRadius="20px"
                        boxShadow="xl"
                        w="auto"
                        fontSize="sm"
                        onClick={() => setFromModalActive(true)}
                      >
                        {fromToken ? (
                          <img
                            src={
                              fromToken?.logoURI ||
                              "https://etherscan.io/images/main/empty-token.png"
                            }
                            alt="nologo"
                            width="30px"
                            preview={false}
                            style={{
                              borderRadius: "15px",
                              paddingRight: "5px",
                            }}
                          />
                        ) : (
                          <span>Select a token</span>
                        )}
                        <span> {fromToken?.symbol}</span>
                        <Icon as={FiChevronDown} mx={2} />
                      </Button>
                    </Flex>
                    <Button
                      py={5}
                      borderRadius="15px"
                      bgColor="#dc35464b"
                      mt={5}
                    >
                      Swap
                    </Button>
                  </Flex>
                 
                </Box>
              )}
            </Flex>
          </Flex>
)}
        </Flex>

   </Flex>
    
   
    )   
}