import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import { appConstants } from './shared/constants';

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

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex bg-black">
        <NavBar />
        {/* <div className="w-64 p-3">
          <div className="flex items-center">
            <span className="text-limegreen text-3xl font-extrabold">IL</span>
            <span className="text-white text-3xl font-extrabold">GUARD</span>
          </div> */}
          
        {/* </div> */}
        {/* <div className="flex-1 p-10 text-2xl font-bold justify-center">
          Contents go here
        </div> */}
        <Routes>
            <Route path={appConstants.homeRoute} element = {<HomePage />} />
            <Route path={appConstants.dashboardRoute} element = {<DashboardPage />} />
            <Route path={appConstants.historyRoute} element = {<HistoryPage />} />
            <Route path={appConstants.settingsRoute} element = {<SettingsPage />} />
            <Route path={appConstants.aboutRoute} element = {<AboutPage />} />
        </Routes>

        <WagmiConfig config={config}>
          <Profile/>
        </WagmiConfig>
      </div>
    </BrowserRouter>
  )
}

export default App;