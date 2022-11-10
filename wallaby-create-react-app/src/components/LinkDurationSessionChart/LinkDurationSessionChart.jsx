import React from 'react'
import { Link } from 'react-router-dom'
import DurationSessionChart from '../DurationSessionChart/DurationSessionChart';
import Nav from '../Nav/Nav';
import Navertical from '../Navertical/Navertical';

export default function InfoPerf() {
    return (
        <div className="container_page">
            <Nav />
            <div className="container_block">
                <Navertical />
                <div className="container_info">
                    <div className='info'>
                        <Link className="link-accueil" to="/"><div>  -- Reveir à l'Accueil -- </div></Link>
                        <div className='header_text'> les informations sur la performance. </div>
                    </div>
                    <DurationSessionChart />
                </div>
            </div>
        </div >
    )
}