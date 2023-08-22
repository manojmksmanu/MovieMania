import React, { useState } from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [state, setSate] = useState(false);


    return (
        <>
            <div className='main_nav_container'>
                <div className='container'>
                    <nav className='main_nav set_width'>

                        {/* 1 div for logo */}
                        <div className='logo'>
                            <img src='/logo.gif' data-mode="video" />
                        </div>
                        {/* 2 div for menu links  */}
                        <div className='menu_link'>
                            <ul>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/movies'>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/tvseries'>TvSeries</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/search'>Search</NavLink>
                                </li>
                            </ul>

                        </div>



                    </nav>
                    {/* ---responsive nav only show   */}
                    <div className={state ? "menu_responsive_show" : "menu_responsive"}>
                        <ul>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/products'>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar