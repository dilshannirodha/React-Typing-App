import React , {useState} from 'react'
import { NavLink } from 'react-router-dom'
import User from './User';
import Icon from "../assets/keyboard.svg";


const NavBar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setIsUserDropdownOpen(false);
    };
  
    const toggleUserDropdown = () => {
      setIsUserDropdownOpen(!isUserDropdownOpen);
      setIsMobileMenuOpen(false);
    };

    const mobileMenuClose = () => {
      setIsMobileMenuOpen(false);
    }
  
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Icon} className="h-8"  alt="app-logo"/>
              <span className="self-center text-blue-700 text-2xl font-semibold whitespace-nowrap dark:text-white">KeyMaster</span>
            </div>
          </NavLink>


          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-blue-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isUserDropdownOpen ? "true" : "false"}
              onClick={toggleUserDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="" />
            </button>
            
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
             >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            </div>
  
          <div className={`items-center justify-between ${isMobileMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink
              to='/TypingTest'
              className={({ isActive }) =>
                isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded  md:text-white-700 md:p-2 md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            }
            onClick={mobileMenuClose}
            >
              <li >
                Typing test
              </li>
            </NavLink>

            <NavLink
              to='/TypingGame'
              className={({ isActive }) =>
                isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded  md:text-white-700 md:p-2 md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              }
              onClick={mobileMenuClose}
            >
              <li>
                Typing game
              </li>
            </NavLink>

            <NavLink
              to='/Multiplayer'
              className={({ isActive }) =>
                isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded  md:text-white-700 md:p-2 md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              }
              onClick={mobileMenuClose}
            >
              <li>
                Multiplayer
              </li>
            </NavLink>
            </ul>
          </div>
        </div>

        <User isUserDropdownOpen={isUserDropdownOpen}  />
      </nav>
    );
  };
export default NavBar
