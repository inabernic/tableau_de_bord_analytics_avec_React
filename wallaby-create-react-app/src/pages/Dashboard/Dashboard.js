import React from 'react'
import { Link } from 'react-router-dom'

//STYLE
import './Dashboard.css'

//----------------------COMPONNETS--------------------


export default function Dashboard() {
    return (
        <div className="container_page">
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
            <div className="container_block">
                <div className="nav_vertical">
                    <div className='picto'>
                        <div className='picto_pointer'> <img src="../assets/picto-meditation.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../assets/picto-swimming.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../assets/picto-cycling.png" alt="logoSportSee" /></div>
                        <div className='picto_pointer'> <img src="../assets/picto-bodybuilding.png" alt="logoSportSee" /></div>
                    </div>
                    <div className='picto_pointer text_vertical' > Copyright, SportSee 2020</div>
                </div>
                <div className="container_info">
                    <div className='info'>
                        <div className='header_helloName'>Bonjour et Bienvenue
                            <Link className="navigation_user" to="/user/12"><span> User 12 </span>
                            </Link>,
                            <Link className="navigation_user" to="/user/18"><span> User 18</span>
                            </Link>
                        </div>

                        <div className='text_info'>Félicitation! Vous avez explosé vos objectifs hier </div>
                    </div>

                    <div className='info_block'>
                        <div className='info_left'>
                            <div className='info_activity'>Activité quotidienne</div>

                            <div className='info_graphic'>
                                <div className='grafic'>grafic 1</div>
                                <div className='grafic'>grafic 2</div>
                                <div className='grafic'>grafic 3</div>
                            </div>
                        </div>

                        <div className='info_right'>
                            <div className='calories'>
                                <div className='picto'><img src="../assets/icon_calories.png" alt="icon_calories" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>X kl</div>
                                    <div>Calories</div>
                                </div>
                            </div>

                            <div className='proteines'>
                                <div className='picto'><img src="../assets/icon-proteines.png" alt="icon_proteines" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>X g</div>
                                    <div>Proteines</div>
                                </div>
                            </div>

                            <div className='glucides'>
                                <div className='picto'><img src="../assets/icon-glucides.png" alt="icon_glucides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>X g</div>
                                    <div>Glucides</div>
                                </div>
                            </div>

                            <div className='lipides'>
                                <div className='picto'><img src="../assets/icon-lipides.png" alt="icon_lipides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>X g</div>
                                    <div>Lipides</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}