import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getUserInfos } from '../../services/data'
import { getMockedUserInfos } from '../../services/mockedData'
import Nav from '../../components/Nav/Nav'
import Navertical from '../../components//Navertical/Navertical'
import PerformanceRadarChart from '../../components/PerformanceRadarChart/PerformanceRadarChart'
import DurationSessionChart from '../../components/DurationSessionChart/DurationSessionChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import InfoRight from '../../components/InfoRight/InfoRight'
import ActivityChartForDay from '../../components/ActivityChartForDay/ActivityChartForDay'
import InfoActivityforDay from '../../components/InfoActivityforDay/InfoActivityforDay'

//STYLE
import './UserIdPage.css'


export default function UserIdPage() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            let request = await getMockedUserInfos(id);
            if (process.env.REACT_APP_MOCKED === "false") {
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
            <Nav />
            <div className="container_block">
                <Navertical />
                <div className="container_info">
                    <div className='info'>
                        <div className='header_helloName'>Bonjour <span>{data.userInfos.firstName}</span>
                        </div>
                        <div className='header_text'>Félicitation! Vous avez explosé vos objectifs hier <img src="../assets/icon_hands.png" alt="icon_hands" /></div>
                    </div>
                    <div className='info_block'>
                        <div className='info_left'>
                            <div className='info_activity'>
                                <Link className='link_activity' to="./activity"><ActivityChartForDay><InfoActivityforDay />
                                </ActivityChartForDay> </Link>
                            </div>
                            <div className='info_graphic'>
                                <div className='grafic'>
                                    <Link className='link' to="./average-sessions"><DurationSessionChart /></Link>
                                </div>
                                <div className='grafic'>
                                    <Link to="./performance"><PerformanceRadarChart /></Link>
                                </div>
                                <div className='grafic'><ScoreChart /> </div>
                            </div>
                        </div>
                        <InfoRight />
                    </div>
                </div>
            </div>
        </div >
    )
}
