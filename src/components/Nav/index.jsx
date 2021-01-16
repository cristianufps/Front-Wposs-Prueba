

import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Nav = () => {
    return (
        <div className="nav-menu">
            <div className="logo_bancario">
                <img src="" alt="" />
                {/* Logo bancario */}
            </div>
            <div className="title_bancario">
                <h1>App Bancario - WPOSS</h1>
            </div>

            <div className="login_controller">
                <p>Icon multi-option</p>
                <ExitToAppIcon />
            </div>
        </div>
    )
}
export default Nav
