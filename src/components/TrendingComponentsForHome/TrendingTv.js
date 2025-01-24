import React, { useEffect, useState } from 'react'
import SwiperMultipleCards from '../SwiperJs/SwiperMultipleCards';
import useFetch from '../../customHooks/Fetch';
import SwitchDayWeek from './SwitchDayWeek';
import './TrendingStyle.css'
const Tv = () => {
    const [content, setContent] = useState([]);
    const [dayWeek, setDayWeek] = useState('day')

    const url = `https://api.themoviedb.org/3/trending/tv/${dayWeek}?language=en-US`;
    // ----using custom hook Fetch data---- // 
    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
    }, [data])
    return (
        <div className='display1'>
            <div className='switch_with_title'>
                <span className='title_trending'>
                    Trending Tv
                </span>
                <span>
                    <SwitchDayWeek dayWeek={dayWeek} setDayWeek={setDayWeek} />
                </span>
            </div>
            <div className='wrap_cards'>
                <SwiperMultipleCards data={content} />
            </div>
        </div>

    )
}

export default Tv