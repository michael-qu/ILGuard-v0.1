import React from 'react'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, publicClient } = configureChains(
    [mainnet],
    [
      jsonRpcProvider({
        rpc: () => ({
          http: "https://bold-wandering-putty.ethereum-sepolia.discover.quiknode.pro/1fbc0e56a7ad5d25199112c491cab5af87d1c81e/"
                  // 👈 Replace this with your HTTP URL from the previous step
        }),
      })
    ]
  );
  
  const config = createConfig({
    autoConnect: true,
    publicClient,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      })
    ]
  })
  
  
  function Profile() {
    const { address } = useAccount()
    const { connect, isConnecting } = useConnect({
      connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
      address: address,
    })
  
    if (address) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <p>Connected to {address}</p>
            <p>Balance: {data ? data.formatted : "Loading..."} ETH</p>
            <p>Chain ID: {config ? config.lastUsedChainId : ""}</p>
            <button className="btn btn-primary mt-3" onClick={disconnect}>Disconnect</button>
          </div>
        </div>
      )
    }
  
    if (isConnecting) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p>Connecting...</p>
        </div>
      )
    }
  
  
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn btn-primary" onClick={() => connect()}>Connect Wallet</button>
      </div>
    )
  }
  
  function WalletConnection() {
    return (
        <WagmiConfig config={config}>
          <Profile/>
        </WagmiConfig>
    )
  }
  
  export default WalletConnection
  