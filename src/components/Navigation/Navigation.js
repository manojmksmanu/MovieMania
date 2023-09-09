import React, { useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { FiMenu} from 'react-icons/fi'
const Navbar = () => {
    const [state, setSate] = useState(false);


    return (
        <>
            <div className='main_nav_container'>
                <div className='display1'>
                    <nav className='main_nav set_width'>

                        {/* 1 div for logo */}
                        <div className='logo'>
                            <img src='/logo.gif' data-mode="video" />
                        </div>
                        {/* 2 div for menu links  */}
                        <div className='menu_link'>
                            <ul>
                                <li>
                                    <NavLink className='nav_link' to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link' to='/movies'>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link' to='/tvseries'>TvSeries</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link' to='/search'>Search</NavLink>
                                </li>
                            </ul>
                          
                        </div>

  {/* toogle section  */}
  <div className='responsive_btn'>
                                <FiMenu style={{ fontSize: "25px" }} onClick={() => {
                                    state: setSate(!state)
                                }} />
                            </div>

                    </nav>
                    {/* ---responsive nav only show   */}
                    {/* ---responsive nav only show   */}
                    <div className={state ? "menu_responsive_show" : "menu_responsive"}>
                    <ul>
                                <li>
                                    <NavLink className='nav_link_responsive' to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link_responsive' to='/movies'>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link_responsive' to='/tvseries'>TvSeries</NavLink>
                                </li>
                                <li>
                                    <NavLink className='nav_link_responsive' to='/search'>Search</NavLink>
                                </li>
                            </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar