import React from 'react'

//STYLE
import './Dashboard.css'

//----------------------COMPONNETS--------------------


export default function Dashboard() {
    return (
        <div className="container_page">
            <div className="nav_horisontal"> cadre pour la page
                <div className="logo">
                    <img src="../assets/Logo.PNG" alt="logoSportSee" />
                </div>
                <div>Accueil</div>
                <div>Profil</div>
                <div>Réglage</div>
                <div>Communauté</div>

            </div>
            <div className="container_block">
                <div className="nav_vertical"> les pitogrames</div>
                <div className="container_info"> les grafiques</div>
            </div>
        </div>
    )
}