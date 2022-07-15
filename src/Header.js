import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'



function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };
    return (
        <div className='header'>

            <div className='header_left'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

                <div className='header_search'>
                    <SearchIcon />
                    <input placeholder='Search' type="text" />

                </div>

            </div>

            <div className='header_right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption 
                    // avatar={'https://avatars.githubusercontent.com/u/40287069?s=600&u=697620d448c3530e02e996a2db895e53ef780c5a&v=4'} 
                    avatar={true}
                    title='Me'
                    onClick={logoutOfApp} 
                />
            </div>

        </div>
    )
}

export default Header