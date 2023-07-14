




//   const [isAuthenticated, setIsAuthenticated] = useState(false);

 
//   const [userBalance, setUserBalance] = useState(null);

//   const [userChain, setUserChain] = useState(null);
//   const [userChainId, setUserChainId] = useState(null);
//   const [userNetworkName, setUserNetworkName] = useState(null);

//   const [data, setData] = useState(null);

//   const [busdData, setBusdData] = useState(null);
//   const [dripData, setDripData] = useState(null);
//   const [busdBal, setBusdBal] = useState(null);
//   const [busdWeiBalance, setBusdWeiBalance] = useState(null);
//   const [dripBal, setDripBal] = useState(null);
//   const [busdIsLoading, setBusdLoading] = useState(false);
//   const [dripIsLoading, setDripLoading] = useState(false);
  
//   const [usdtWeiBalance, setUsdtWeiBalance] = useState();

//   const { trySwap, tokenList, getQuote, swapComplete } =
//     useInchDex(userChainId);
//   const [isFromModalActive, setFromModalActive] = useState(false);
//   const [isToModalActive, setToModalActive] = useState(false);
//   const [fromToken, setFromToken] = useState();
//   const [toToken, setToToken] = useState();

//   const [fromTokenPriceUsd, setFromTokenPriceUsd] = useState();
//   const [fromAmount, setFromAmount] = useState();
//   const [toAmount, setToAmount] = useState();
//   const [sellBnbFromAmount, setSellBnbFromAmount] = useState(0);
//   const [buyBnbFromAmount, setBuyBnbFromAmount] = useState(0);
//   const [sellBnbExpectedAmount, setSellBnbExpectedAmount] = useState(0);
//   const [buyBnbExpectedAmount, setBuyBnbExpectedAmount] = useState(0);
//   const [loadingSB, setLoadingSB] = useState(false);
//   const [sellButtonDisabled, setSellButtonDisabled] = useState(true);
//   const [buyButtonDisabled, setBuyButtonDisabled] = useState(true);






//     if(!isConnected){
//   return (
//     <Flex
//       h={[null, null, "100vh"]}
//       flexDir={["column", "column", "row"]}
//       overflow="hidden"
//       maxW="2000px"
//     >
//       <Flex
//         w={["100%", "100%", "10%", "15%", "15%"]}
//         flexDir="column"
//         alignItems="center"
//         backgroundColor="#001013"
//         color="#B495B1"
//       >
//         <Flex
//           flexDir="column"
//           justifyContent="space-between"
//           h={[null, null, "100vh"]}
//         >
//           <Flex flexDir="column" as="nav">
//             <Heading
//               mt={50}
//               mb={[25, 50, 100]}
//               fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
//               alignSelf="center"
//               letterSpacing="tight"
//             >
//               Mila.
//             </Heading>
//             <Flex
//               flexDir={["row", "row", "column", "column", "column"]}
//               align={["center", "center", "center", "flex-start", "flex-start"]}
//               justifyContent="center"
//               mb={[0, 0, 6, 6, 6]}
//             >
//               <Flex
//                 className="sidebar-items"
//                 mr={[2, 6, 0, 0, 0]}
//                 mb={[0, 0, 6, 6, 6]}
//               >
//                 <Link display={["none", "none", "flex", "flex", "flex"]}>
//                   <Icon as={FiHome} fontSize="2xl" />
//                 </Link>
//                 <Link
//                   _hover={{ textDecor: "none" }}
//                   display={["flex", "flex", "none", "flex", "flex"]}
//                 >
//                   <Text>Home</Text>
//                 </Link>
//               </Flex>
//               <Flex
//                 className="sidebar-items"
//                 mr={[2, 6, 0, 0, 0]}
//                 mb={[0, 0, 6, 6, 6]}
//               >
//                 <Link display={["none", "none", "flex", "flex", "flex"]}>
//                   <Icon as={FiDroplet} fontSize="2xl" className="active-icon" />
//                 </Link>
//                 <Link
//                   _hover={{ textDecor: "none" }}
//                   display={["flex", "flex", "none", "flex", "flex"]}
//                 >
//                   <Text className="active">Dashboard</Text>
//                 </Link>
//               </Flex>
//               <Flex
//                 className="sidebar-items"
//                 mr={[2, 6, 0, 0, 0]}
//                 mb={[0, 0, 6, 6, 6]}
//               >
//                 <Link display={["none", "none", "flex", "flex", "flex"]}>
//                   <Icon as={FiPieChart} fontSize="2xl" />
//                 </Link>
//                 <Link
//                   _hover={{ textDecor: "none" }}
//                   display={["flex", "flex", "none", "flex", "flex"]}
//                 >
//                   <Text>Wallet</Text>
//                 </Link>
//               </Flex>
//               <Flex
//                 className="sidebar-items"
//                 mr={[2, 6, 0, 0, 0]}
//                 mb={[0, 0, 6, 6, 6]}
//               >
//                 <Link display={["none", "none", "flex", "flex", "flex"]}>
//                   <Icon as={FiBox} fontSize="2xl" />
//                 </Link>
//                 <Link
//                   _hover={{ textDecor: "none" }}
//                   display={["flex", "flex", "none", "flex", "flex"]}
//                 >
//                   <Text>Services</Text>
//                 </Link>
//               </Flex>
//             </Flex>
//           </Flex>
//           <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
//             <Avatar my={2} src="avatar-1.jpg" />
//             <Text textAlign="center">Ola Silva A.</Text>
//           </Flex>
//         </Flex>
//       </Flex>
//       {/* column 2 */}
//       <Flex
//         w={["100%", "100%", "60%", "60%", "55%"]}
//         p="3%"
//         flexDir="column"
//         overflow="auto"
//         minH="100vh"
//       >
//         <Heading fontWeight="normal">
//           Milala,{" "}
//           <Flex fontWeight="bold" display="inline-flex">
//             Blockchain.
//           </Flex>
//         </Heading>
//         <Text color="gray" fontSize="sm">
//           Invest in African Businesses from anywhere
//         </Text>
//         <Text fontWeight="bold" fontSize="2xl">
//           Connect Wallet
//         </Text>
//         <Flex justifyContent="space-between" mt={8} align="center">
//           <Text fontSize="sm" color="gray.700" fontWeight="bold">
//             Drip/USDT: 
//           </Text>
//           <Button
//             borderRadius="20px"
//             w="auto"
//             boxShadow="xl"
//             variant="outline"
//             fontSize="x-small"
//             mr={0}
//           >
//             24hr
//           </Button>
//         </Flex>
//         {/* <MyChart /> */}
//         <Flex justifyContent="space-between" mt={8}>
//           <Flex align="flex-end">
//             <Heading as="h2" size="lg" letterSpacing="Tight">
//               Transactions
//             </Heading>
//             <Text fontSize="sm" color="gray" ml={4}>
//               Apr 2021
//             </Text>
//           </Flex>
//           <IconButton icon={<FiCalendar />} />
//         </Flex>
//         <Flex flexDir="column" fontSize="smaller">
//           <Flex overflow="auto">
//             <Table variant="unstyled" mt={4}>
//               <Thead>
//                 <Tr color="gray">
//                   <Th> Name of Transation</Th>
//                   <Th> Category</Th>
//                   <Th isNumeric> Cashback</Th>
//                   <Th isNumeric> Amount</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {/* {bscScanData?.map((trans) => ( */}
//                 <Tr>
//                   <Td>
//                     <Flex align="center">
//                       <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                       <Flex flexDir="column">
//                         <Heading size="sm" letterSpacing="tight">
//                           Amazon3
//                         </Heading>
//                         {/* <Text fontSize="sm" color="gray" noOfLines={1}>{trans.blockhash}</Text> */}
//                       </Flex>
//                     </Flex>
//                   </Td>
//                   <Td> Electronic Devices </Td>
//                   <Td isNumeric> +2$</Td>
//                   <Td isNumeric>
//                     {" "}
//                     <Text fontWeight="bold" display="inline-table">
//                       -$242
//                     </Text>
//                     .00
//                   </Td>
//                 </Tr>
//                 {/* ))} */}
//                 <Tr>
//                   <Td>
//                     <Flex align="center">
//                       <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                       <Flex flexDir="column">
//                         <Heading size="sm" letterSpacing="tight">
//                           Amazon
//                         </Heading>
//                         <Text fontSize="sm" color="gray">
//                           Apr 24, 2021 at 1:40pm
//                         </Text>
//                       </Flex>
//                     </Flex>
//                   </Td>
//                   <Td> Electronic Devices </Td>
//                   <Td isNumeric> +2$</Td>
//                   <Td isNumeric>
//                     {" "}
//                     <Text fontWeight="bold" display="inline-table">
//                       -$242
//                     </Text>
//                     .00
//                   </Td>
//                 </Tr>
//                 <Tr>
//                   <Td>
//                     <Flex align="center">
//                       <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                       <Flex flexDir="column">
//                         <Heading size="sm" letterSpacing="tight">
//                           Amazon
//                         </Heading>
//                         <Text fontSize="sm" color="gray">
//                           Apr 24, 2021 at 1:40pm
//                         </Text>
//                       </Flex>
//                     </Flex>
//                   </Td>
//                   <Td> Electronic Devices </Td>
//                   <Td isNumeric> +2$</Td>
//                   <Td isNumeric>
//                     {" "}
//                     <Text fontWeight="bold" display="inline-table">
//                       -$242
//                     </Text>
//                     .00
//                   </Td>
//                 </Tr>
//                 {display === "show" && (
//                   <>
//                     {/* {bscScanData?.map((trans) => ( */}
//                     <Tr>
//                       <Td>
//                         <Flex align="center">
//                           <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                           <Flex flexDir="column">
//                             <Heading size="sm" letterSpacing="tight">
//                               Amazon2
//                             </Heading>
//                             {/* <Text fontSize="sm" color="gray">{trans.blockhash}</Text> */}
//                           </Flex>
//                         </Flex>
//                       </Td>
//                       <Td> Electronic Devices </Td>
//                       <Td isNumeric> +2$</Td>
//                       <Td isNumeric>
//                         {" "}
//                         <Text fontWeight="bold" display="inline-table">
//                           -$242
//                         </Text>
//                         .00
//                       </Td>
//                     </Tr>
//                     {/* ))} */}
//                   </>
//                 )}
//               </Tbody>
//             </Table>
//           </Flex>
//           <Flex align="center">
//             <Divider />
//             <IconButton
//               icon={display === "show" ? <FiChevronUp /> : <FiChevronDown />}
//               onClick={() => {
//                 if (display == "show") {
//                   changeDisplay("none");
//                 } else {
//                   changeDisplay("show");
//                 }
//               }}
//             />
//             <Divider />
//           </Flex>
//         </Flex>
//       </Flex>
//       {/* column 3 */}
//       <Flex
//         w={["100%", "100%", "35%"]}
//         minW={[null, null, "300px", "300px", "400px"]}
//         bgColor="#F5F5F5"
//         p="3%"
//         flexDir="column"
//         overflow="auto"
//       >
//         <Flex alignContent="center">
//           {/* <Button
//             // bgGradient='linear(to-l, #7928CA, #FF0080)'
//             id="button-connect-wallet"
//             borderRadius="3xl"
//             border="1px"
//             w="100%"
//             borderColor="gray.200"
//             py="6"
//             fontSize="sm"
//             letterSpacing="wide"
//             fontWeight="bold"
//             onClick={() => connect()}
//             // isLoading={isAuthenticating} onClick={() => authenticate()}
//           >
//             Connect Wallet
//           </Button> */}



                     
//           <ConnectButton.Custom>
//       {({
//         account,
//         chain,
//         openAccountModal,
//         openChainModal,
//         openConnectModal,
//         authenticationStatus,
//         mounted,
//       }) => {
//         // Note: If your app doesn't use authentication, you
//         // can remove all 'authenticationStatus' checks
//         const ready = mounted && authenticationStatus !== 'loading';
//         const connected =
//           ready &&
//           account &&
//           chain &&
//           (!authenticationStatus ||
//             authenticationStatus === 'authenticated');

//         return (
//           <div id="button-connect-wallet"
// style={{  alignItems:"center",alignContent:"center", width:"100%",border:"1px", fontSize:"18px",borderRadius:"30px", padding:"0.7rem",textAlign:"center" }} 
//             {...(!ready && {
//               'aria-hidden': true,
//               'style': {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 userSelect: 'none',
//                 display: 'flex', alignItems: 'center'
                            
//               },
//             })}
//           >
//             {(() => {
//               if (!connected) {
//                 return (
//                   <button onClick={openConnectModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",width:"100%" }} >
//                     Connect Wallet
//                   </button>
//                 );
//               }

//               if (chain.unsupported) {
//                 return (
//                   <button onClick={openChainModal} type="button">
//                     Wrong network
//                   </button>
//                 );
//               }

//               return (
//                 <div style={{ display: 'flex', gap: 12 }}>
//                   <button
//                     onClick={openChainModal}
//                     style={{ display: 'flex', alignItems: 'center' }}
//                     type="button"
//                   >
//                     {chain.hasIcon && (
//                       <div
//                         style={{
//                           background: chain.iconBackground,
//                           width: 12,
//                           height: 12,
//                           borderRadius: 999,
//                           overflow: 'hidden',
//                           marginRight: 4,
//                         }}
//                       >
//                         {chain.iconUrl && (
//                           <img
//                             alt={chain.name ?? 'Chain icon'}
//                             src={chain.iconUrl}
//                             style={{ width: 12, height: 12 }}
//                           />
//                         )}
//                       </div>
//                     )}
//                     {chain.name}
//                   </button>

//                   <button onClick={openAccountModal} type="button">
//                     {account.displayName}
//                     {account.displayBalance
//                       ? ` (${account.displayBalance})`
//                       : ''}
//                   </button>
//                 </div>
//               );
//             })()}
//           </div>
//         );
//       }}
//     </ConnectButton.Custom> 

          
//         </Flex>
//         <Flex alignContent="center"></Flex>
//       </Flex>
//     </Flex>
//   );
// }

// // For Sidebar Component
     


// // For Sidebar Component --End
// // const weiToToken = (bigNumber, decimal = 18) => {
// //   return ethers.utils.formatUnits(bigNumber.toString(), decimal);
// // };
// // const tokenToWei = (number, decimal = 18) => {
// //   return ethers.utils.parseUnits(number.toString(), decimal);
// // };


// // for sell box
// <Flex
//                 borderRadius="3xl"
//                 border="0px"
//                 borderColor="gray.200"
//                 minW={[null, null, "300px", "300px", "400px"]}
//                 flexDir="column"
//               >
// <Box
// bg="#ffffff"
// p={4}
// mt={8}
// borderRadius="20px"
// border="0px"
// borderColor="#dc35464b"
// boxShadow="xl"
// color="gray.700"
// >
// <Flex flexDir="column">
//   <Flex flexDir="row" justifyContent="space-between">
//     <Flex flexDir="column">
//       <Text fontWeight="medium">Sell MILA</Text>
//       <Text
//         fontWeight="medium"
//         fontSize={"x-small"}
//         color="#9E6596"
//       >
//         Get USDT
//       </Text>
//     </Flex>

//     <Flex flexDir="row" align="center">
//       <Flex flexDir="column">
//         <Text
//           fontSize="xs"
//           fontWeight="bold"
//           mx="2"
//           align="end"
//           color="gray.500"
//         >
//           WBNB Bal:
//         </Text>
//         <Text
//           fontSize="xs"
//           fontWeight="bold"
//           mx="2"
//           align="end"
//         >
//           {/* {loadingUsdtPrice ? "Loading" : userBalance} */}
//         </Text>
//         <Text
//           fontSize="xs"
//           fontWeight="bold"
//           mx="2"
//           align="end"
//         >
//           {/* {loadingPrice? "Loading": "$"+tokenBalance} */}
//         </Text>
//       </Flex>
//       <Button
//         borderRadius="20px"
//         w="auto"
//         boxShadow="xl"
//         variant="outline"
//         fontSize="sm"
//         onClick={() => {
//           setSellBnbFromAmount(userBalance);
//         }}
//       >
//         max
//       </Button>
//     </Flex>
//   </Flex>

//   <Flex
//     flexDir="row"
//     p={6}
//     mt={4}
//     borderRadius="20px"
//     bgColor="gray.200"
//     align="center"
//     justify="space-between"
//   >
//     <Input
//       placeholder="0.0"
//       w="100%"
//       _hover={{
//         border: "0px",
//       }}
//       // onChange={handleSellBnbFromAmountChange}
//       // // value={fromAmount}
//       // value={sellBnbFromAmount ? sellBnbFromAmount : ""}
//     />
//   </Flex>
//   <Flex flexDir="row" justifyContent="flex-end">
//     <Text fontSize="xs" fontWeight="bold">
//       {/* {fromTokenPriceUsd} */}
//     </Text>
//   </Flex>

//   <Flex align="center" mt={3}>
//     <Divider />

//     <Divider />
//   </Flex>

//   <Flex
//     flexDir="column"
//     justifyContent="flex-end"
//     align={"flex-end"}
//   >
//     <Text fontSize="xs" fontWeight="bold">
//       BUSD Balance:{" "}
//     </Text>
//     <Text fontSize="xs" fontWeight="bold">
//       {/* {busdBal} */}
//     </Text>
//     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
//   </Flex>
//   <Flex flexDir="row" w={"100%"} justifyContent="flex-end">
//     <Button
//       w={"50%"}
//       py={5}
//       borderRadius="15px"
//       bgColor="#dc35464b"
//       // isDisabled={sellButtonDisabled == true}
//       mt={5}
//       // onClick={() => swapBnbForUsdt()}
//       // isLoading={approveLoadingSell}
//       // disabled
//     >
//       Sell WBNB
//     </Button>
//   </Flex>
// </Flex>
// <Flex></Flex>
// </Box>
// <Box align={"center"}>
// <Skeleton isLoaded={1}>
// {/* <Skeleton isLoaded={!loadingSB}> */}
//   <Flex
//     bg="#f9f9f9"
//     p={4}
//     borderRadius="20px"
//     borderTopRadius="0px"
//     w={"90%"}
//     border="0px"
//     borderColor="#dc35464b"
//     boxShadow="xl"
//     color="gray.700"
//     justifyContent={"space-between"}
//   >
//     <Flex
//       flexDir="row"
//       justifyContent={"space-between"}
//       w={"100%"}
//     >
//       <Flex
//         flexDir="column"
//         justifyContent="flex-start"
//         align={"flex-start"}
//       >
//         <Text
//           fontSize="xs"
//           fontWeight="bold"
//           color="gray.500"
//         >
//           Spend BNB:{" "}
//         </Text>
//         <Text fontSize="xs" fontWeight="bold">
//           {/* {sellBnbFromAmount} */}
//         </Text>
//         {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
//       </Flex>
//       <Flex
//         flexDir="column"
//         justifyContent="flex-end"
//         align={"flex-end"}
//       >
//         <Text
//           fontSize="xs"
//           fontWeight="bold"
//           color="gray.500"
//         >
//           Get USDT:{" "}
//         </Text>
//         <Text fontSize="xs" fontWeight="bold">
//           {/* ~{sellBnbExpectedAmount} */}
//         </Text>
//         {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
//       </Flex>
//     </Flex>
//   </Flex>
// </Skeleton>
// </Box>
// </Flex>
// ///////////////////////



// // making two separate buttons for approve and swapping//
// {/*                  

//                   {(appLoading||waitLoading)?<Loading/>:(<Button w={"50%"} py={5} 
//                       borderRadius="15px" bgColor="#dc35464b"  disabled={tokenId % 1 !== 0 || tokenId > Max || tokenId <"1"||buyLoading || botLoading||waitSuccess}  mt={5}
//                         onClick={()=>{
//                           try{
//                             onClick();
//                             handleClick();

//                           }
//                           catch(err){
//                           console.log(err)
//                           }

                          
//                         }

                        
//                         }
//                       >Approve</Button>)}

//                       {(buyLoading||botLoading||isFetching)?<Loading/>:(
//                     <Button w={"50%"} py={5} 
//                       borderRadius="15px" bgColor="#dc35464b"  disabled={tokenId % 1 !== 0 || tokenId > Max ||buyLoading || botLoading||isFetching||!waitSuccess}  mt={5}
//                         onClick={onClick2
//                         }
//                       >Buy MILA</Button>)} */}

//                       // const handleClick = () => {
// //   setTokenId(''); // clear state variable with empty string
// // };

// // const onClick = async () => {
// //   try {
// //     // Write approve if not already done
// //     if (!appSuccess) {
// //       await writeApprove?.()
// //     }
  
    
   
// //   } catch (error) {
// //     console.error(error)
// //   }
// // }

// // const onClick2 = async () => {
// //   try {
    
// //     // Wait for approve confirmation
// //     if (waitSuccess&&tokenId>"0") {
// //        writeBuy?.()
// //       // Write buy if not already done
// //       // if (!botSuccess) {
        
// //       // }
// //     }
// //   } catch (error) {
// //     console.error(error)
// //   }
// // }

// //using prepareContract before writing to the contract//






// //    const { config:milaBuy } = usePrepareContractWrite({
// //   address: contractAddress2,
// //   abi: contractABI2,
// //   functionName: 'buyMila',
// //   args:[(tokenId)],
// //   gas: 1_000_000n,


// //   onSuccess(writeBuy){
// //    console.log("sucess:",writeBuy)
// //  },
// // })
// // const { data:buyData , isLoading:buyLoading, write:writeBuy} = useContractWrite(milaBuy)

// // const { isLoading:botLoading, isSuccess:botSuccess,isFetching,isFetched} = useWaitForTransaction({
// //    confirmations: 1,
// //     hash: buyData?.hash,
// //   })





// //  const { config:milaApprove } = usePrepareContractWrite({
// //     address: contractAddress3,
// //     abi: contractABI3,
// //     functionName: 'approve',
// //     args:[contractAddress2,weiValue((tokenId)*ethValue((milaData?milaData[3]:0).toString()))],
// //     gas: 1_000_000n,


// //     onSuccess(appSuccess){
// //   console.log("sucess:",appSuccess);

// //     },
// //   })
 
// // const { data:approveData ,isLoading:appLoading,isSuccess:appSuccess, write:writeApprove } = useContractWrite(milaApprove)

// //   const { isLoading:waitLoading, isSuccess:waitSuccess } = useWaitForTransaction({
// //     confirmations: 1,
// //     hash: approveData?.hash,
// //   })

// //   console.log("hash:",waitSuccess,waitLoading)


// // bgGradient="linear(to-t, #B57295, #29259A)"