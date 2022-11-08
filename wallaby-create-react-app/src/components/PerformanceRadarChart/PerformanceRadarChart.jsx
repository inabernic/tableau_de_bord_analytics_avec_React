import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LabelList } from 'recharts'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockUserPerformance } from '../../services/mockedData'
import { getUserPerformance } from '../../services/data'

import './PerformanceRadarChart.css'

export default function PerformanceRadarChart() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    //console.log(process.env.REACT_APP_MOCKED);
    useEffect(() => {
        let getData = async () => {
            let request = await mockUserPerformance(id);
            if (process.env.REACT_APP_MOCKED === "false") {
                console.log("real server call");
                request = await getUserPerformance(id)
            };
            if (!request) return alert('data error in the PerformanceRadar');

            const kinds = { "cardio": "Cardio", "energy": "Energie", "endurance": "Endurance","strength": "Force","speed": "Vitesse", "intensity": "Intensité"}

        // translates kinds into French
         for (let element in request[0].kind) {
            console.log(element)
            request[0].kind[element] = kinds[request[0].kind[element]]
        } 
            setData(request);
        };

        getData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className="radar_bar_chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data[0].data}>
                    <PolarGrid stroke="white" radialLines={false} />
                    <PolarAngleAxis tickFormatter={(tickItem) => data[0].kind[tickItem] } stroke="white" dataKey="kind" tick={{ fontSize: 12, fontWeight: 500, }} tickLine={false} >
                    </PolarAngleAxis>
                    <Radar stroke="transparent" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
