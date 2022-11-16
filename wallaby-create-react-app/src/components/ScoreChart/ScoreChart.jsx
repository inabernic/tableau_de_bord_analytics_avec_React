import { Pie, PieChart, Cell } from "recharts";
import React from 'react'
import PropTypes from 'prop-types'; 

import './ScoreChart.css'


/** create a PieChart with score value
 * @param  {object} {data}
 * @return {JSX}  
 */
export default function ScoreChart({data}) {
    console.log({data})
    const score = [
        { value: data.todayScore || data.score},
        { value: 1 - data.todayScore || data.score }, 
    ];

    return (
        <div className="goal_chart">
            <h2 className="goal_title">Score</h2>
            <PieChart width={800} height={250}>
                <Pie
                    data={score}
                    dataKey="value"
                    startAngle={90}
                    innerRadius={60}
                    outerRadius={70}
                    fill="white"
                    paddingAngle={5}
                >
                    <Cell fill="red" cornerRadius="50%" />
                </Pie>
            </PieChart>
            <div className="goal_content">
                <p className="percentage">{score[0].value  * 100} %</p>
                <p className="legend">de votre</p>
                <p className="legend">objectif</p>
            </div>
        </div>
    )
}

ScoreChart.propTypes = {
    data: PropTypes.object
    }