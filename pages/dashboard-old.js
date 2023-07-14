// import {
//     Flex,
//     Heading,
//     Avatar,
//     AvatarGroup,
//     Text,
//     Icon,
//     IconButton,
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     Divider,
//     Link,
//     Box,
//     Button,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Skeleton,
//     SkeletonCircle,
//     SkeletonText, 
// } from '@chakra-ui/react'
// import React, { useEffect, useState, useRef } from 'react'
// import {
//     FiHome,
//     FiPieChart,
//     FiDollarSign,
//     FiBox,
//     FiCalendar,
//     FiChevronDown,
//     FiChevronUp,
//     FiPlus,
//     FiCreditCard,
//     FiSearch,
//     FiBell,
//     FiDroplet,

// } from "react-icons/fi"
// import MyChart from '../components/Mychart'
// import { Line, Chart } from 'react-chartjs-2'
// import { ReactNode } from 'react';
// import Web3 from 'web3';
// import axios from 'axios';
// let empTime = [];
// let empValue = [];


// import { ethers } from 'ethers';
// // const habi = require('human-standard-token-abi');
// // const {ChainId, Token, TokenAmount, Fetcher: v2Fetcher, Pair, Route, Trade, TradeType, Percent} = require('@pancakeswap/sdk');
// console.log("NewChain", ChainId.MAINNET, FACTORY_ADDRESS, "weth", WETH);


// import ethers2 from "@ethersproject/providers";
// import { BscConnector } from "@binance-chain/bsc-connector";
// var UrlJsonRpcProvider = require("@ethersproject/providers");
// var Provider2 = require("@ethersproject/providers");
// const Ether = new Provider2.StaticJsonRpcProvider(
//     "https://bsc-dataseed3.defibit.io"
// );


// // import { ChainId, Token, WETH, Fetcher, Route } from "@pancakeswap-libs/sdk";
// import { CurrencyAmount,  ChainId, Fetcher, Route,  WETH, JSBI, Token, TokenAmount, Trade, TradeType, factory, Percent, Pair, FACTORY_ADDRESS} from '@pancakeswap/sdk'















// // import InchModal from "../components/InchModal";
// import InchModal from "../components/InchModal";
// import useInchDex from "../src/hooks/useInchDex";

// // console.log(data)


// export default function Dashboard() {
//     const [display, changeDisplay] = useState("hide");
//     const [swap, swapChange] = useState("fromto");
//     // const [value, setValue] = useState(1);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [value, changeValue] = useState(1);
//     const [defaultAccount, setDefaultAccount] = useState(null);
//     const [userBalance, setUserBalance] = useState(null);
//     const [userAccount, setUserAccount] = useState(null);
//     const [userAccount0, setUserAccount0] = useState(null);
//     const [userChain, setUserChain] = useState(null);
//     const [userChainId, setUserChainId] = useState(null);
//     const [userNetworkName, setUserNetworkName] = useState(null);
//     const [persistentLogin, setPersistentLogin] = useState(null);
//     const [data, setData] = useState(null)
//     const [isLoading, setLoading] = useState(false)
//     const [busdData, setBusdData] = useState(null)
//     const [dripData, setDripData] = useState(null)
//     const [busdBal, setBusdBal] = useState(null)
//     const [busdWeiBalance, setBusdWeiBalance] = useState(null)
//     const [dripBal, setDripBal] = useState(null)
//     const [busdIsLoading, setBusdLoading] = useState(false)
//     const [dripIsLoading, setDripLoading] = useState(false)
//     const [usdtBalance, setUsdtBalance] = useState()
//     const [usdtWeiBalance, setUsdtWeiBalance] = useState()


//     const { trySwap, tokenList, getQuote, swapComplete } = useInchDex(userChainId);
//     const [isFromModalActive, setFromModalActive] = useState(false);
//     const [isToModalActive, setToModalActive] = useState(false);
//     const [fromToken, setFromToken] = useState();
//     const [toToken, setToToken] = useState();
//     const [tokenBalance, setTokenBalance] = useState();
//     const [walletTokenBalance, setWalletTokenBalance] = useState();
//     const [fromTokenPriceUsd, setFromTokenPriceUsd] = useState();
//     const [fromAmount, setFromAmount] = useState();
//     const [toAmount, setToAmount] = useState();
//     const [sellBnbFromAmount, setSellBnbFromAmount] = useState(0);
//     const [buyBnbFromAmount, setBuyBnbFromAmount] = useState(0);
//     const [sellBnbExpectedAmount, setSellBnbExpectedAmount] = useState(0);
//     const [buyBnbExpectedAmount, setBuyBnbExpectedAmount] = useState(0);
//     const [loadingSB, setLoadingSB] = useState(false);
//     const [sellButtonDisabled, setSellButtonDisabled] = useState(true);
//     const [buyButtonDisabled, setBuyButtonDisabled] = useState(true);

//     const [sellBnbQuote, setSellBnbQuote] = useState({
//         sbToTokenPrice: null,
//         sbFromTokenPrice: null,
//         sbQuoteGas: null,
//         sbLoading: false,

//     });

//     const [quote, setQuote] = useState({
//         toTokenPrice: null,
//         quoteGas: null,

//     });


//     const [chrtState, setChrtState] = useState({
//         loading: true,
//         drip: null,
//     });
//     const [chartData, setChartData] = useState([]);
//     const [chartData2, setChartData2] = useState([]);
//     const [chartData3, setChartData3] = useState([]);
//     const [employeeSalary, setEmployeeSalary] = useState([]);
//     const [employeeAge, setEmployeeAge] = useState([]);

//     //I want to hide the dex ui for now
//     const [dexTuggle, setDexTuggle] = useState(false)

//     //I want to set price loading or otherwise
//     const [loadingPrice, setLoadingPrice] = useState(false)
//     const [loadingUsdtPrice, setLoadingUsdtPrice] = useState(false)
//     const [approveLoading, setapproveLoading] = useState(false)
//     const [approveLoadingSell, setapproveLoadingSell] = useState(false)
//     const [approveLoadingBuy, setapproveLoadingBuy] = useState(false)
//     const [enableBuyButton, setEnableBuyButton] = useState(false)
//     const [enableSellButton, setEnableSellButton] = useState(false)

//     let chainId
//     let web3
   


//     const handleFromAmountChange = (event) => setFromAmount(event.target.value)
    
//     const handleSellBnbFromAmountChange = (event) => setSellBnbFromAmount(event.target.value)
//     const handleBuyBnbFromAmountChange = (event) => setBuyBnbFromAmount(event.target.value)
    
//     // console.log("tokenListt", fromToken)
//     // console.log("Jehhhh5", empValue)

//     useEffect( async () => {
//         let provider = window.ethereum;
//         web3 = new Web3(provider);
//         if (typeof provider !== 'undefined') {
//             await provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
             
//                 setUserAccount0(accounts[0])
               
           
//             });
//        }
            
//     }, []);


//     Number.prototype.toFixedDown = function(digits) {
//         var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
//             m = this.toString().match(re);
//         return m ? parseFloat(m[1]) : this.valueOf();
//     };

//     async function test() {

        
//         console.log("Ether", Ether)

//         const daiAddress = "0x55d398326f99059fF775485246999027B3197955";
//         // const dai = await Fetcher.fetchTokenData(ChainId.MAINNET, daiAddress);
//         // const weth = await Fetcher.fetchTokenData(ChainId.MAINNET, WETH[ChainId.MAINNET]);


//         var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//         var USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
//         const StartCheck = Web3.utils.toChecksumAddress(USDTokenAddress);
//       var InterCheck = Web3.utils.toChecksumAddress(BNBTokenAddress);

//       var Tost = new Token(
//         ChainId.MAINNET,
//         InterCheck,
//         18,
//         "WBNB",
//         "WBNB Token"
//       );

//       var Inter = new Token(
//         ChainId.MAINNET,
//         StartCheck,
//         18,
//         "USDT",
//         "USDT Token"
//       );

//     //   try {
//     //     temp = await Fetcher.fetchPairData(Inter, Tost, Ether);

//     //     Pairi.push(temp);
//     //     //console.log(Pairi);
//     //   } catch {}
        
//         const pair = await Fetcher.fetchPairData(Inter, Tost, Ether);
//         const route = new Route([pair], Tost);
//         const bnbToUsdt = route.midPrice.toSignificant(6)
//         const usdtToBnb = route.midPrice.invert().toSignificant(6)
//         console.log("route1", bnbToUsdt)
//         console.log("route2", usdtToBnb)
//         const trade = new Trade(route, new TokenAmount( Tost, '1000000000000000000' ), TradeType.EXACT_INPUT)
//         const slippageTolerance = new Percent('50', '10000');
//         const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw;
//         // console.log("trade", trade.executionPrice.toSignificant(6))
//         console.log("trade", JSON.stringify(amountOutMin))
    
//         console.log("pair", JSON.stringify(pair))





//         // const trade = new Trade(
//         //     route,
//         //     new TokenAmount(DAI, library.utils.toWei(amount)),
//         //     TradeType.EXACT_INPUT
//         // );
        
//         // const slippageTolerance = new Percent("50", "10000"); //0.5%
//         // const amountOutMin = ethers.BigNumber.from(
//         //   Trade.minimumAmountOut(slippageTolerance).raw.toString()
//         // ).toHexString();
    
//     }
    
//     useEffect( async () => {
//         var originalAmountToBuyWith = sellBnbFromAmount;
//         if (originalAmountToBuyWith <= 0) {
//             setSellBnbExpectedAmount(0)
//             const sellButtonStatus = (originalAmountToBuyWith > userBalance) || (originalAmountToBuyWith == "" )|| (originalAmountToBuyWith == 0)? true : false;
            
//             setSellButtonDisabled(sellButtonStatus)
//         } else {
            
//             const sellButtonStatus = (originalAmountToBuyWith > userBalance) || (originalAmountToBuyWith == "" )|| (originalAmountToBuyWith == 0)? true : false;
            
//             setSellButtonDisabled(sellButtonStatus)
            


//         var loadingSB = true
//         let provider = window.ethereum;
//         web3 = new Web3(provider);
//         console.log("Ether", Ether)

//         const daiAddress = "0x55d398326f99059fF775485246999027B3197955";
//         // const dai = await Fetcher.fetchTokenData(ChainId.MAINNET, daiAddress);
//         // const weth = await Fetcher.fetchTokenData(ChainId.MAINNET, WETH[ChainId.MAINNET]);

//         const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
//         var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//         var USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
//         const StartCheck = Web3.utils.toChecksumAddress(USDTokenAddress);
//       var InterCheck = Web3.utils.toChecksumAddress(BNBTokenAddress);

//       var Tost = new Token(
//         ChainId.MAINNET,
//         InterCheck,
//         18,
//         "WBNB",
//         "WBNB Token"
//       );

//       var Inter = new Token(
//         ChainId.MAINNET,
//         StartCheck,
//         18,
//         "USDT",
//         "USDT Token"
//       );

//     //   try {
//     //     temp = await Fetcher.fetchPairData(Inter, Tost, Ether);

//     //     Pairi.push(temp);
//     //     //console.log(Pairi);
//     //   } catch {}
   
//         // var sellBnbFromAmount2 = sellBnbFromAmount
        
//         // const pair = await Fetcher.fetchPairData(Inter, Tost, Ether);
//         // const route = new Route([pair], Tost);
//         // const bnbToUsdt = route.midPrice.toSignificant(6)
//         // const usdtToBnb = route.midPrice.invert().toSignificant(6)
//         // console.log("route1", bnbToUsdt)
//         // console.log("route2", usdtToBnb)
//         // const trade = new Trade(route, new TokenAmount( Tost, sellBnbFromAmount2 ), TradeType.EXACT_INPUT)
//         // const slippageTolerance = new Percent('50', '10000');
//         // const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw;
//         // console.log("trade", trade.executionPrice.toSignificant(6))
//         // console.log("sellBnbFromAmount2", sellBnbFromAmount2 * trade.executionPrice.toSignificant(6))
//         // console.log("trade", JSON.stringify(amountOutMin))
    
//         // console.log("pair", JSON.stringify(pair))





//         // const trade = new Trade(
//         //     route,
//         //     new TokenAmount(DAI, library.utils.toWei(amount)),
//         //     TradeType.EXACT_INPUT
//         // );
        
//         // const slippageTolerance = new Percent("50", "10000"); //0.5%
//         // const amountOutMin = ethers.BigNumber.from(
//         //   Trade.minimumAmountOut(slippageTolerance).raw.toString()
//         // ).toHexString();
    


//         var pancakeSwapAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//             var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//             let pancakeSwapContract = pancakeSwapRouterAddress.toLowerCase();
//             const pcsContract = new web3.eth.Contract(pancakeSwapAbi, pancakeSwapRouterAddress);


//             // var swap_web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
//             // var BSC_FORK = Common.forCustomChain(
//             //     'mainnet',
//             //     {
//             //         name: 'Binance Smart Chain Mainnet',
//             //         networkId: 56,
//             //         chainId: 56,
//             //         url: 'https://bsc-dataseed.binance.org/'
//             //     },
//             //     'istanbul',
//             // );

//             // var gasPrice = 5000000000;
          

           
        
                            
//             var tem = await pcsContract.methods
//             .getAmountsOut((originalAmountToBuyWith * Math.pow(10, 18)).toString(), [
//                 BNBTokenAddress,
//                 busdAddress
//             ])
//             .call();
        
//             const amountOutMin2b = (tem[1] / Math.pow(10, 18)).toFixedDown(9);
//             setSellBnbExpectedAmount(amountOutMin2b)
//         // console.log("tem", tem,  tem[1] / Math.pow(10, 18));
//             console.log("tradeDetails", originalAmountToBuyWith, userBalance)
            
            
            
            

//         var loadingSB = false
//         }
        
//     }, [sellBnbFromAmount]);
    

  


//     useEffect( async () => {
//         var originalAmountToBuyWith = buyBnbFromAmount;
        
//         if (originalAmountToBuyWith <= 0) {
//             setBuyBnbExpectedAmount(0)
//             const sellButtonStatus = (originalAmountToBuyWith > busdBal) || (originalAmountToBuyWith == "" )|| (originalAmountToBuyWith == 0)? true : false;
            
//             setBuyButtonDisabled(sellButtonStatus)
//         } else {
//             // console.log("they", Number(busdBal), Number(originalAmountToBuyWith))
//             const sellButtonStatus = (originalAmountToBuyWith > busdBal) || (originalAmountToBuyWith == "" )|| (originalAmountToBuyWith == 0)? true : false;
            
//             setBuyButtonDisabled(sellButtonStatus)
            


//         var loadingSB = true
//         let provider = window.ethereum;
//         web3 = new Web3(provider);
//         console.log("Ether", Ether)

//         const daiAddress = "0x55d398326f99059fF775485246999027B3197955";
//         // const dai = await Fetcher.fetchTokenData(ChainId.MAINNET, daiAddress);
//         // const weth = await Fetcher.fetchTokenData(ChainId.MAINNET, WETH[ChainId.MAINNET]);

//         const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
//         var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//         var USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
//         const StartCheck = Web3.utils.toChecksumAddress(USDTokenAddress);
//       var InterCheck = Web3.utils.toChecksumAddress(BNBTokenAddress);

//       var Tost = new Token(
//         ChainId.MAINNET,
//         InterCheck,
//         18,
//         "WBNB",
//         "WBNB Token"
//       );

//       var Inter = new Token(
//         ChainId.MAINNET,
//         StartCheck,
//         18,
//         "USDT",
//         "USDT Token"
//       );

    

//         var pancakeSwapAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//             var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//             let pancakeSwapContract = pancakeSwapRouterAddress.toLowerCase();
//             const pcsContract = new web3.eth.Contract(pancakeSwapAbi, pancakeSwapRouterAddress);


        
                            
//             var tem = await pcsContract.methods
//             .getAmountsOut((originalAmountToBuyWith * Math.pow(10, 18)).toString(), [
//                 busdAddress,
//                 BNBTokenAddress
                
//             ])
//             .call();
        
//             const amountOutMin2b = (tem[1] / Math.pow(10, 18)).toFixedDown(9);
//             setBuyBnbExpectedAmount(amountOutMin2b)
//         // console.log("tem", tem,  tem[1] / Math.pow(10, 18));
//             console.log("tradeDetails", originalAmountToBuyWith, userBalance)
            
            
            
            

//         var loadingSB = false
//         }
        
//     }, [buyBnbFromAmount]);
    

  






        
//     // useEffect(async() => {
//     //     const checkTokenPriceAddress = fromToken?.address
//     //     const checkTokenPriceSymbol = fromToken?.symbol
//     //     let provider = window.ethereum;
//     //     if (typeof provider !== 'undefined') {
//     //         provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
       
//     //     const userA =  accounts[0]
//     //     console.log("user Account", checkTokenPriceAddress)
//     //     // console.log('user', userA)

//     //     // fetchTokenPrice(checkTokenPriceAddress)


//     //     // fetchTokenPrice({ params: { address: checkTokenPriceAddress,  chain: "bsc" }, onSuccess: (price) => setFromTokenPriceUsd(price.usdPrice + " USDT/"+checkTokenPriceSymbol) })
//     //     // fetchTokenPrice({ params: { address: "0x6...361",  chain: "bsc" }, onSuccess: (price) => console.log(price) })
//     //     // if (typeof userA == 'null') return null
    
            
      

//     //     setLoadingPrice(true)
        
//     //     // const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${checkTokenPriceSymbol}&vs_currencies=usd`;
//     //     const apiUrl = `https://api.pancakeswap.info/api/v2/tokens/${checkTokenPriceAddress}`;
//     //     axios
//     //         .get(apiUrl)
//     //         .then((data) => {
//     //             console.log(data.data?.data)    
//     //             setFromTokenPriceUsd(data.data?.data?.price)
//     //             setLoadingPrice(false)
               
//     //                 // console.log(checkTokenPriceSymbol, data[checkTokenPriceSymbol]["usd"])
//     //         })
//     //     // axios
//     //     //     .get(apiUrl)
//     //     //     .then((data) => {
//     //     //         console.log(data["data"][checkTokenPriceSymbol.toLowerCase()]['usd'], data["data"])    
//     //     //         setTokenBalance(data["data"][checkTokenPriceSymbol.toLowerCase()]['usd'])
//     //     //         setLoadingPrice(false)
               
//     //     //             // console.log(checkTokenPriceSymbol, data[checkTokenPriceSymbol]["usd"])
//     //     //     })
        
//     //     //So I decided to put all of this fetchin of user balanceOf into a function
                                
                
//     //             // if (checkTokenPriceAddress) {

//     //                 const abiJson3 = [
//     //                     { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
//     //                 ];
        
//     //                 const contract3 = new web3.eth.Contract(abiJson3, checkTokenPriceAddress);
//     //                 const balance3 =  contract3.methods.balanceOf(accounts[0]).call()
//     //                     .then(tokenBalance => {
//     //                         const calcTokenBal = (tokenBalance / (10 ** 18))
//     //                         // console.log("fromToken", calcTokenBal);
                        
//     //                         const tokenBalUsd = (calcTokenBal * Number(fromTokenPriceUsd)).toFixed(2)
//     //                         setTokenBalance(tokenBalUsd)
//     //                         setWalletTokenBalance(calcTokenBal)
//     //                     }).catch(
//     //                         err => {
//     //                             console.log("network error", err)
//     //                         }
//     //                     );
                
//     //             // }
            
//     //             })
//     //         }

//     // }, [fromToken])

        
    
    
    
    
//     useEffect(() => {
        
        

//         let provider = window.ethereum;
//         if (typeof provider !== 'undefined') {
//             provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
             
//                 setUserAccount(accounts)
                
//                 setPersistentLogin(accounts)
//                 // Web3.eth.getChainId().then(console.log);
//                 // console.log(accounts)
//                 accountChangedHandler(accounts[0]);
//                 // getUserBalance(accounts[0].toString());
//                 getChainID();
                
//                 // Maybe I should make this repeat every 15 secs
//                 // const interval = setInterval(() => {
                        
                  
                                
//                 // const dripFaucet = "0xFFE811714ab35360b67eE195acE7C10D93f89D8C";
//                 const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
//                 const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
//                 const holderAddress = "0x8894e0a0c962cb723c1976a4421c95949be2d4e3";
//                 const dripHolderAddress = "0x20f663cea80face82acdfa3aae6862d246ce0333";
                

//                 // just the `balanceOf()` is sufficient in this case
//                      const erc20TokenContractAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

//                 const abiJson = [
//                     { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
//                 ];

//                 //drip Faucet
//                 const abiJson2 = [
//                     { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "claimsAvailable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
//                 ];
//                 //This is for Drip Faucet
//                 //         const contract = new web3.eth.Contract(abiJson2, dripFaucet);
//                 //         const balance = contract.methods.claimsAvailable(accounts[0]).call()
//                 //             .then(busdBalance => {
//                 //                 console.log("this is it", busdBalance)
//                 //                 const calcBusdBal = (busdBalance / (10 ** 18))
//                 //                 const weiBusd = web3.utils.toWei(String(calcBusdBal), 'ether')
//                 //                 console.log("addressBalance", calcBusdBal);
//                 //                 setBusdBal(calcBusdBal)
//                 //             }).catch(
//                 //                 err => {
//                 //                     console.log("network error", err)
//                 //                 }
//                 // );
                
//                 const contract = new web3.eth.Contract(erc20TokenContractAbi, busdAddress);
//                         const balance = contract.methods.balanceOf(accounts[0]).call()
//                             .then(busdBalance => {
//                                 console.log("this is it", busdBalance)
//                                 const calcBusdBal = (busdBalance / (10 ** 18))
//                                 const weiBusd = web3.utils.toWei(String(calcBusdBal), 'ether')
//                                 console.log("addressBalance", calcBusdBal);
//                                 setBusdBal(calcBusdBal)
//                                 setBusdWeiBalance(busdBalance)
//                             }).catch(
//                                 err => {
//                                     console.log("network error", err)
//                                 }
//                             );
                      
//                         const contract3b = new web3.eth.Contract(erc20TokenContractAbi, usdtAddress);
//                         const balance3 = contract3b.methods.balanceOf(accounts[0]).call()
//                             .then(usdtBalance => {
//                                 console.log("this is it", usdtBalance)
//                                 const calcBusdBal3 = (usdtBalance / (10 ** 18))
//                                 const weiUsdt = web3.utils.toWei(String(calcBusdBal3), 'ether')
                                
//                                 //console.log("usdt addressBalance", weiUsdt);

//                                 setUsdtBalance(usdtBalance)
//                                 setUsdtWeiBalance(calcBusdBal3)
//                                 //console.log("here - UsdtBal", usdtBalance)
//                             }).catch(
//                                 err => {
//                                     console.log("network error", err)
//                                 }
//                             );
                

   
    
 







//                         const contract2 = new web3.eth.Contract(abiJson, dripHolderAddress);
//                         const balance2 = contract2.methods.balanceOf(accounts[0]).call()
//                             .then(dripBalance => {
//                                 const calcDripBal = (dripBalance/(10 ** 18))
//                                 console.log("dripBalance", calcDripBal);
//                                 setDripBal(calcDripBal)
//                             }).catch(
//                                 err => {
//                                     console.log("network error", err)
//                                 }
//                             );
//                         // const balance = await contract.methods.balanceOf(defaultAccount).call();
//                         // note that this number includes the decimal places (in case of BUSD, that's 18 decimal places)
//                     // }, 10000);
//                     // return () => clearInterval(interval); 
                
                          
                  

                    
                


                
       
//             }).catch(err => {
//                 console.log(err);
//                 if (err.code === -32603) {
//                     window.location.reload()
//                 } else if (err.code === 4001) {
//                     alert("User rejected the request. Please connect your wallet to continue")
//                 }
//             });
//         } else {
//             alert('Please install Metamask')
//         }

//         window.ethereum.on('accountsChanged', accountChangedHandler);
//         window.ethereum.on('chainChanged', chainChangedHandler)


        
        
//         // //tried to get bnb current price from pancakeswap api
//         // const web3 = new Web3
//         setLoading(true)
//         fetch('https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
//           .then((res) => res.json())
//           .then((data) => {
//             // setData(data)
//             //   setLoading(false)
                
//         })
//         fetch('https://api.pancakeswap.info/api/v2/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
//           .then((res) => res.json())
//           .then((data) => {
//                 setBusdData(data?.data?.price)
//                 setBusdLoading(false)
//                 console.log(data?.data?.price)
//           })
        
//         ////Tried to get Drip data from Coingecko
//           // fetch('https://api.coingecko.com/api/v3/simple/price?ids=drip-network&vs_currencies=usd')
//         // // https://api.drip.community/prices/
//         //   .then((res) => res.json())
//         //     .then((data) => {
//         //         setDripData(data["drip-network"]["usd"])
//         //         setDripLoading(false)
//         //         console.log("drip", data["drip-network"]["usd"])
//         // })
        
//         // const web3 = new Web3(provider);

//         //{  although I already have the chainID/NetworkId from Metamask, I just used this block of code
//         //to begin testing of web3 }

//         //Metamask however gives a warning of Deprecation on Console.log
//         //Block to get Id of Network connected to.        
//         const networkId = web3.eth.net.getId().then(netId => {
//             console.log("network", netId)
//         }).catch(
//             err => {
//                 console.log("network error", err)
//             }
//         );
//         // console.log("network", networkId);


        
//         setLoading(true)
        
//         //get price from oracle... chainlink is the most popular of them all
//         const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
//         const addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";
//         const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
//         priceFeed.methods.latestRoundData().call()
//             .then((roundData) => {
//                 // Do something with roundData
//                 const calcRoundData = (roundData.answer * 1) / (10 ** 8)
//                 setData(calcRoundData)
//                 setLoading(false)
//                 console.log("Latest Round Data", calcRoundData)
//             });

        
        
//         setChrtState({ loading: true });
//         const interval = setInterval(() => {
//             const apiUrl = `https://api.drip.community/prices`;
//             axios
//                 .get(apiUrl)
//                 .then((res) => {
                    
//                     // res.data.map(time_res => {
                    
                        
//                     //         // empTime.push(timeConverter(time_res["time"]))
//                     //         empValue.push(time_res["value"])
                        
//                     //         setChrtState({ loading: false });
//                     // } )

//                     console.log(res.data[2490].value)
//                     setChrtState({ drip: res.data[2490].value })
//                     setDripData(res.data[2490].value )
//                     setDripLoading(false)
//                 });
            
//             }, 10000);
//             return () => clearInterval(interval);  

        
        
        
        
        
//         //To get historical round data you must have valid ID for a latest round datas
//             // const aggregatorV3InterfaceABI2 = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
//             // const addr2 = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";
//             // const priceFeed2 = new web3.eth.Contract(aggregatorV3InterfaceABI2, addr2);
            
//             // // Valid roundId must be known. They are NOT incremental.
//             // let validId = BigInt("18446744073709554130");
            
//             // priceFeed2.methods.getRoundData(validId).call()
//             //     .then((historicalRoundData) => {
//             //         // Do something with price
//             //         console.log("Historical round data", historicalRoundData);
//             //     })
//         // to get token balance
//         // const tokBal = web3.eth.getBalance(defaultAccount)
//         // console.log(tokBal)
//         // console.log(defaultAccount)
        

//     }, []);



    
  


//     useEffect(async () => {
        
//         const fromTokenPriceAddress = fromToken?.address
//         const toTokenPriceAddress = toToken?.address
//         const fromAmount1 = Number(fromAmount)
//         const checkTokenPriceSymbol = toToken?.symbol
//         const userA = defaultAccount
//         // console.log(checkTokenPriceAddress) 

//         // fetchTokenPrice(checkTokenPriceAddress)


//         // fetchTokenPrice({ params: { address: checkTokenPriceAddress,  chain: "bsc" }, onSuccess: (price) => setFromTokenPriceUsd(price.usdPrice + " USDT/"+checkTokenPriceSymbol) })
//         // fetchTokenPrice({ params: { address: "0x6...361",  chain: "bsc" }, onSuccess: (price) => console.log(price) })
//         if (userA == null) return null

//         // setLoadingPrice(true)
        
//         // const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${checkTokenPriceSymbol}&vs_currencies=usd`;
//         const apiUrl = `https://api.1inch.exchange/v4.0/56/quote?fromTokenAddress=${fromTokenPriceAddress}&toTokenAddress=${toTokenPriceAddress}&amount=${fromAmount1}`;
//         await axios
//             .get(apiUrl)
//             .then((data) => {
//                 console.log("quote", data)
//                 setQuote({
//                     toTokenPrice: data?.data.toTokenAmount,
//                     quoteGas: data?.data.estimatedGas,
//                 })
//                 // setFromTokenPriceUsd(data.data?.data?.price)
//                 // setLoadingPrice(false)
               
//                 // console.log(checkTokenPriceSymbol, data[checkTokenPriceSymbol]["usd"])
//             })
//             .catch(
//                 err => {
//                     console.log("Quote error", err)
//                 }
//             );
        
//     }, [toToken, fromAmount])



//     // useEffect(() => {
//     //     const checkTokenPriceAddress = toToken?.address
//     //     const checkTokenPriceSymbol = toToken?.symbol
//     //     // console.log(checkTokenPriceAddress)
//     //     // fetchTokenPrice({ params: { address: checkTokenPriceAddress,  chain: "bsc" }, onSuccess: (price) => setToTokenPriceUsd(price.usdPrice + " USDT/"+checkTokenPriceSymbol) })
//     //     // fetchTokenPrice({ params: { address: "0x6...361",  chain: "bsc" }, onSuccess: (price) => console.log(price) })
//     //     const userA = await userAccount0
 
//     //     // fetchTokenPrice({ params: { address: checkTokenPriceAddress,  chain: "bsc" }, onSuccess: (price) => setFromTokenPriceUsd(price.usdPrice + " USDT/"+checkTokenPriceSymbol) })
//     //     // fetchTokenPrice({ params: { address: "0x6...361",  chain: "bsc" }, onSuccess: (price) => console.log(price) })
//     //     if (userA == null) return null

//     //     setToTokenLoadingPrice(true)
        
//     //     // const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${checkTokenPriceSymbol}&vs_currencies=usd`;
//     //     const apiUrl = `https://api.pancakeswap.info/api/v2/tokens/${checkTokenPriceAddress}`;
//     //     axios
//     //         .get(apiUrl)
//     //         .then((data) => {
//     //             console.log(data.data?.data)    
//     //             setToTokenPriceUsd(data.data?.data?.price)
//     //             setToTokenLoadingPrice(false)
               
//     //                 // console.log(checkTokenPriceSymbol, data[checkTokenPriceSymbol]["usd"])
//     //         })
//     //     // axios
//     //     //     .get(apiUrl)
//     //     //     .then((data) => {
//     //     //         console.log(data["data"][checkTokenPriceSymbol.toLowerCase()]['usd'], data["data"])    
//     //     //         setTokenBalance(data["data"][checkTokenPriceSymbol.toLowerCase()]['usd'])
//     //     //         setLoadingPrice(false)
               
//     //     //             // console.log(checkTokenPriceSymbol, data[checkTokenPriceSymbol]["usd"])
//     //     //     })
        
//     //     //So I decided to put all of this fetchin of user balanceOf into a function
                                
                


//     //         const abiJson3 = [
//     //             { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
//     //         ];
        
//     //             const contract3 = new web3.eth.Contract(abiJson3, checkTokenPriceAddress);
//     //             const balance3 = await contract3.methods.balanceOf(userA).call()
//     //                 .then(tokenBalance => {
//     //                     const calcTokenBal = (tokenBalance / (10 ** 18))
//     //                     // console.log("fromToken", calcTokenBal);
                        
//     //                     const tokenBalUsd = (calcTokenBal * Number(fromTokenPriceUsd)).toFixed(2)
//     //                     setToTokenBalance(tokenBalUsd)
//     //                     setWalletTokenBalance(calcTokenBal)
//     //                 }).catch(
//     //                     err => {
//     //                         console.log("network error", err)
//     //                     }
//     //                 );
                
        
            
        
 





//     // }, [toToken])



    
    
    
//     const accountChangedHandler = (newAccount) => {
//         setDefaultAccount(newAccount);
//         getUserBalance(newAccount.toString());
      
//     }
//     const getUserBalance = (address) => {
//         window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] }).then(balance => {
//             setUserBalance(Web3.utils.fromWei(balance, 'ether'))    
//         }).catch(err => {
//             console.log(err);
//             if (err.code === -32603) {
//                 window.location.reload()
//             }
//         });
//     }
//     const chainChangedHandler = () => {
//         window.location.reload()
//         // Web3.eth.getChainId().then(console.log);
//     }

//     // useEffect(() => {
//     //     window.location.reload()
//     // }, [userAccount]);
//     async function getChainID() {

//          chainId = await ethereum.request({ method: 'eth_chainId' }).then(chainSymbol => {
//              if (chainSymbol == 0x38 || chainSymbol == 0x56) {
//                  setUserChain('BNB')
//                  setUserNetworkName('Binance Smart Chain')
//              }else if(chainSymbol == 0x1){ 
//                  setUserChain('ETH')
//                  setUserNetworkName('Ethereum')
//              }
//              setUserChainId(chainSymbol)
//          });
         
         
//     }


//     async function swapBnbForUsdt() {
//         let provider = window.ethereum;
//         web3 = new Web3(provider);
                
//         // var pv = ""
//         // var pu = ""
//         // var Tx = require('ethereumjs-tx').Transaction;
//         // // var Web3 = require('web3')
//         // var Common = require('ethereumjs-common').default;

//         // var originalAmountToBuyWith = (fromAmount * Math.pow(10, 18)).toString();
//         var originalAmountToBuyWith = sellBnbFromAmount;
//         var bnbAmount = web3.utils.toWei(originalAmountToBuyWith, 'ether');
//         var amountToBuyWith = web3.utils.toHex(bnbAmount);
//         // var bnbAmount = web3.utils.toWei(originalAmountToBuyWith, 'ether');
//         // var amountToBuyWith = web3.utils.toHex(originalAmountToBuyWith);


//         var amountOutMin = '100' + Math.random().toString().slice(2,6);


//         var pancakeSwapAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//         var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//         let pancakeSwapContract = pancakeSwapRouterAddress.toLowerCase();
//         const pcsContract = new web3.eth.Contract(pancakeSwapAbi, pancakeSwapRouterAddress);

//         // var swap_web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
//         // var BSC_FORK = Common.forCustomChain(
//         //     'mainnet',
//         //     {
//         //         name: 'Binance Smart Chain Mainnet',
//         //         networkId: 56,
//         //         chainId: 56,
//         //         url: 'https://bsc-dataseed.binance.org/'
//         //     },
//         //     'istanbul',
//         // );


//         var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//         var USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
//         const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; //BUSD
//         // var gasPrice = 5000000000;
//         var dateTimestamp =  Date.now() + 1000 * 60 * 10

//         var swap = pcsContract.methods.swapExactETHForTokens( web3.utils.toHex(amountOutMin), [BNBTokenAddress, busdAddress], userAccount[0], dateTimestamp)
//         var encodedABI = swap.encodeABI()

//         var tx = {
//             from: userAccount[0],
//             to: pancakeSwapContract,
//             gas: 200000,
//             data: encodedABI,
//             value: amountToBuyWith
//         };

//         // var signedTx = await userAccount[0].signTransaction(tx)
//         var signedTx = await web3.eth.accounts.signTransaction(tx, process.env.NEXT_PUBLIC_PROVIDER)
//         console.log("process.env.REACT_APP_PROVIDER", process.env.REACT_APP_PROVIDER)
//         web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//             .on('transactionHash', (hash) => {
//                 setapproveLoadingSell(true) 
//                 console.log(hash);
//                 alert(`view on BscScan: https://bscscan.com/tx/${hash}`)
//                 }
//             )
//             .on('receipt', (receipt) => {
//                 alert(`Swap Successfull`);
//                 console.log(receipt);
//                 setapproveLoadingSell(false) 
//                 connect()
//             })
//         .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             setapproveLoadingSell(false) 
//             console.error("Error:", error, "Receipt:", receipt)
//             const eMsg = error.message;
//             alert(`Error: ${eMsg}`);
//         });
        
        
        
//     }

//     async function swapUsdtForBnb() {
//             let provider = window.ethereum;
//             web3 = new Web3(provider);
                    
//             // var pv = ""
//             // var pu = ""
//             // var Tx = require('ethereumjs-tx').Transaction;
//             // // var Web3 = require('web3')
//             // var Common = require('ethereumjs-common').default;

        
//         // var originalAmountToBuyWith = (buyBnbFromAmount * Math.pow(10,18)).toString();
//         var originalAmountToBuyWith = buyBnbFromAmount;
//             var bnbAmount = web3.utils.toWei(originalAmountToBuyWith, 'ether');
//             var amountToBuyWith = web3.utils.toHex(bnbAmount);
//             // console.log("amount", bnbAmount)

//             var amountOutMin2 = '100' + Math.random().toString().slice(2,6);
//             var amountOutMin = web3.utils.toWei(amountOutMin2, 'ether');

//             var pancakeSwapAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//             var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//             let pancakeSwapContract = pancakeSwapRouterAddress.toLowerCase();
//             const pcsContract = new web3.eth.Contract(pancakeSwapAbi, pancakeSwapRouterAddress);


//             // var swap_web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
//             // var BSC_FORK = Common.forCustomChain(
//             //     'mainnet',
//             //     {
//             //         name: 'Binance Smart Chain Mainnet',
//             //         networkId: 56,
//             //         chainId: 56,
//             //         url: 'https://bsc-dataseed.binance.org/'
//             //     },
//             //     'istanbul',
//             // );


//             var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//         var USDTokenAddress = "0x55d398326f99059fF775485246999027B3197955"; //USDT
//         const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; //BUSD
//             // var gasPrice = 5000000000;
//             var dateTimestamp =  Date.now() + 1000 * 60 * 20

        
        
                            
//             var tem = await pcsContract.methods
//             .getAmountsOut((originalAmountToBuyWith * Math.pow(10, 18)).toString(), [
//                 busdAddress,
//                 BNBTokenAddress
//             ])
//             .call();
        
//             const amountOutMin2b = tem[1] - (tem[1]/10);
// console.log("amountOutMin2b", amountOutMin2b)
//         // console.log("tem",tem[1] - (tem[1]/10),  tem[1] / Math.pow(10, 18));
        
        
//             var swap = pcsContract.methods.swapExactTokensForETH( amountToBuyWith, web3.utils.toHex(amountOutMin2b), [busdAddress, BNBTokenAddress], userAccount[0], dateTimestamp)
//             var encodedABI = swap.encodeABI()

//             var tx = {
//                 from: userAccount[0],
//                 to: pancakeSwapContract,
//                 gasLimit:web3.utils.toHex(290000),
//                 gas: 20000,
//                 data: encodedABI,
//                 value: web3.utils.toHex('0')
//             };

//             // "gasPrice":web3.utils.toHex(5000000000),
//             // "gasLimit":web3.utils.toHex(290000),
        
//             // var signedTx = await userAccount[0].signTransaction(tx)
        
        
//             // var signedTx = await web3.eth.accounts.signTransaction(tx, process.env.NEXT_PUBLIC_PROVIDER)
            
//             // web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//             //     .on('transactionHash', (hash) => {
//             //         // alert('Complete connection from Metamask window');
//             //         console.log(hash);
//             //     })
//             //     .on('confirmation', (confirmationNumber, receipt) => {
//             //         alert(`Swap Successfull ${receipt}`);
//             //         console.log(confirmationNumber, receipt);
//             //     })
//             //     .on('receipt', (receipt) => {
//             //         // alert(`Swap Successfull ${receipt}`);
//             //         console.log(receipt);
//             //     })
//             //     .on('error', function (error, receipt) {

//             //     // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             //     alert(`Swap NOT Successfull ${receipt}`);
//             //     console.error("Error:", error, "Receipt:", receipt)
//             // });
//              // var signedTx = await userAccount[0].signTransaction(tx)
//         var signedTx = await web3.eth.accounts.signTransaction(tx, process.env.NEXT_PUBLIC_PROVIDER)
//         console.log("process.env.REACT_APP_PROVIDER", process.env.REACT_APP_PROVIDER)
//         web3.eth.sendSignedTransaction(signedTx.rawTransaction)
//             .on('transactionHash', (hash) => {
//                 setapproveLoadingBuy(true) 
//                 console.log(hash);
//                 alert(`view on BscScan: https://bscscan.com/tx/${hash}`)
//                 }
//         )
//         .on('confirmation', (confirmationNumber, receipt) => {
                   
//                     console.log(confirmationNumber, receipt);
//                 })
//             .on('receipt', (receipt) => {

//                 alert(`Swap Successfull`);
//                 console.log(receipt);
//                 setapproveLoadingBuy(false) 
//                 connect()

//             })
//         .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
//             setapproveLoadingBuy(false) 
//             console.error("Error:", error, "Receipt:", receipt)
//             const eMsg = error.message;
//             alert(`Error: ${eMsg}`);
//         });
        
            
//         }

    
    
//     /**============ Direct Pair ==============**/
//   async function directPair() {
//     // var amt = (value * Math.pow(10, 18)).toString();
//     let provider = window.ethereum;
//       web3 = new Web3(provider);
      
      
//       var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//       // const maxUsdtBalance = await web3.utils.toWei(String(usdtBalance), 'ether')
//       var value = '403';

//       var toAddress2 = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//       var fromAddress2 = "0x55d398326f99059fF775485246999027B3197955"; //USDT

//       var amountOutMin2 = '100' + Math.random().toString().slice(2,6);
//       var amountOutMin = web3.utils.toWei(amountOutMin2, 'ether');

//       var pancakeSwapAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//       var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//       let pancakeSwapContract = pancakeSwapRouterAddress.toLowerCase();
//       const pancake = new web3.eth.Contract(pancakeSwapAbi, pancakeSwapRouterAddress);


//     var tem = await pancake.methods
//       .getAmountsOut((value * Math.pow(10, 18)).toString(), [
//         fromAddress2,
//         toAddress2
//       ])
//       .call();

//     console.log("tem", tem[1] / Math.pow(10, 18));
//     //setAmountOut((tem[1] / Math.pow(10, 18)).toString());
//     //return tem[1] / Math.pow(10, 18);
    
//   }
//     /**============ Direct Pair ==============**/
    


//     async function approvebutton() {
//          // Send ERC20 transaction with web3
//          let provider = window.ethereum;
//          web3 = new Web3(provider);
//         //  var pancakeSwapRouterAddress = Web3.utils.toChecksumAddress('0x10ed43c718714eb63d5aa57b78b54704e256024e');
//          var pancakeSwapRouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
//             // const maxUsdtBalance = await web3.utils.toWei(String(usdtBalance), 'ether')
//             const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
//         const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
//         var BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //BNB
//          const erc20TokenContractAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

//         const contract4 = new web3.eth.Contract(erc20TokenContractAbi, busdAddress);
//         const usdt2 = web3.utils.toHex(web3.utils.toWei(busdWeiBalance, 'ether'));
//         console.log("usdtBalance", usdt2)
//         setapproveLoading(true)

//             contract4.methods.approve(
//                 pancakeSwapRouterAddress, 
//                 usdt2 
            
//             ).send({from: userAccount[0]})
//             .once('transactionHash', (hash) => { console.log(hash); })
//                 .once('receipt', (receipt) => { console.log(receipt); setapproveLoading(false); setEnableBuyButton(true)  })
//         .catch(err => {
//             console.log(err);
//             if (err.code === -32603) {
//                 setapproveLoading(false) 
//                 window.location.reload()
//             } else if (err.code === 4001) {
//                 alert("User rejected the request. Please approve transaction to continue")
//                 setapproveLoading(false) 
//             }
//         });
//     }


//     //connect
//     function connect() {
//         if (persistentLogin !== null) {
//             setUserAccount(persistentLogin)
//             accountChangedHandler(persistentLogin);
//             getChainID();
//         } else {
//             ethereum
//                 .request({ method: 'eth_requestAccounts' })
//                 .then({accountChangedHandler})
//                 .catch((error) => {
//                     if (error.code === 4001) {
//                         // EIP-1193 userRejectedRequest error
//                         alert('User rejected the action. Please connect your wallet to continue');
//                     } else if (error.code === -32002) {
//                         alert('Complete connection from Metamask window');
//                     } else {
//                         console.error(error);
//                     }
//                 });
//         }
//     }
//     function disconnect() {
//         setUserAccount(null)
//       }
//     // cosnsole.log(chainId, userAccount)
//     if(userAccount !== null){
//         return (
//             <Flex
//                 h={[null,null,"100vh"]}
//                 flexDir={["column", "column", "row"]}
//                 overflow="hidden"
//                 maxW="2000px"

//             >
                
//                 <Flex
//                         w={["100%","100%","10%","15%","15%",]}
//                         flexDir="column"
//                         alignItems="center"
//                         backgroundColor="#001013"
//                         color="#B495B1"
//                 >
//                     <Flex
//                         flexDir="column"
//                         justifyContent="space-between"
//                         h={[null,null,"100vh"]}
                        
//                     >
//                         <Flex
//                             flexDir="column"
//                             as="nav"
                        
//                         >
//                             <Heading
//                                 mt={50}
//                                 mb={[25, 50, 100]}
//                                 fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
//                                 alignSelf="center"
//                                 letterSpacing="tight"
//                             >Mila.</Heading>
//                             <Flex
//                                 flexDir={["row", "row", "column", "column", "column"]}
//                                 align={["center", "center", "center", "flex-start", "flex-start"]}
//                                 justifyContent="center"
//                                 mb={[0, 0, 6, 6, 6]}
//                             >
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon as={FiHome} fontSize="2xl"  />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Home</Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon   as={FiDroplet} fontSize="2xl" className="active-icon" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text className="active">Dashboard </Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon  as={FiPieChart} fontSize="2xl" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Wallet</Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon  as={FiBox} fontSize="2xl" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Services</Text>

//                                     </Link>
//                                 </Flex>
//                             </Flex>
                          

//                         </Flex> 
//                         <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
//                                 <Avatar my={2} src="avatar-1.jpg" />
//                                 <Text textAlign="center">Ola Silva A.</Text>
//                         </Flex>
                        

//                     </Flex>
                    
//                 </Flex>
//                 {/* column 2 */}
//                 <Flex
//                     w={["100%","100%","60%","60%","55%",]}
//                     p="3%"
//                     flexDir="column"
//                     overflow="auto"
//                     minH="100vh"
//                 >
//                     <Heading fontWeight="normal">Wallet <Flex fontWeight="bold" display="inline-flex">Balance</Flex></Heading>
                    
//                     <Text fontWeight="bold" fontSize="2xl">{userBalance} {userChain}</Text>
//                     <Text color="gray" fontSize="sm">{isLoading ? "Loading" : "$" + (data * userBalance).toFixed(2)}</Text>
//                     {/* <Text color="gray" fontSize="sm">{isLoading? "Loading": "$"+(data?.data?.price  * userBalance).toFixed(2)}</Text> */}
                  
                    
//                     <Flex justifyContent="space-between" mt={8} align='center' >
                        
//                         <Text fontSize="sm" color="gray.700" fontWeight="bold">Drip/USDT: ${chrtState.drip}</Text>
//                         <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize='x-small' mr={0} onClick={()=>swapUsdtForBnb() }>24hr</Button>
//                         <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize='x-small' mr={0} onClick={()=>test() }>48hr</Button>
                        
//                     </Flex>
//                     <MyChart />
//                     <Flex justifyContent="space-between" mt={8}>
//                         <Flex align="flex-end">
//                             <Heading as="h2" size="lg" letterSpacing="Tight">Token Balances</Heading>
//                             <Text fontSize="sm" color="gray" ml={4}>Apr 2021</Text>
//                         </Flex>
//                         <IconButton icon={<FiCalendar />} />
                        
//                     </Flex>
//                     <Flex flexDir="column" fontSize="smaller"  >
//                             <Flex overflow="auto">
//                                 <Table variant="unstyled" mt={4}>
//                                     <Thead>
//                                         <Tr color="gray">
//                                             <Th>Token</Th>
//                                             <Th> Balance</Th>
                                          
//                                             <Th isNumeric> Decimals</Th>
//                                         </Tr>
//                                 </Thead>
//                                 <Tbody>
                                   
                                    
//                                     {display === 'show' && 
//                                         <>
//                                             <Tr>
//                                             <Td>
//                                                 <Flex align="center">
//                                                     <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                     <Flex flexDir="column">
//                                                         <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                         <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                     </Flex>
//                                                 </Flex>
//                                             </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                             </Tr><Tr>
//                                             <Td>
//                                                 <Flex align="center">
//                                                     <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                     <Flex flexDir="column">
//                                                         <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                         <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                     </Flex>
//                                                 </Flex>
//                                             </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                             </Tr><Tr>
//                                             <Td>
//                                                 <Flex align="center">
//                                                     <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                     <Flex flexDir="column">
//                                                         <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                         <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                     </Flex>
//                                                 </Flex>
//                                             </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                         </Tr>
//                                         </>
//                                     }
//                                     </Tbody>
//                                 </Table>
//                         </Flex>
//                         <Flex align="center">
//                             <Divider />
//                             <IconButton
//                                 icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
//                                 onClick={() => {
//                                     if (display == 'show') {
//                                         changeDisplay('none')
//                                     } else {
//                                         changeDisplay('show')
//                                     }
//                                 } 

//                                 } />
//                             <Divider />
//                         </Flex>
//                     </Flex>
                    
//                 </Flex>
//                 {/* column 3 */}
//                 <Flex
//                     w={["100%", "100%", "35%"]}
//                     minW={[null, null, "300px", "300px", "400px"]}
//                     bgColor="#F5F5F5"
//                     p="3%"
//                     flexDir="column"
//                     overflow="auto"
//                 >
//                     <Flex alignContent="center">
//                         <Button
//                             // bgGradient='linear(to-l, #7928CA, #FF0080)'
//                             id="button-connect-wallet"
//                             borderRadius="3xl"
//                             border='1px' w="100%"
//                             borderColor='gray.200'
//                             py="6"
//                             fontSize="sm"
//                             letterSpacing="wide"
//                             fontWeight="bold"
//                             onClick={() => disconnect()}
//                         >
//                             {defaultAccount}
//                         </Button>
                         
                    
//                     </Flex>
//                     <Flex alignContent="center">
//                         <Heading letterSpacing="tight" mt="5">Wallet</Heading>
                        
//                     </Flex>
//                     {value == 1 &&
//                             <Box
//                                 borderRadius="25px"
//                                 mt={4}
//                                 w="100%"
//                                 h="200px"
//                                 bgGradient="linear(to-t, #B57295, #29259A)"
//                                 boxShadow="md"
                                
                                
//                             >
//                             <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between" >
//                                 <Flex justify="space-between" w="100%" align="flex-start">
//                                     <Flex flexDir="column">
//                                         <Text color="gray.400">Current {userChain} Balance</Text>
//                                         <Text fontWeight="bold" fontSize="xl">{userBalance} {userChain}</Text>
//                                     </Flex>
//                                     <Flex align="center">
//                                         <Icon mr={2} as={FiCreditCard} />
//                                         <Text>Mila.</Text>
//                                     </Flex>
//                                 </Flex>
//                                 <Text mb={4}>{isLoading? "Loading": "$"+(data  * userBalance).toFixed(4)} - [${((data)*1).toFixed(4)}]</Text>
//                                 {/* <Text mb={4}>{isLoading? "Loading": "$"+(data?.data?.price  * userBalance).toFixed(2)} - [${((data?.data?.price)*1).toFixed(2)}]</Text> */}
//                                 <Flex align="flex-end" justify="space-between">
//                                     <Flex>
//                                         <Flex flexDir="column" mr={4}>
//                                             <Text textTransform="uppercase" color="#D8ABD8" fontSize="xs">Chain ID</Text>
//                                             <Text fontSize="sm"  fontWeight="semibold">{userChainId}</Text>
//                                         </Flex>
//                                         <Flex flexDir="column">
//                                             <Text textTransform="uppercase" fontSize="xs" color="#D8ABD8">Network Name</Text>
//                                             <Text fontSize="sm" fontWeight="semibold">{userNetworkName}</Text>
//                                         </Flex>
//                                     </Flex>
//                                     <Icon as={FiCreditCard} />
//                                 </Flex>
//                             </Flex>
//                             </Box>
//                     }
//                     {value == 2 &&
//                             <Box
//                                 borderRadius="25px"
//                                 mt={4}
//                                 w="100%"
//                                 h="200px"
//                                 bgGradient="linear(to-t, #1f306e, #f5487f)"
                                
//                             >
//                             <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between" >
//                                 <Flex justify="space-between" w="100%" align="flex-start">
//                                     <Flex flexDir="column">
//                                         <Text color="#CDFFF9">Current BUSD Balance</Text>
//                                         <Text fontWeight="bold" fontSize="xl">{busdBal}</Text>
//                                     </Flex>
//                                     <Flex align="center">
//                                         <Icon mr={2} as={FiCreditCard} />
//                                         <Text>Mila.</Text>
//                                     </Flex>
//                                 </Flex>
//                                 {/* <Text mb={4}>{busdIsLoading? "Loading": "$"+(busdData?.busdData?.price  * userBalance).toFixed(2)}</Text> */}
//                                 <Text mb={4}>{busdIsLoading? "Loading": "$"+parseFloat(busdData)}</Text>
//                                 <Flex align="flex-end" justify="space-between">
//                                     <Flex>
//                                         <Flex flexDir="column" mr={4}>
//                                             <Text textTransform="uppercase" color="#CDFFF9" fontSize="xs">Chain ID</Text>
//                                             <Text fontSize="sm"  fontWeight="semibold">{userChainId}</Text>
//                                         </Flex>
//                                         <Flex flexDir="column">
//                                             <Text textTransform="uppercase" fontSize="xs" color="#CDFFF9">Network Name</Text>
//                                             <Text fontSize="sm" fontWeight="semibold">{userNetworkName}</Text>
//                                         </Flex>
//                                     </Flex>
//                                     <Icon as={FiCreditCard} />
//                                 </Flex>
//                             </Flex>
//                             </Box>
//                     }
                    
//                       {value == 3 &&
//                             <Box
//                                 borderRadius="25px"
//                                 mt={4}
//                                 w="100%"
//                                 h="200px"
//                                 bgGradient="linear(to-t, orange.300, pink.600)"
                                
//                             >
//                             <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between" >
//                                 <Flex justify="space-between" w="100%" align="flex-start">
//                                     <Flex flexDir="column">
//                                         <Text color="gray.400">Current Drip Balance</Text>
//                                         <Text fontWeight="bold" fontSize="xl">{dripBal} Drip</Text>
                                        
//                                     </Flex>
//                                     <Flex align="center">
//                                         <Icon mr={2} as={FiCreditCard} />
//                                         <Text>Mila.</Text>
//                                     </Flex>
//                                 </Flex>
//                                 <Text mb={4}>{dripIsLoading? "Loading": "$"+parseFloat(dripData)*dripBal}</Text>
//                                 <Flex align="flex-end" justify="space-between">
//                                     <Flex>
//                                         <Flex flexDir="column" mr={4}>
//                                             <Text textTransform="uppercase" fontSize="xs">Drip Price</Text>
//                                             <Text fontSize="lg">{dripIsLoading? "Loading": "$"+parseFloat(dripData)}</Text>
//                                         </Flex>
//                                         <Flex flexDir="column">
//                                             <Text textTransform="uppercase" fontSize="xs">CW</Text>
//                                             <Text fontSize="lg">***</Text>
//                                         </Flex>
//                                     </Flex>
//                                     <Icon as={FiCreditCard} />
//                                 </Flex>
//                             </Flex>
//                             </Box>
//                     }
//                     <Flex justifyContent="center" mt={2}>
//                         <Button bgColor={value == 1 ? "gray.600" : 'gray.400'} onClick={() => changeValue(1)} size="xs" mx={1}/>
//                         <Button bgColor={value == 2 ? "gray.600" : 'gray.400'} onClick={() => changeValue(2)} size="xs" mx={1}/>
//                         <Button bgColor={value == 3 ? "gray.600" : 'gray.400'} onClick={() => changeValue(3)} size="xs" mx={1}/>
//                     </Flex>
                    
                  
//                     <Box bg="#ffffff" p={4} mt={8} borderRadius="20px" border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" >
//                             <Flex flexDir="column">
//                                 <Flex flexDir="row" justifyContent="space-between">
//                                     <Flex flexDir="column"  ><Text fontWeight="medium">Sell WBNB</Text>
//                                         <Text fontWeight="medium"  fontSize={'x-small'} color="#9E6596">Get USDT</Text>
//                                     </Flex>
                                
                                    
//                                     <Flex flexDir="row" align="center" >
//                                         <Flex flexDir="column" >
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end" color="gray.500">
//                                    WBNB Bal:
                                   
//                                         </Text><Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                     {loadingUsdtPrice? "Loading": userBalance}
                                   
//                                         </Text>
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                         {/* {loadingPrice? "Loading": "$"+tokenBalance} */}
//                                         </Text>
//                                         </Flex>
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize="sm"
//                                         onClick={() => {setSellBnbFromAmount(userBalance)}}>max</Button>
//                                     </Flex>
//                                 </Flex>
                                
//                                 <Flex flexDir="row" p={6} mt={4} borderRadius="20px" bgColor="gray.200" align="center" justify="space-between">
                                  
//                                         <Input
//                                             placeholder="0.0"
//                                             w="100%"
//                                             _hover={{
//                                                 border: '0px'
//                                             }}
//                                             onChange={handleSellBnbFromAmountChange}
//                                             // value={fromAmount}
//                                             value={sellBnbFromAmount? sellBnbFromAmount:""}
//                                         />
                                    
                                        
                                
                                    
                                   
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                 <Text fontSize="xs" fontWeight="bold" >{fromTokenPriceUsd}</Text>
                                  
//                                 </Flex>
                                
//                                 <Flex align="center" mt={3}>
//                                     <Divider />
                                    
//                                     <Divider />
//                                 </Flex>
                            
                               
//                                 <Flex flexDir="column" justifyContent="flex-end" align={'flex-end'}>
//                                     <Text fontSize="xs" fontWeight="bold" >BUSD Balance: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >{busdBal}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
//                               <Flex flexDir="row" w={"100%"}  justifyContent="flex-end">
                             
//                                 <Button
//                                     w={"50%"}
//                                     py={5}
//                                     borderRadius="15px"
//                                     bgColor="#dc35464b"
//                                     isDisabled={sellButtonDisabled == true}
//                                     mt={5}
//                                     onClick={() => swapBnbForUsdt()}
//                                     isLoading={approveLoadingSell} 
//                                     // disabled
//                                 >Sell WBNB</Button>
//                               </Flex>
//                             </Flex>
//                             <Flex>
                            
//                             </Flex>
//                         </Box>
//                     <Box align={'center'} >
//                         <Skeleton isLoaded={!loadingSB}>
                            
//                     <Flex bg="#f9f9f9" p={4} borderRadius="20px" borderTopRadius="0px" w={'90%'} border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" justifyContent={'space-between'} >
//                             <Flex flexDir="row" justifyContent={'space-between'} w={'100%'}>
//                               <Flex flexDir="column" justifyContent="flex-start" align={'flex-start'}>
//                                     <Text fontSize="xs" fontWeight="bold" color="gray.500">Spend BNB: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >{sellBnbFromAmount}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
//                                 <Flex flexDir="column" justifyContent="flex-end" align={'flex-end'}>
//                                     <Text fontSize="xs" fontWeight="bold"  color="gray.500">Get USDT: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >~{sellBnbExpectedAmount}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
                          
//                             </Flex>
                           
                            
//                             </Flex>
//                             </Skeleton>
//                     </Box>
                    
//                     <Box bg="#ffffff" p={4} mt={8} borderRadius="20px" border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" >
//                             <Flex flexDir="column">
//                                 <Flex flexDir="row" justifyContent="space-between">
//                                     <Flex flexDir="column"  ><Text fontWeight="medium">Buy WBNB</Text>
//                                         <Text fontWeight="medium" fontSize={'x-small'} color="#9E6596">sell USDT</Text>
//                                     </Flex>
//                                     <Flex flexDir="row" align="center" >
//                                         <Flex flexDir="column" >
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end" color="gray.500">
//                                    USDT Bal:
                                   
//                                         </Text><Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                     {loadingUsdtPrice? "Loading": busdBal}
                                   
//                                         </Text>
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                         {/* {loadingPrice? "Loading": "$"+tokenBalance} */}
//                                         </Text>
//                                         </Flex>
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize="sm"
//                                         onClick={() => {setBuyBnbFromAmount(busdBal) }}>max</Button>
//                                     </Flex>
//                                 </Flex>
                                
//                                 <Flex flexDir="row" p={6} mt={4} borderRadius="20px" bgColor="gray.200" align="center" justify="space-between">
                                  
//                                         <Input
//                                             placeholder="0.0"
//                                             w="100%"
//                                             _hover={{
//                                                 border: '0px'
//                                             }}
//                                             onChange={handleBuyBnbFromAmountChange}
//                                             // value={fromAmount}
//                                             // value={toAmount? toAmount:""}
//                                             value={buyBnbFromAmount? buyBnbFromAmount:""}
//                                         />
                                    
                                        
                                
                                    
                                   
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                 <Text fontSize="xs" fontWeight="bold" >{fromTokenPriceUsd}</Text>
                                  
//                                 </Flex>
                                
//                                 <Flex align="center" mt={3}>
//                                     <Divider />
                                    
//                                     <Divider />
//                                 </Flex>
                            
                               
//                                 <Flex flexDir="column" justifyContent="flex-end" align={'flex-end'}>
//                                     <Text fontSize="xs" fontWeight="bold" >WBNB Bal: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >{userBalance}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
//                               <Flex flexDir="row" w={"100%"}  justifyContent="flex-end">
//                                 {/* <Button
//                                     w={"50%"}
//                                     py={5}
//                                     borderRadius="15px"
//                                     bgColor="#dc35464b"
//                                     isDisabled={enableBuyButton == true}
//                                     mt={5}
//                                     // onClick={() => trySwap(currentTrade)}
//                                     onClick={() => approvebutton()}
//                                     // rightIcon={<ArrowForwardIcon />} 
//                                     mr={10}
//                                     isLoading={approveLoading} 
//                             >Approve</Button> */}
//                                 <Button
//                                     w={"50%"}
//                                     py={5}
//                                     borderRadius="15px"
//                                     bgColor="#dc35464b"
//                                     isDisabled={buyButtonDisabled == true}
//                                     mt={5}
//                                     onClick={() => swapUsdtForBnb()}
//                                     isLoading={approveLoadingBuy} 
                                    
//                                     // disabled
//                                 >Buy WBNB</Button>
//                               </Flex>
//                             </Flex>
//                             <Flex>
                            
//                             </Flex>
//                         </Box>
//                         <Box align={'center'} >
//                         <Skeleton isLoaded={!loadingSB}>
                            
//                     <Flex bg="#f9f9f9" p={4} borderRadius="20px" borderTopRadius="0px" w={'90%'} border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" justifyContent={'space-between'} >
//                             <Flex flexDir="row" justifyContent={'space-between'} w={'100%'}>
//                               <Flex flexDir="column" justifyContent="flex-start" align={'flex-start'}>
//                                     <Text fontSize="xs" fontWeight="bold" color="gray.500">Spend BUSD: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >{buyBnbFromAmount}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
//                                 <Flex flexDir="column" justifyContent="flex-end" align={'flex-end'}>
//                                     <Text fontSize="xs" fontWeight="bold"  color="gray.500">Get BNB: </Text>
//                                     <Text fontSize="xs" fontWeight="bold" >~{buyBnbExpectedAmount}</Text>
//                                     {/* <Text fontSize="xs" fontWeight="bold" >{usdtBalance}</Text> */}
                                  
//                                 </Flex>
                          
//                             </Flex>
                           
                            
//                             </Flex>
//                             </Skeleton>
//                     </Box>
                    
//                         <Box bg="#ffffff" p={4} mt={8} borderRadius="20px" border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" >
//                             <Flex flexDir="column">
//                                 <Flex flexDir="row" justifyContent="space-between">
//                                     <Text fontWeight="medium">Swap</Text>
                                    
//                                     <Flex flexDir="row" align="center" >
//                                         <Flex flexDir="column" >
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                     {loadingPrice? "Loading": walletTokenBalance}
                                   
//                                         </Text>
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end">
//                                         {/* {loadingPrice? "Loading": "$"+tokenBalance} */}
//                                         </Text>
//                                         </Flex>
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize="sm"
//                                         onClick={() => {setFromAmount(walletTokenBalance) }}>max</Button>
//                                     </Flex>
//                                 </Flex>
                                
//                                 <Flex flexDir="row" p={6} mt={4} borderRadius="20px" bgColor="gray.200" align="center" justify="space-between">
                                  
//                                         <Input
//                                             placeholder="0.0"
//                                             w="50%"
//                                             _hover={{
//                                                 border: '0px'
//                                             }}
//                                             onChange={handleFromAmountChange}
//                                             // value={fromAmount}
//                                             value={fromAmount? fromAmount:""}
//                                         />
                                    
                                        
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" fontSize="sm" onClick={() => setFromModalActive(true)}>
//                                             {/* <Icon as={FiDroplet} mx={3} /> */}
//                                             {fromToken ? (
//                 <img
//                   src={fromToken?.logoURI || "https://etherscan.io/images/main/empty-token.png"}
//                   alt="nologo"
//                   width="30px"
//                   preview={false}
//                                                 style={{ borderRadius: "15px", paddingRight:"5px" }}
//                 />
//               ) : (
//                 <span>Select a token</span>
//               )}
//                                             <span pl="5px"> {fromToken?.symbol}</span>
//                                             <Icon as={FiChevronDown} mx={3} />
                                    
//                                             </Button>
                                    
                                   
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                 <Text fontSize="xs" fontWeight="bold" >{fromTokenPriceUsd}</Text>
                                  
//                                 </Flex>
                                
//                                 <Flex align="center" mt={3}>
//                                     <Divider />
//                                     <IconButton
//                                         icon={<><FiChevronUp /> <FiChevronDown /></>}
//                                         onClick={() => {
//                                             if (swap == 'fromto') {
//                                                 swapChange('tofrom')
//                                             } else {
//                                                 swapChange('fromto')
//                                             }
//                                         }

//                                         } />
                                
//                                     {/* <IconButton
//                                     icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
//                                     onClick={() => {
//                                         if (display == 'show') {
//                                             changeDisplay('none')
//                                         } else {
//                                             changeDisplay('show')
//                                         }
//                                     }

//                                     } /> */}
//                                     <Divider />
//                                 </Flex>
                            
//                                 <Flex flexDir="row" p={6} mt={3} borderRadius="20px" bgColor="gray.200" align="center"  justify="space-between">
//                                     <Input
//                                         placeholder="0.0"
//                                         w="50%"
//                                         _hover={{
//                                             border: '0px'
//                                         }}
//                                         // value={quote ? Moralis.Units.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals).toFixed(6) : ""}
//                                         value={quote ? quote.toTokenPrice : ""}
                                    

//                                     />
                                
//         <Button borderRadius="20px" boxShadow="xl" w="auto" fontSize="sm" onClick={() => setToModalActive(true)}>
//         {toToken ? (
//                 <img
//                   src={toToken?.logoURI || "https://etherscan.io/images/main/empty-token.png"}
//                   alt="nologo"
//                   width="30px"
//                   preview={false}
//                                                 style={{ borderRadius: "15px", paddingRight:"5px" }}
//                 />
//               ) : (
//                 <span>Select a token</span>
//               )}
//                                     <span> {toToken?.symbol}</span>
//             <Icon as={FiChevronDown} mx={2} />
            
//         </Button>
                                    
                                
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                     <Text fontSize="xs" fontWeight="bold" >toTokenPriceUsd</Text>
                                  
//                                 </Flex>
                              
//                                 <Button
//                                     py={5}
//                                     borderRadius="15px"
//                                     bgColor="#dc35464b"
//                                     // isDisabled={buttonEnable}
//                                     mt={5}
//                                     // onClick={() => trySwap(currentTrade)}
//                                 >Swap</Button>
                              
//                             </Flex>
//                             <Flex>
                            
//                             </Flex>
//                         </Box>
//                     {(dexTuggle && (swap == "fromto")) &&
//                         <Box bg="#ffffff" p={4} mt={8} borderRadius="20px" border='0px' borderColor="#dc35464b" boxShadow="xl" color="gray.700" >
//                             <Flex flexDir="column">
//                                 <Flex flexDir="row" justifyContent="space-between">
//                                     <Text fontWeight="medium">Swap2</Text>
                                    
//                                     <Flex flexDir="row" align="center" >
//                                         <Flex flexDir="column" >
//                                         <Text fontSize="xs" fontWeight="bold" mx="2" align="end">walletTokenBalance</Text>
//                                             <Text fontSize="xs" fontWeight="bold" mx="2" align="end">tokenBalance</Text>
//                                         </Flex>
//                                         <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline"  fontSize="sm" >max</Button>
//                                     </Flex>
//                                 </Flex>
                                
//                                 <Flex flexDir="row" p={6} mt={4} borderRadius="20px" bgColor="gray.200" align="center" justify="space-between">
                                  
//                                         <Input
//                                             placeholder="0.0"
//                                             w="50%"
//                                             _hover={{
//                                                 border: '0px'
//                                             }}
//                                             // onChange={handleFromAmountChange}
//                                             // value={fromAmount}
//                                             // value={fromAmount? fromAmount:0}
//                                         />
                                    
                                        
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" fontSize="sm" onClick={() => setFromModalActive(true)}>
//                                             {/* <Icon as={FiDroplet} mx={3} /> */}
//                                             {fromToken ? (
//                 <img
//                   src={fromToken?.logoURI || "https://etherscan.io/images/main/empty-token.png"}
//                   alt="nologo"
//                   width="30px"
//                   preview={false}
//                                                 style={{ borderRadius: "15px", paddingRight:"5px" }}
//                 />
//               ) : (
//                 <span>Select a token</span>
//               )}
//                                         <span pl="5px"> {fromToken?.symbol}</span>
//                                             <Icon as={FiChevronDown} mx={3} />
                                    
//                                             </Button>
                                    
                                   
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                     <Text fontSize="xs" fontWeight="bold" >fromTokenPriceUsd</Text>
                                  
//                                 </Flex>
                                
//                                 <Flex align="center" mt={3}>
//                                     <Divider />
//                                     <IconButton
//                                         icon={<><FiChevronUp /> <FiChevronDown /></>}
//                                         onClick={() => {
//                                             if (swap == 'fromto') {
//                                                 swapChange('tofrom')
//                                             } else {
//                                                 swapChange('fromto')
//                                             }
//                                         }

//                                         } />
                                
//                                     {/* <IconButton
//                                     icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
//                                     onClick={() => {
//                                         if (display == 'show') {
//                                             changeDisplay('none')
//                                         } else {
//                                             changeDisplay('show')
//                                         }
//                                     }

//                                     } /> */}
//                                     <Divider />
//                                 </Flex>
                            
//                                 <Flex flexDir="row" p={6} mt={3} borderRadius="20px" bgColor="gray.200" align="center"  justify="space-between">
//                                     <Input
//                                         placeholder="0.0"
//                                         w="50%"
//                                         _hover={{
//                                             border: '0px'
//                                         }}
//                                         // value={quote ? Moralis.Units.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals).toFixed(6) : ""}

//                                     />
                                
//         <Button borderRadius="20px" boxShadow="xl" w="auto" fontSize="sm" onClick={() => setToModalActive(true)}>
      
//               <span> toToken?.symbol</span>
//             <Icon as={FiChevronDown} mx={2} />
            
//         </Button>
                                    
                                
//                                 </Flex>
//                                 <Flex flexDir="row" justifyContent="flex-end">
//                                     <Text fontSize="xs" fontWeight="bold" >toTokenPriceUsd</Text>
                                  
//                                 </Flex>
                              
//                                 <Button
//                                     py={5}
//                                     borderRadius="15px"
//                                     bgColor="#dc35464b"
//                                     // isDisabled={buttonEnable}
//                                     mt={5}
//                                     // onClick={() => trySwap(currentTrade)}
//                                 >Swap</Button>
                              
//                             </Flex>
//                             <Flex>
                            
//                             </Flex>
//                         </Box>
//                     }
//                     {(dexTuggle && (swap === "tofrom"))  &&
//                     <Box bg="#ffffff" p={4} mt={8} borderRadius="20px" border='0px' borderColor="#dc35464b" boxShadow="xl">
//                             <Flex flexDir="column">
//                                 <Text fontWeight="medium">Swap</Text>
//                                 <Flex flexDir="row" p={6} mt={4} borderRadius="20px" bgColor="gray.200" align="center" justify="space-between">
                                  
//                                         <Input
//                                         placeholder="0.0"
//                                         w="50%"
//                                         _hover={{
//                                              border: '0px'
//                                             }}
                                       
//                                         />
                                    
                                        
//                                     <Button borderRadius="20px" w="auto" boxShadow="xl" fontSize="sm" onClick={() => setToModalActive(true)}>
//                                             {/* <Icon as={FiDroplet} mx={3} /> */}
//                                             {toToken ? (
//                                                 <img
//                                                 src={toToken?.logoURI || "https://etherscan.io/images/main/empty-token.png"}
//                                                 alt="nologo"
//                                                 width="30px"
//                                                 preview={false}
//                                                 style={{ borderRadius: "15px", paddingRight:"5px" }}
//                                                 />
//                                             ) : (
//                                                 <span>Select a token</span>
//                                             )}
//                                             <span pl="5px"> toToken?.symbol</span>
//                                             <Icon as={FiChevronDown} mx={3} />
                                    
//                                             </Button>
                                           
                                   
//                                 </Flex>
//                                 <Flex align="center" mt={3}>
//                                     <Divider />
//                                     <IconButton
//                                         icon={<><FiChevronUp /> <FiChevronDown /></>}
//                                         onClick={() => {
//                                             if (swap == 'fromto') {
//                                                 swapChange('tofrom')
//                                             } else {
//                                                 swapChange('fromto')
//                                             }
//                                         }

//                                         } />
                                
//                                     {/* <IconButton
//                                     icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
//                                     onClick={() => {
//                                         if (display == 'show') {
//                                             changeDisplay('none')
//                                         } else {
//                                             changeDisplay('show')
//                                         }
//                                     }

//                                     } /> */}
//                                     <Divider />
//                                 </Flex>
                            
//                                 <Flex flexDir="row" p={6} mt={3} borderRadius="20px" bgColor="gray.200" align="center"  justify="space-between">
//                                     <Input
//                                         placeholder="0.0"
//                                         w="50%"
//                                         _hover={{
//                                             border: '0px'
//                                         }}
                                        

//                                     />
                                
//         <Button borderRadius="20px" boxShadow="xl" w="auto" fontSize="sm" onClick={() => setFromModalActive(true)}>
//         {fromToken ? (
//                 <img
//                   src={fromToken?.logoURI || "https://etherscan.io/images/main/empty-token.png"}
//                   alt="nologo"
//                   width="30px"
//                   preview={false}
//                                                 style={{ borderRadius: "15px", paddingRight:"5px" }}
//                 />
//               ) : (
//                 <span>Select a token</span>
//               )}
//                                         <span> {fromToken?.symbol}</span>
//             <Icon as={FiChevronDown} mx={2} />
            
//         </Button>
                                    
                                
//                                 </Flex>
//                                 <Button py={5} borderRadius="15px" bgColor="#dc35464b" mt={5}>Swap</Button>
//                             </Flex>
//                             <Flex>
                            
//                             </Flex>
//                         </Box>
//                     }
                   
                   
//                     <Heading size="sm" letterSpacing="tight" my={4} mt={8}>Send money to</Heading>
//                     <Flex>
//                         <AvatarGroup size="md" max={3}>
//                             <Avatar src="avatar-1.jpg"/>
//                             <Avatar src="avatar-1.jpg"/>
//                             <Avatar src="avatar-1.jpg"/>
//                             <Avatar src="avatar-1.jpg"/>
//                             <Avatar src="avatar-1.jpg"/>
//                             <Avatar icon={<FiPlus />} ml="2" color="fff" bgColor="gray.300" />
//                         </AvatarGroup>
//                     </Flex>
//                     <Text color="gray" mt={10} mb={2}>Card Number</Text>
//                     <InputGroup>
//                         <InputLeftElement pointerEvents="none"> 
                            
//                             <FiCreditCard color="gray.700"/>
//                         </InputLeftElement> 
//                         <Input type="number" placeholder="**** **** **** ****"/>
//                     </InputGroup>
//                     <Text color="gray" mt={2} mb={2}>Sum</Text>
//                     <InputGroup>
//                         <InputLeftElement pointerEvents="none"> 
                           
//                              <FiCreditCard color="gray.700"/>
//                         </InputLeftElement> 
//                         <Input type="number" placeholder="1300.00"/>
//                     </InputGroup>
//                     <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius="15">Send Money</Button>
//                 </Flex>
                        
          
//                 <InchModal
//                     open={isFromModalActive}
//                     onClose={() => setFromModalActive(false)}
//                     setToken={setFromToken}
//                     tokenList={tokenList}
//                     />    
                        
//                     <InchModal
//                     open={isToModalActive}
//                     onClose={() => setToModalActive(false)}
//                     setToken={setToToken}
//                     tokenList={tokenList}
//                     />    
              
//             </Flex>
            
//         )
//     } 
//     return (
//             <Flex
//                 h={[null,null,"100vh"]}
//                 flexDir={["column", "column", "row"]}
//                 overflow="hidden"
//                 maxW="2000px"

//             >
//                 <Flex
//                     w={["100%","100%","10%","15%","15%",]}
//                     flexDir="column"
//                     alignItems="center"
//                     backgroundColor="#001013"
//                     color="#B495B1"
//                 >
//                     <Flex
//                         flexDir="column"
//                         justifyContent="space-between"
//                         h={[null,null,"100vh"]}
                        
//                     >
//                         <Flex
//                             flexDir="column"
//                             as="nav"
                        
//                         >
//                             <Heading
//                                 mt={50}
//                                 mb={[25, 50, 100]}
//                                 fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
//                                 alignSelf="center"
//                                 letterSpacing="tight"
//                             >Mila.</Heading>
//                             <Flex
//                                 flexDir={["row", "row", "column", "column", "column"]}
//                                 align={["center", "center", "center", "flex-start", "flex-start"]}
//                                 justifyContent="center"
//                                 mb={[0, 0, 6, 6, 6]}
//                             >
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon as={FiHome} fontSize="2xl"  />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Home</Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon   as={FiDroplet} fontSize="2xl" className="active-icon" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text className="active">Dashboard</Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon  as={FiPieChart} fontSize="2xl" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Wallet</Text>

//                                     </Link>
//                                 </Flex>
//                                 <Flex className="sidebar-items"  mr={[2, 6, 0, 0, 0]}  mb={[0, 0, 6, 6, 6]}>
//                                     <Link display={["none", "none", "flex", "flex", "flex"]} >
//                                         <Icon  as={FiBox} fontSize="2xl" />
//                                     </Link>
//                                     <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
//                                         <Text>Services</Text>

//                                     </Link>
//                                 </Flex>
//                             </Flex>

//                         </Flex>
//                         <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
//                             <Avatar my={2} src="avatar-1.jpg" />
//                             <Text textAlign="center">Ola Silva A.</Text>
//                         </Flex>
                        

//                     </Flex>
                    
//                 </Flex>
//                 {/* column 2 */}
//                 <Flex
//                          w={["100%","100%","60%","60%","55%",]}
//                     p="3%"
//                     flexDir="column"
//                     overflow="auto"
//                     minH="100vh"
//                 >
//                     <Heading fontWeight="normal">Milala, <Flex fontWeight="bold" display="inline-flex">Blockchain.</Flex></Heading>
//                     <Text color="gray" fontSize="sm">Invest in African Businesses from anywhere</Text>
//                 <Text fontWeight="bold" fontSize="2xl">Connect Wallet</Text>
//                 <Flex justifyContent="space-between" mt={8} align='center' >
                        
//                         <Text fontSize="sm" color="gray.700" fontWeight="bold">Drip/USDT: ${chrtState.drip}</Text>
//                         <Button borderRadius="20px" w="auto" boxShadow="xl" variant="outline" fontSize='x-small' mr={0} >24hr</Button>
                        
//                     </Flex>
//                  <MyChart />
//                     <Flex justifyContent="space-between" mt={8}>
//                         <Flex align="flex-end">
//                             <Heading as="h2" size="lg" letterSpacing="Tight">Transactions</Heading>
//                             <Text fontSize="sm" color="gray" ml={4}>Apr 2021</Text>
//                         </Flex>
//                         <IconButton icon={<FiCalendar />} />
                        
//                     </Flex>
//                     <Flex flexDir="column" fontSize="smaller">
//                         <Flex overflow="auto">
//                             <Table variant="unstyled" mt={4}>
//                                 <Thead>
//                                     <Tr color="gray">
//                                         <Th> Name of Transation</Th>
//                                         <Th> Category</Th>
//                                         <Th isNumeric> Cashback</Th>
//                                         <Th isNumeric> Amount</Th>
//                                     </Tr>
//                                 </Thead>
//                                 <Tbody>
//                                     <Tr>
//                                         <Td>
//                                             <Flex align="center">
//                                                 <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                 <Flex flexDir="column">
//                                                     <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                     <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                 </Flex>
//                                             </Flex>
//                                         </Td>
//                                         <Td>  Electronic Devices </Td>
//                                         <Td isNumeric> +2$</Td>
//                                         <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                     </Tr><Tr>
//                                         <Td>
//                                             <Flex align="center">
//                                                 <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                 <Flex flexDir="column">
//                                                     <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                     <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                 </Flex>
//                                             </Flex>
//                                         </Td>
//                                         <Td>  Electronic Devices </Td>
//                                         <Td isNumeric> +2$</Td>
//                                         <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                     </Tr><Tr>
//                                         <Td>
//                                             <Flex align="center">
//                                                 <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                 <Flex flexDir="column">
//                                                     <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                     <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                 </Flex>
//                                             </Flex>
//                                         </Td>
//                                         <Td>  Electronic Devices </Td>
//                                         <Td isNumeric> +2$</Td>
//                                         <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                     </Tr>
//                                     {display === 'show' &&
//                                         <>
//                                             <Tr>
//                                                 <Td>
//                                                     <Flex align="center">
//                                                         <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                         <Flex flexDir="column">
//                                                             <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                             <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                         </Flex>
//                                                     </Flex>
//                                                 </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                             </Tr><Tr>
//                                                 <Td>
//                                                     <Flex align="center">
//                                                         <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                         <Flex flexDir="column">
//                                                             <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                             <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                         </Flex>
//                                                     </Flex>
//                                                 </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                             </Tr><Tr>
//                                                 <Td>
//                                                     <Flex align="center">
//                                                         <Avatar size="sm" mr={2} src="avatar-1.jpg" />
//                                                         <Flex flexDir="column">
//                                                             <Heading size="sm" letterSpacing="tight">Amazon</Heading>
//                                                             <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
//                                                         </Flex>
//                                                     </Flex>
//                                                 </Td>
//                                                 <Td>  Electronic Devices </Td>
//                                                 <Td isNumeric> +2$</Td>
//                                                 <Td isNumeric> <Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
//                                             </Tr>
//                                         </>
//                                     }
//                                 </Tbody>
//                             </Table>
//                         </Flex>
//                         <Flex align="center">
//                             <Divider />
//                             <IconButton
//                                 icon={display === 'show' ? <FiChevronUp /> : <FiChevronDown />}
//                                 onClick={() => {
//                                     if (display == 'show') {
//                                         changeDisplay('none')
//                                     } else {
//                                         changeDisplay('show')
//                                     }
//                                 }

//                                 } />
//                             <Divider />
//                         </Flex>
//                     </Flex>
                    
//                 </Flex>
//                 {/* column 3 */}
//                 <Flex
//                          w={["100%", "100%", "35%"]}
//                     minW={[null, null, "300px", "300px", "400px"]}
//                     bgColor="#F5F5F5"
//                     p="3%"
//                     flexDir="column"
//                     overflow="auto"
//                 >
//                     <Flex alignContent="center">
//                         <Button
//                             // bgGradient='linear(to-l, #7928CA, #FF0080)'
//                             id="button-connect-wallet"
//                             borderRadius="3xl"
//                             border='1px' w="100%"
//                             borderColor='gray.200'
//                             py="6"
//                             fontSize="sm"
//                             letterSpacing="wide"
//                         fontWeight="bold"
//                             onClick={() => connect()}
//                             // isLoading={isAuthenticating} onClick={() => authenticate()}
//                         >
//                             Connect Wallet
//                          </Button>
                         

                    
//                     </Flex>
//                     <Flex alignContent="center" >
                    
//                     </Flex>
                
                        
//                 </Flex>

//             </Flex>
//     )
    
    
// }




