import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getUserInfos } from '../../services/data'
import { getMockedUserInfos } from '../../services/mockedData'
import Nav from '../../components/Nav/Nav'
import Navertical from '../../components//Navertical/Navertical'
import PerformanceRadarChart from'../../components/PerformanceRadarChart/PerformanceRadarChart'
import DurationSessionChart from '../../components/DurationSessionChart/DurationSessionChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import InfoRight from '../../components/InfoRight/InfoRight'
import ActivityChartForDay from '../../components/ActivityChartForDay/ActivityChartForDay' 

//STYLE
import './UserIdPage.css'
import InfoActivityforDay from '../../components/InfoActivityforDay/InfoActivityforDay'

//----------------------COMPONNETS--------------------

export default function UserIdPage() {
    const [data, setData] = useState([]);
	const {id} = useParams();
    //console.log(process.env.REACT_APP_MOCKED);

   useEffect(() => {
		const getData = async () => {
            let request =await getMockedUserInfos(id);
            //console.log(request);
            if(process.env.REACT_APP_MOCKED === "false"){
                console.log("real server call");
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
            <Nav/>
            <div className="container_block">
               <Navertical/>
                <div className="container_info">
                    <div className='info'>
                        <div className='header_helloName'>Bonjour <span>{data.userInfos.firstName}</span>
                        </div>

                        <div className='header_text'>Félicitation! Vous avez explosé vos objectifs hier <img src="../assets/icon_hands.png" alt="icon_hands" /></div>
                    </div>

                    <div className='info_block'>
                        <div className='info_left'>
                            <div className='info_activity'>
                             
                             <Link className='link_activity' to="./activity"><ActivityChartForDay><InfoActivityforDay/>
                                 </ActivityChartForDay> </Link>  
                            
                            </div>

                            <div className='info_graphic'>
                                <div className='grafic'> 
                                    <Link className='link' to="./average-sessions"><DurationSessionChart/></Link>
                                </div>
                                <div className='grafic'>
                                    <Link to="./performance"><PerformanceRadarChart/></Link>
                                </div>
                                <div className='grafic'><ScoreChart/> </div>
                            </div>

                        </div>

<InfoRight/>
                       {/*  <div className='info_right'>
                            <div className='calories'>
                                <div className='picto'><img src="../assets/icon_calories.png" alt="icon_calories" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>
                                     {`${data.todayScore}kCal`} 
                                        </div>
                                    <div>Calories</div>
                                </div>
                            </div>

                            <div className='proteines'>
                                <div className='picto'><img src="../assets/icon-proteines.png" alt="icon_proteines" /></div>
                                <div className='block_indice'> 
                                    <div className='indice'>{`${data.keyData.proteinCount}g`}</div>
                                    <div>Proteines</div>
                                </div>
                            </div>

                            <div className='glucides'>
                                <div className='picto'><img src="../assets/icon-glucides.png" alt="icon_glucides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>{`${data.keyData.carbohydrateCount}g`}</div>
                                    <div>Glucides</div>
                                </div>
                            </div>

                            <div className='lipides'>
                                <div className='picto'><img src="../assets/icon-lipides.png" alt="icon_lipides" /></div>
                                <div className='block_indice'>
                                    <div className='indice'>{`${data.keyData.lipidCount}g`}</div>
                                    <div>Lipides</div>
                                </div>
                            </div>

                        </div> */}
                    </div>

                </div>
            </div>
        </div >
    )
}
