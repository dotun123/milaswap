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
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { FetchData2 } from '../components/global/FetchData';

const { chains, publicClient,  } = configureChains(
  [mainnet, polygon, optimism, arbitrum,sepolia,polygonMumbai],
  [
    alchemyProvider({ apiKey:"vn61eXIkpvUX5dPgfdirJyhHzm93wQNW" }),
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
    <FetchData2>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} >
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </RainbowKitProvider>
    </WagmiConfig>
    </FetchData2>
  )
}

export default MyApp
