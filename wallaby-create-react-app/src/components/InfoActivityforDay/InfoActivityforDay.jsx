import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getUserInfos } from '../../services/data'
import { getMockedUserInfos } from '../../services/mockedData'
import ActivityChartForDay from '../ActivityChartForDay/ActivityChartForDay'
import Nav from '../Nav/Nav'
import Navertical from '../Navertical/Navertical'

//STYLE
import './InfoActivityforDay.css'

//----------------------COMPONNETS--------------------

export default function InfoActivityforDay() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    //console.log(process.env.REACT_APP_MOCKED);

    useEffect(() => {
        const getData = async () => {
            let request = await getMockedUserInfos(id);
            if (process.env.REACT_APP_MOCKED === "false") {
                request = await getUserInfos(id)
            };
            if (!request) return alert('data error');
            setData(request);
        };
        getData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className="container_page">
            <Nav />
            <div className="container_block">
                <Navertical />
                <div className="container_info">
                    <div className='info'>
                        <Link className="link-accueil" to="/"><div>  -- Reveir à l'Accueil -- </div></Link>
                        <div className='header_helloName'>Voici <span>{data.userInfos.firstName}</span>
                        </div>
                        <div className='header_text'> les informations sur le poids et les calories brûlées + les informations sur les calories, protéines, glucides et lipides de la journée. </div>
                    </div>
                    <div className='info_block_horozontal'>
                        <div className='info_left_horozontal'>
                            <div className='info_activity'>
                                <Link className='link_activity' to="./activity"><ActivityChartForDay /></Link>
                            </div>
                        </div>
                        <div className='info_right_horozontal'>
                            <div className='calories_horozontal'>
                                <div className='picto'><img src="../../assets/icon_calories.png" alt="icon_calories" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>
                                        {`${data.keyData.calorieCount}kCal`}
                                    </div>
                                    <div>Calories</div>
                                </div>
                            </div>
                            <div className='proteines_horozontal'>
                                <div className='picto'><img src="../../assets/icon-proteines.png" alt="icon_proteines" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>{`${data.keyData.proteinCount}g`}</div>
                                    <div>Proteines</div>
                                </div>
                            </div>
                            <div className='glucides_horozontal'>
                                <div className='picto'><img src="../../assets/icon-glucides.png" alt="icon_glucides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>{`${data.keyData.carbohydrateCount}g`}</div>
                                    <div>Glucides</div>
                                </div>
                            </div>
                            <div className='lipides_horozontal'>
                                <div className='picto'><img src="../../assets/icon-lipides.png" alt="icon_lipides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>{`${data.keyData.lipidCount}g`}</div>
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
