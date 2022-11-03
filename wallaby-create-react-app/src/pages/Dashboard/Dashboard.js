import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Navertical from '../../components/Navertical/Navertical'

//STYLE
import './Dashboard.css'

//----------------------COMPONNETS--------------------


export default function Dashboard() {
    return (
        <div className="container_page">
            <Nav />
            <div className="container_block">
                <Navertical />
                <div className="container_info">
                    <div className='info'>
                        <div className='header_helloName'>Bonjour et Bienvenue
                            <Link className="navigation_user" to="/user/12"><span> User 12 </span>
                            </Link>,
                            <Link className="navigation_user" to="/user/18"><span> User 18</span>
                            </Link>
                        </div>
                        <div className='text_info'>Vous allez visualiser les performance de nos 2 Users </div>
                    </div>
                </div>
            </div>
        </div >
    )
}