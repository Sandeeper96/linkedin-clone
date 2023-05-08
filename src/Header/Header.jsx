import React from 'react'
import './Header.css'
import logo from '../images/linkedin.png'
import { BusinessCenter, Home, Message, Notifications, People, Search } from '@material-ui/icons'
import HeaderOptions from './HeaderOptions'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Header = () => {

  const user = useSelector(selectUser)
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="header__search">
            <Search />
            <input type="text" placeholder='search' />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home"/>
        <HeaderOptions Icon={People} title="My Network"/>
        <HeaderOptions Icon={BusinessCenter} title="Jobs"/>
        <HeaderOptions Icon={Message} title="Messaging"/>
        <HeaderOptions Icon={Notifications} title="Notification"/>
        <HeaderOptions avatar={Avatar} title={user.displayUser}/>
      </div>
    </div>
  )
}

export default Header
