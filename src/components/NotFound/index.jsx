

import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const NotFound = () => {
    return (
        <div className="notFound__panel">
            <h1>Error 404: Page not Found</h1>
            <Link className="button" to="/home"> Volver a inicio </Link>
        </div>
    )
}

export default NotFound
