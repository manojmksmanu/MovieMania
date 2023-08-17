import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai'
import { FormControl, InputLabel, Select, MenuItem, Badge, dividerClasses, Button } from '@mui/material'
import { FaShoppingCart } from "react-icons/fa"
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
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/movies'>Movies</Link>
                                </li>
                                <li>
                                    <Link to='/tvseries'>TvSeries</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contact</Link>
                                </li>
                            </ul>

                        </div>



                    </nav>
                    {/* ---responsive nav only show   */}
                    <div className={state ? "menu_responsive_show" : "menu_responsive"}>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar