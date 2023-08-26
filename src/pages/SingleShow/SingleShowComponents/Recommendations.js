import React, { useEffect, useState } from 'react'
import useFetch from '../../../customHooks/Fetch'
import Card from '../../../components/Card/Card'
import SwiperMultipleCards from '../../../components/SwiperJs/SwiperMultipleCards';

const Recommendations = ({ id }) => {
    const [content, setContent] = useState();
    const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`)
    useEffect(() => {
        data ? setContent(data.results) : setContent('')
    })
    console.log(content)
    return (
        <div className='display1'>
          {
            content ?(<SwiperMultipleCards data={content} />):('Not have any Recommendations for this......')
          }  
        </div>
    )
}

export default Recommendations