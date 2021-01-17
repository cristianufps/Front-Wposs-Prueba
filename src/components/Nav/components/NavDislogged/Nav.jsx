

import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav_menu">

            <div className="logo_bancario">
                <img src="https://imagizer.imageshack.com/img924/9360/OM9MK5.png" alt="Logo de la App" />
            </div>

            <div className="title_bancario">
                <h1>Bienvenido</h1>
            </div>

            <div className="login_controller">
                <Link to="/signin" >Sign In</Link>
                <Link to="/signup" >Sign Up</Link>
                {/* <ExitToAppIcon /> */}
            </div>

        </div>
    )
}
export default Nav
