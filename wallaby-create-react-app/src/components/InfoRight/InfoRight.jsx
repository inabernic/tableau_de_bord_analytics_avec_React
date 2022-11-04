import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getUserInfos } from '../../services/data'
import { getMockedUserInfos } from '../../services/mockedData'

export default function InfoRight() {
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
            setData(request);
        };
        getData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className='info_right'>
            <div className='calories'>
                <div className='picto'><img src="../assets/icon_calories.png" alt="icon_calories" /></div>
                <div className='block_indice'>
                    <div className='indice'>
                        {`${data.keyData.calorieCount}kCal`}
                    </div>
                    <div>Calories</div>
                </div>
            </div>

            <div className='proteines'>
                <div className='picto'><img src="../assets/icon-proteines.png" alt="icon_proteines" /></div>
                <div className='block_indice'>
                    <div className='indice'>{`${data.keyData.proteinCount}g`}</div>
                    <div>Proteines</div>
                </div>
            </div>

            <div className='glucides'>
                <div className='picto'><img src="../assets/icon-glucides.png" alt="icon_glucides" /></div>
                <div className='block_indice'>
                    <div className='indice'>{`${data.keyData.carbohydrateCount}g`}</div>
                    <div>Glucides</div>
                </div>
            </div>

            <div className='lipides'>
                <div className='picto'><img src="../assets/icon-lipides.png" alt="icon_lipides" /></div>
                <div className='block_indice'>
                    <div className='indice'>{`${data.keyData.lipidCount}g`}</div>
                    <div>Lipides</div>
                </div>
            </div>
        </div>
    )
}