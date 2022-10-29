/* import React from 'react'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

export default class PerformanceRadarChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            dataIsLoading: false
        }
    }

    componentDidMount() {
        const kinds = { "cardio": "Cardio", "energy": "Energie", "endurance": "Endurance","strength": "Force","speed": "Vitesse", "intensity": "Intensité"}
        const kinds_order = {"Cardio": 1, "Energie": 2, "Endurance": 3, "Force": 4, "Vitesse": 5, "Intensité": 6}
        const performance = this.props.performance

        console.log(this.props);

        // translates kinds into French
        for (let element in performance.kind) {
            //console.log(performance.kind); 
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
        this.setState({data: performance.data, dataIsLoading: true}) 
    }

    render() {
        return (
            <>
            <div className="radar_bar_chart">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.state.data}>
                        <PolarGrid/>
                        <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind"/>
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }
}

PerformanceRadarChart.propTypes = {
    performance: PropTypes.object
} */














import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { getUserPerformance } from '../../services/data'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mockUserPerformance } from '../../services/mockedData'

import './PerformanceRadarChart.css'

export default function  PerformanceRadarChart () {

    const [data, setData] = useState([]);
	const {id} = useParams();
    //console.log(process.env.REACT_APP_MOCKED);

    useEffect(() => {
      let getData = async () => {
              let request =await mockUserPerformance(id);
              if(process.env.REACT_APP_MOCKED === "false"){
                  console.log("real server call");
                  request = await getUserPerformance(id) 
              };
        if (!request) return alert('data error in the PerformanceRadar');
        setData(request);


       /*  console.log(request[0].data);
       let kinds = { "cardio": "Cardio", "energy": "Energie", "endurance": "Endurance","strength": "Force","speed": "Vitesse", "intensity": "Intensité"}
        let kinds_order = {"Cardio": 1, "Energie": 2, "Endurance": 3, "Force": 4, "Vitesse": 5, "Intensité": 6}
        const performance = request[0].data;
        console.log(performance);
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
        this.setState({data: performance.data, dataIsLoading: true})  */

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
 