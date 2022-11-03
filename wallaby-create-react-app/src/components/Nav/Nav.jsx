import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav_horisontal">

        <div className="nav">
            <div className="logo cursor_pointer">
                 <img src="../assets/Logo.PNG" alt="logoSportSee" /> 
            </div>
            <Link className="link" to="/"><div className='cursor_pointer'>Accueil</div></Link>
            <Link className="link" to="/"><div className='cursor_pointer'>Profil</div></Link>
            <Link className="link" to="/"><div className='cursor_pointer'>Réglage</div></Link>
            <Link className="link" to="/"><div className='cursor_pointer'>Communauté</div></Link>
        </div>
    </div>         
    )
  }