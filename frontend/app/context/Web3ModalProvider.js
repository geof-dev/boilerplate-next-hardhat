"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '????'

// 2. Set chains
const goerli = {
    chainId: 5,
    name: 'Goerli',
    currency: 'ETH',
    explorerUrl: 'https://goerli.etherscan.io',
    rpcUrl: 'https://goerli.infura.io/v3/????'
}
const local = {
    chainId: 31337,
    name: 'Local',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'http://127.0.0.1:8545'
}


// 3. Create modal
const metadata = {
    name: 'Token Factory',
    description: 'L\'usine à Token !',
    url: 'https://token-factory.independence-dev.com/',
    icons: ['https://token-factory.independence-dev.com/images/logo.png']
}

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [goerli,local],
    projectId
})

export function Web3ModalProvider({ children }) {
    return children;
}
