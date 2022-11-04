import { Pie, PieChart, Cell } from "recharts";
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMockedUserInfos } from '../../services/mockedData'
import { getUserInfos } from '../../services/data'

import './ScoreChart.css'

export default function ScoreChart() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    //console.log(process.env.REACT_APP_MOCKED);
    useEffect(() => {
        const getData = async () => {
            let request = await getMockedUserInfos(id);
            if (process.env.REACT_APP_MOCKED === "false") {
                console.log("real server call");
                request = await getUserInfos(id)
            };
            if (!request) return alert('data error');
            if (!request.todayScore) {
                request.todayScore = request.score
            }
            setData(request);
        };
        getData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className="goal_chart">
            <h2 className="goal_title">Score</h2>
            <PieChart >
                <Pie data={data.todayScore} dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={180}
                    innerRadius={60}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}>
                    <Cell fill="red" cornerRadius="50%" />
                </Pie>
            </PieChart>
            <div className="goal_content">
                <p className="percentage">{data.todayScore * 100} %</p>
                <p className="legend">de votre</p>
                <p className="legend">objectif</p>
            </div>
        </div>
    )
}
