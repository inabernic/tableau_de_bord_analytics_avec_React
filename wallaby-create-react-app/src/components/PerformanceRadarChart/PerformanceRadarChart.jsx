import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getUserPerformance } from '../../services/data'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockUserPerformance } from '../../services/mockedData'

import './PerformanceRadarChart.css'

export default function  PerformanceRadarChart () {

    const [data, setData] = useState([]);
	const {id} = useParams();
    console.log(process.env.REACT_APP_MOCKED);

    useEffect(() => {
      const getData = async () => {
              let request =await mockUserPerformance(id);
              if(process.env.REACT_APP_MOCKED === "false"){
                  console.log("real server call");
                  request = await getUserPerformance(id) 
              };
              console.log(request);
        if (!request) return alert('data error in the PerformanceRadar');
        setData(request);
      };
      getData();
    }, [id]);
    if (data.length === 0) return null; 
  
        return (
            <div className="radar_bar_chart">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data.kind}>
                        <PolarGrid/>
                        <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind"/>
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
}
