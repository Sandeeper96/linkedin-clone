import { Avatar } from '@material-ui/core'
import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import firebase from 'firebase/compat/app'

const HeaderOptions = ({ Icon, title, avatar }) => {

    const user = useSelector(selectUser)

    return (
        <div className='header__options'>
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name={avatar} src={user.photoURL} onClick={e => firebase.auth().signOut()} />
            }
            <span>{title}</span>
        </div>
    )
}

export default HeaderOptions
