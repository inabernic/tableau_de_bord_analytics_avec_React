import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//import './../../../data/data.json'

//STYLE
//import './UseIdPage.css'

//----------------------COMPONNETS--------------------


export default function UseIdPage() {

    const [USER_MAIN_DATA , setUSER_MAIN_DATA ] = useState({
        userInfos: {firstName:'', lastname:'', age:''},
        todayScore: '',
         keyData: {  calorieCount: '', proteinCount: '', carbohydrateCount:'',    lipidCount:'' },
      })
    
      let { id } = useParams()
    
     useEffect(
        function () {
          fetch(' http://localhost:3000/user/' + {id})
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              console.log(data)
              setUSER_MAIN_DATA(data)
            })
        },
        [id]
      )









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
                        <div className='header_helloName'>Bonjour <span> {USER_MAIN_DATA.userInfos.firstName} </span>
                        
                        </div>

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
        </div >
    )
}