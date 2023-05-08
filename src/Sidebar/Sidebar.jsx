import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Sidebar = () => {

  const user = useSelector(selectUser)

  return (
    <div className='sidebar'>
      <div className="sidebar__profile">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="profile" />
        
        <div className="profile__details">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
            <p>Frontend Developer</p>
        </div>

        <div className="profile__stats">
            <span>Who viewed your profile</span>
            <span className="state__number">20</span>
        </div>

        <div className="profile__stats">
            <span>Connections<br/><b>Grow Your Network</b></span>
            <span className="state__number">150</span>
        </div>
      </div>

      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash"><span>#</span> java</p>
        <p className="hash"><span>#</span> frontend development</p>
        <p className="hash"><span>#</span> web development</p>
        <p className="hash"><span>#</span> javascript</p>
        <p className="hash"><span>#</span> reactjs</p>
        <p className="hash"><span>#</span> redux</p>
      </div>
    </div>
  )
}

export default Sidebar
