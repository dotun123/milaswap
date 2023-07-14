import '../styles/globals.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum,sepolia, polygonMumbai} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient,  } = configureChains(
  [mainnet, polygon, optimism, arbitrum,sepolia,polygonMumbai],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function MyApp({ Component, pageProps }) {
  return (
    
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} >
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </RainbowKitProvider>
    </WagmiConfig>
    
  )
}

export default MyApp
