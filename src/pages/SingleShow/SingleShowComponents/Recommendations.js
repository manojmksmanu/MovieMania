import React, { useEffect, useState } from 'react'
import useFetch from '../../../customHooks/Fetch'
import Card from '../../../components/Card/Card'
import SwiperMultipleCards from '../../../components/SwiperJs/SwiperMultipleCards';

const Recommendations = ({ id ,type }) => {
    const [content, setContent] = useState();
    const { data } = useFetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`)
    useEffect(() => {
        data ? setContent(data.results) : setContent('')
    })
    console.log(content)
    return (
        <div className='display1'>
            {
                content ? <SwiperMultipleCards data={content} />: <p>Sorry!  Recommendations not provided</p>
            }
        </div>
    )
}

export default Recommendations