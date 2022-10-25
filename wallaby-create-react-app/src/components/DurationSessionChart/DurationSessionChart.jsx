import PropTypes from 'prop-types'
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserAverageSessions } from '../../services/data'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockUserAverageSessions } from '../../services/mockedData'
/**
 * Custom tooltip of LineChart
 * @date 2021-04-20
 * @param {object} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
const CustomTooltip = ({payload, active}) => {
    if (active) {
        return (
            <>
            <div className="average_duration_tooltip">
                <p>{payload[0].value}min</p>
            </div>
            </>
        )
    }
    return null
}

export default function DurationSession () {

    const [data, setData] = useState([]);
	const {id} = useParams();
    console.log(process.env.REACT_APP_MOCKED);

    useEffect(() => {
      const getData = async () => {
              let request =await mockUserAverageSessions(id);
              if(process.env.REACT_APP_MOCKED === "false"){
                  console.log("real server call");
                  request = await getUserAverageSessions(id) 
              };
           console.log(request);
        if (!request) return alert('data error in the ActivityChartForDay');
        setData(request);
      };
      getData();
    }, [id]);
    if (data.length === 0) return null; 


   /*  componentDidMount() {
        // replace the number index with the day index
        const days = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}
        let average = this.props.average
        for (let element of average) {
            if (element.day in days) {
                element.day = days[element.day]
            }
        }
    } */

        return (
            <>
            <div className="average_duration_chart">
                <h2>Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="99%">
                    <LineChart data={this.props.average}>
                        <Tooltip wrapperStyle={{left: -10 }} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100}} content={<CustomTooltip />}/>
                        <XAxis tick={{opacity: 0.5}} tickLine={false} axisLine={false} stroke="white" dataKey="day" />
                        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeOpacity="0.5" dot=""/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }

    DurationSession.propTypes = {
    average: PropTypes.array
}