import React from 'react'

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
                    <div className='cursor_pointer'>Accueil</div>
                    <div className='cursor_pointer'>Profil</div>
                    <div className='cursor_pointer'>Réglage</div>
                    <div className='cursor_pointer'>Communauté</div>
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
                        <div className='header_helloName'>Bonjour <span>Thomas</span></div>
                        <div className='header_text'>Félicitation! Vous avez explosé vos objectifs hier <img src="../assets/icon_hands.png" alt="icon_hands" /></div>
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
                                    <div className='indice'>recuperation indice</div>
                                    <div>Calories</div>
                                </div>
                            </div>

                            <div className='proteines'>
                                <div className='picto'><img src="../assets/icon-proteines.png" alt="icon_proteines" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>recuperation indice</div>
                                    <div>Proteines</div>
                                </div>
                            </div>

                            <div className='glucides'>
                                <div className='picto'><img src="../assets/icon-glucides.png" alt="icon_glucides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>recuperation indice</div>
                                    <div>Glucides</div>
                                </div>
                            </div>

                            <div className='lipides'>
                                <div className='picto'><img src="../assets/icon-lipides.png" alt="icon_lipides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>recuperation indice</div>
                                    <div>Lipides</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}