import React from 'react'
import { Link } from 'react-router-dom'

//STYLE
import './Error.css'

//----------------------COMPONNETS--------------------


export default function Error() {
    return (
        <div className="container_page">
            <div className="nav_horisontal">

                <div className="nav">
                    <div className="logo cursor_pointer">
                        <img src="../../assets/Logo.PNG" alt="logoSportSee" />
                    </div>
                    <Link className="link" to="/"><div className='cursor_pointer'>Accueil</div></Link>
                    <Link className="link" to="/"><div className='cursor_pointer'>Profil</div></Link>
                    <Link className="link" to="/"><div className='cursor_pointer'>Réglage</div></Link>
                    <Link className="link" to="/"><div className='cursor_pointer'>Communauté</div></Link>
                </div>

            </div>
            <div className="container_block">
                <div className="nav_vertical">
                    <div className='picto'>
                        <div className='picto_pointer'> <img src="../../assets/picto-meditation.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../../assets/picto-swimming.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../../assets/picto-cycling.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../../assets/picto-bodybuilding.png" alt="logoSportSee" /></div>
                    </div>
                    <div className='picto_pointer text_vertical' > Copyright, SportSee 2020</div>
                </div>
                <div className="container_info">
                    <div className='info'>
                        <div className='header_helloName error'>Erreur 404
                        </div>
                    </div>
                    <div>  <Link className="link" to="/"><div className='cursor'> --- lien vers la page principale --- </div></Link></div>
                </div>
            </div>
        </div >
    )
}