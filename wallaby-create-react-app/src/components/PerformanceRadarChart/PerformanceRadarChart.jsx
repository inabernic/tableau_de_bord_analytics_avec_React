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
            setData(request);
        };
        getData();
    }, [id]);
    if (data.length === 0) return null;

    /*   let kinds = { "cardio": "Cardio", "energy": "Energie", "endurance": "Endurance","strength": "Force","speed": "Vitesse", "intensity": "Intensité"}
        let kinds_order = {"Cardio": 1, "Energie": 2, "Endurance": 3, "Force": 4, "Vitesse": 5, "Intensité": 6}

        // translates kinds into French
        for (let element in performance.kind) {
            performance.kind[element] = kinds[performance.kind[element]]
        }
        // attribute the corresponding kind for each data
        for (let element in performance.data) {
            performance.data[element].kind = performance.kind[parseInt(element, 10) +1]
            performance.data[element].fullMark = 150
        }
        // assigns an id to each data and sorts them in a predefined order
        for (let element of performance.data) {
            element.id = kinds_order[element.kind]
        }
        performance.data.sort((a, b) => (a.id > b.id) ? 1 : -1)
        // update the state
        this.setState({data: performance.data, dataIsLoading: true})   */

    /* 
        const kinds = { "cardio": "Cardio", "energy": "Energie", "endurance": "Endurance","strength": "Force","speed": "Vitesse", "intensity": "Intensité"}
        let perf = data.kind
        for (let element of perf) {
            if (element.kind in kinds) {
                element.kind = kinds[element.kind]
            }
        } */

    return (
        <div className="radar_bar_chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data[0].data}>
                    <PolarGrid stroke="white" radialLines={false} />
                    <PolarAngleAxis label={data[0].kind} stroke="white" tick={{ fontSize: 12, fontWeight: 500, }} tickLine={false} />
                    <Radar stroke="transparent" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
