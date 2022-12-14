import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockedUserActivity } from '../../services/mockedData'
import { getUserActivity } from '../../services/data'
import { Activity } from '../../model/Activity'

//STYLE
import './ActivityChartForDay.css'

export default function ActivityChartForDay() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let request = await mockedUserActivity(id);
      if (process.env.REACT_APP_MOCKED === "false") {
        console.log("real server call");
        request = await getUserActivity(id)
      };
       //console.log(request);
      if (!request) return alert('data error in the ActivityChartForDay');
      setData(request);
    };
    getData();
  }, [id]);
  if (data.length === 0) return null;

  const CustomLegendText = (value) => {
    return (
      <span style={{ color: "#74798C" }}>{value}</span>
    )
  }

  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="daily_chart_tooltip">
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="activity_chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.sessions} barGap={5} barCategoryGap={25} strokeDasharray="1 4">
          <CartesianGrid vertical={false} />
          <YAxis type="number" dataKey="calories" hide={true} yAxisId="left" orientation="left" tickCount={3} />
          <YAxis type="number" domain={['dataMin-1', 'dataMax+4']}
            tickCount={3} tickLine={false} dataKey="kilogram" axisLine={false} yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#74798C" />
          <XAxis tickFormatter={(tickItem) => tickItem + 1} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} stroke="#74798C" />
          <Tooltip wrapperStyle={{ top: -50, left: 10 }} content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "15px", bottom: "240px" }} formatter={CustomLegendText} height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top" />
          <Bar name="Poids (kg)" yAxisId="right" radius={[10, 10, 0, 0]} barSize={10} dataKey="kilogram" fill="#282D30" />
          <Bar name="Calories brûlées (kCal)" yAxisId="left" radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

