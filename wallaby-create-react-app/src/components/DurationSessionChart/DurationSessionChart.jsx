import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockUserAverageSessions } from '../../services/mockedData'
import { getUserAverageSessions } from '../../services/data'
import './DurationSessionChart.css'

export default function DurationSessionChart() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        let getData = async () => {
            let request = await mockUserAverageSessions(id);
            if (process.env.REACT_APP_MOCKED === "false") {
                request = await getUserAverageSessions(id)
            };
            if (!request) return alert('data error in the ActivityChartForDay');
            setData(request);
        };
        getData();
    }, [id]);
    if (data.length === 0) return null;


    //replace the number index with the day index
    const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" }
    let average = data.sessions
    for (let element of average) {
        if (element.day in days) {
            element.day = days[element.day]
        }
    }

    //Customize the legend tooltip
    const CustomTooltip = ({ payload, active }) => {
        if (active) {
            return (
                <div className="average_duration_tooltip">
                    <p>{payload[0].value}min</p>
                </div>
            )
        }
        return null
    }


    return (
        <div className="average_duration_chart">
            <div className='text_container'>
                <h2>Durée moyenne des sessions</h2>
            </div>
            <div className='grafic_container'>
                <ResponsiveContainer width="100%" height="99%">
                    <LineChart data={data.sessions}>
                        <Tooltip active={true} wrapperStyle={{ left: -10 }}
                            cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100 }}
                            content={<CustomTooltip />} />
                        <XAxis tick={{ opacity: 0.5 }} tickLine={false} axisLine={false} stroke="white" dataKey="day" />
                        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeOpacity="0.5" dot="" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}