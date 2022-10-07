import React from 'react'

//STYLE
import './Dashboard.css'

//----------------------COMPONNETS--------------------


export default function Dashboard() {
    return (
        <div className="container_page">
            <div className="nav_horisontal">
                <div className="logo cursor_pointer">
                    <img src="../assets/Logo.PNG" alt="logoSportSee" />
                </div>
                <div className='cursor_pointer'>Accueil</div>
                <div className='cursor_pointer'>Profil</div>
                <div className='cursor_pointer'>Réglage</div>
                <div className='cursor_pointer'>Communauté</div>

            </div>
            <div className="container_block">
                <div className="nav_vertical"> les pitogrames</div>
                <div className="container_info"> les grafiques</div>
            </div>
        </div>
    )
}