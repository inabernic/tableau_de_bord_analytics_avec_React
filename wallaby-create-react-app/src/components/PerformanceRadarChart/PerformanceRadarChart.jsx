import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
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

            const kinds = { "intensity": "Intensité", "speed": "Vitesse", "strength": "Force", "endurance": "Endurance", "energy": "Energie", "cardio": "Cardio"}

        // translates kinds into French
         for (let element in request[0].kind) {
            console.log(element)
            request[0].kind[element] = kinds[request[0].kind[element]]
        } 
        //change the place of the elements
        request[0].data.sort((a, b) => (a.id > b.id) ? 1 : -1)
            setData(request);
        };

        getData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className="radar_bar_chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="62%" data={data[0].data}>
                    <PolarGrid stroke="white" radialLines={false} />
                    <PolarAngleAxis  tickFormatter={(tickItem) => data[0].kind[tickItem]} stroke="white" dataKey="kind" tick={{ fontSize: 12, fontWeight: 500, }} tickLine={false} >
                    </PolarAngleAxis>
                    <Radar stroke="transparent" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
