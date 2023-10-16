import { Link } from 'react-router-dom';
import { appConstants } from './shared/constants';

const NavBar = () => {
    return (
        <nav>
            <div className="text-5xl font-extrabold">
                <span className="navbar-brand text-limegreen">IL</span>
                <span className="navbar-brand text-white">Guard</span>
            </div>
            <div className="text-3xl font-extrabold">
                <span className="navbar-brand text-5xl text-limegreen">SAVED </span>
                <span className="navbar-brand text-5xl text-white">~$440</span>
            </div>
            
            <ul className="nav navbar-nav text-4xl text-white hover:text-limegreen transition duration-300">
                <li className="nav-item">
                    <Link to={appConstants.dashboardRoute} className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to={appConstants.historyRoute} className="nav-link">History</Link>
                </li>
                
                <li className="nav-item">
                    <Link to={appConstants.settingsRoute} className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to={appConstants.aboutRoute} className="nav-link">About</Link>
                </li>

            </ul>
        </nav>
        
    );
}
export default NavBar;



// }

// const NavLink = ({ to, text, icon }) => (
//     <Link
//       to={to}
//       className="flex items-center py-2.5 px-4 hover:text-limegreen transition duration-300"
//     >
//       <div className="w-4 h-4 mr-2">{icon}</div>
//       <span className="text-4xl">{text}</span>
//     </Link>
//   );
  
//   const NavBar = () => {
//     return (
//       <>
//         <nav>
//           <ul className="nav navbar-nav">
//               <li>
//                   <NavLink
//                       to={appConstants.dashboardRoute}
//                       text="Dashboard"
//                       icon={
//                           <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           >
//                           <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
//                           />
//                           </svg>
//                       }
//                   />
//               </li>
  
//               <li>
  
//                   <NavLink
//                       to={appConstants.historyRoute}
//                       text="History"
//                       icon={
//                           <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           >
//                           <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                           </svg>
//                       }
//                   />
  
//               </li>
  
//               <li>
  
//                   <NavLink
//                   to={appConstants.settingsRoute}
//                   text="Settings"
//                   icon={
//                       <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       >
//                       <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v.008l.008 1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-.008l-.008-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165.397.505.71.78.93l.15.007c.542.09.94.56.94 1.109l-.008 1.094-.149.893c-.07.425-.384.765-.781.93-.398.165-.854.143-1.204-.107l-.738.527c-.32.447.269-1.06-.12-1.45l-.774-.773a1.125 1.125 0 01-1.449-.12l-.738.527c-.35.25-.806.272-1.204.107-.397-.165-.71-.505-.78-.929l-.15-.894z"
//                       />
//                       <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       </svg>
//                   }
//                   />
//               </li>
  
//               <NavLink
//               to={appConstants.aboutRoute}
//               text="About"
//               icon={
//                   <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   >
//                   <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
//                   />
//                   </svg>
//               }
//               />
//           </ul>
//         </nav>
//       </>
//     );
//   };