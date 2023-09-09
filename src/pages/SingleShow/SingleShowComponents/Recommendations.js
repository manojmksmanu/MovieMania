import React, { useEffect, useState } from 'react'
import useFetch from '../../../customHooks/Fetch'
import Card from '../../../components/Card/Card'
import SwiperMultipleCards from '../../../components/SwiperJs/SwiperMultipleCards';

const Recommendations = ({ id, type }) => {
    const [content, setContent] = useState();
    const { data } = useFetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`)
    useEffect(() => {
        data ? setContent(data.results) : setContent('')
    })
    return (
        <div className='display1'>
            {
                content ?
                <div>
                    <h4 className='display1 title_3'>Recommendations</h4>
                     <SwiperMultipleCards data={content} /> 
                </div>
                
                 : <p>Sorry!  Recommendations not provided</p>
            }
        </div>
    )
}

export default Recommendations