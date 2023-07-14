import { useEffect, useState } from "react";
// import { useMoralis } from "react-moralis";
import axios from 'axios';

let token_list;

const useInchDex = (chain) => {
  // const { Moralis, account, enableWeb3 } = useMoralis();
  const [tokenList, setTokenlist] = useState();
  const [swapComplete, setSwapComplete] = useState();
 
  useEffect( async() => {
    // enableWeb3();
    // if (!Moralis?.["Plugins"]?.["oneInch"]) return null;

    // await Moralis.Plugins.oneInch.getSupportedTokens({ chain:"bsc" }).then((tokens) => setTokenlist(tokens.tokens));
    const apiUrl = `https://api.1inch.exchange/v4.0/56/tokens`;
    await axios
        .get(apiUrl)
        .then((tokens) => {
          setTokenlist(tokens.data.tokens)
        });
  }, []);


//   async function tokens2() {
        
//     enableWeb3();
//     const result = await Moralis.Plugins.oneInch.getSupportedTokens({
//         chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
//     // }).then(res => {
//     //     console.log(res);
//     //     }).catch(err => {
//     //       console.log(err);
//      });

//     // console.log(result);
//     token_list = result.tokens;
//     // let parent = document.getElementById("token_list");
//     // for(const address in token_list){
//     //     let token = token_list[address];
//     //     let div = document.createElement("div");
//     //     div.className = "token_row";
//     //     html =html + `<br></br>`+`
//     //         <img class="token_list_img" src="${token.logoURI}" />
//     //         <span class ="token_list_text">${token.symbol}</span>`
//     //     // div.innerHTML = html;
//     //     //parent.appendChild(div);

//     // }
//     // return(token_list)
//     // console.log(token_list);
    
// };






// useEffect(() => {
//     if (!Moralis.Plugins?.oneInch) return null;
//     tokens2()
// }, [Moralis.Plugins]);


  const getQuote = async (params) =>
    await Moralis.Plugins.oneInch.quote({
      chain: 'bsc', // The blockchain  you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      
      amount: Moralis.Units.Token(params.fromAmount, params.fromToken.decimals).toString(),
    });

  async function trySwap(params) {
    const { fromToken, fromAmount, chain } = params;
    const amount = Moralis.Units.Token(fromAmount, fromToken.decimals).toString();
    if (fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      await Moralis.Plugins.oneInch
        .hasAllowance({
          chain: 'bsc',// The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: fromToken.address, // The token you want to swap
          fromAddress: account, // Your wallet address
          amount,
        })
        .then(async (allowance) => {
          console.log(allowance);
          if (!allowance) {
            await Moralis.Plugins.oneInch.approve({
              chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
              tokenAddress: fromToken.address, // The token you want to swap
              fromAddress: account, // Your wallet address
            });
          }
        })
        .catch((e) => alert(e.message));
    }

    await doSwap(params)
      .then((receipt) => {
        if (receipt.statusCode !== 400) {
          // tokens2()
          setSwapComplete(receipt);
          alert("Swap Complete");
        }
        console.log(receipt);
      })
      .catch((e) => alert(e.message));
  }

  async function doSwap(params) {
    return await Moralis.Plugins.oneInch.swap({
      chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(params.fromAmount, params.fromToken.decimals).toString(),
      fromAddress: account, // Your wallet address
      slippage: 1,
    });
  }

  return {swapComplete, getQuote, trySwap, tokenList };
};

export default useInchDex;
