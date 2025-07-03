import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    function createAccount() {
        setToken(true)
        navigate('/login');
    }

    function logOut() {
        setToken(false)
        setShowDropdown(false)
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
            <img onClick={() => { navigate('/') }} className='w-30 cursor-pointer' src={assets.logo} alt="Logo" style={{ filter: 'var(--filter-primary)' }} />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/">
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/counsellor">
                    <li className='py-1'>COUNSELLORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center cursor-pointer gap-4 relative'>
                            <div className='flex items-center gap-2' onClick={() => setShowDropdown(!showDropdown)}>
                                <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
                                <img className='w-2.6' src={assets.dropdown_icon} alt="" />
                            </div>
                            {
                                showDropdown && (
                                    <div className='absolute top-4 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                            <p onClick={() => { navigate('/my-profile'); setShowDropdown(false); }} className='hover:text-black cursor-pointer'>My Profile</p>
                                            <p onClick={() => { navigate('/my-appoinment'); setShowDropdown(false); }} className='hover:text-black cursor-pointer'>My Appointments</p>
                                            <p onClick={logOut} className='hover:text-black cursor-pointer'>Logout</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <button onClick={createAccount} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
                }

                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden' alt="" />

                {/* Mobile View */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-26' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to={'/'}><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/counsellor'}><p className='px-4 py-2 rounded inline-block'>COUNSELLORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/about'}><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/contact'}><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
