import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import env from "react-dotenv";
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockedUserActivity } from '../services/mockedData'
import { getUserActivity } from '../services/data'

/**
 * Custom tooltip of BarChart
 * @date 2021-04-20
 * @param {object} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
const CustomTooltip = ({payload, active}) => {

  const [data, setData] = useState([]);
	const {id} = useParams();
    console.log(env.REACT_APP_MOCKED);

   useEffect(() => {
		const getData = async () => {
            let request ="";
            if(env.REACT_APP_MOCKED){
			    request = await mockedUserActivity(id)
            }else{
                request = await getUserActivity(id) 
            };
			if (!request) return alert('data error');
			setData(request);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null; 


















    if (active) {
        return (
            <>
            <div className="daily_chart">
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>
            </>
        )
    }
    return null
}

/**
 * Custom legend for the BarChart
 * @date 2021-04-19
 * @param {string} value - Legend value
 * @returns {Component} - React component
 */
const CustomLegendText = (value) => {
    return (
        <>
        <span style={{ color: "#74798C" }}>{value}</span>
        </>
    )
}

export class ActivityChartForDay extends React.Component {

    render() {
        return (
            <>
            <div className="activity_chart">
                <h2>Activité quotidienne</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.props.sessions} barGap={5} barCategoryGap={25} strokeDasharray="1 4">
                        <CartesianGrid vertical={false}/>
                        <YAxis type="number" tickCount={3} tickLine={false} dataKey="calories" axisLine={false} orientation="right" tick={{fontSize: 12}} stroke="#74798C"/>
                        <XAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} stroke="#74798C"/>
                        <Tooltip wrapperStyle={{ top: -50, left: 10 }} content={<CustomTooltip />}/>
                        <Legend wrapperStyle={{paddingTop: "15px"}} formatter={CustomLegendText} height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top"/>
                        <Bar name="Poids (kg)" radius={[10, 10, 0, 0]} stroke-linejoin={10} barSize={10} dataKey="kilogram" fill="#282D30"/>
                        <Bar name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }
}

ActivityChartForDay.propTypes = {
    sessions: PropTypes.array
}