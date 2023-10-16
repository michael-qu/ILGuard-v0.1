import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';


import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import { appConstants } from './shared/constants';
import WalletConnection from './WalletConnection';

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

        <WalletConnection />

        
      </div>
    </BrowserRouter>
  )
}

export default App;