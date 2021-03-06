import React from 'react'
import { Navbar } from 'reactstrap'
import '../../css/MainComponent.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import PersonIcon from '@material-ui/icons/Person'

const NavbarAdmins = (props) => {
  const logout = () => {
    localStorage.setItem('auth', 0)
    localStorage.setItem('nombre_usuario', '')
    localStorage.setItem('userId', '')
    localStorage.setItem('role', '')
    localStorage.setItem('token', '')
  }

  return (
     <>
      <Navbar color='faded' dark className='navbar-admin'>
        {/* menu toggler */}

        <div className="notificaciones">
          <a ><button type='button' className='button_nav d-flex' >Notificaciones<NotificationsIcon/> </button></a>

        </div>

        <div className="notificaciones">
          <a href="/admin/dashboard/account"><button type='button' className='button_nav d-flex' >Perfil<PersonIcon/> </button></a>

        </div>

        <div className="notificaciones">
          <a href="/" ><button type='button' className='button_nav d-flex' onClick={logout} >Salir<MeetingRoom/> </button></a>

        </div>

      </Navbar>

    </>
  )
}

export default NavbarAdmins
