import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const SideMenu = () => {
    return (
        <div className="sideMenu">
            <ul>
                <li><Link to="/admin/info">Personal Info</Link></li>
                <li><Link to="/admin/anuncios">Anuncios</Link></li>
                <li><Link to="/admin/mis-trabajos">Mis Trabajos</Link></li>
                <li><Link to="/admin/tienda">Tienda</Link></li>
            </ul>
        </div>
    );
}

export default SideMenu;