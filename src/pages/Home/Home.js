import React, { useEffect, useState, Suspense } from 'react'
import '../../global.css'
// import Swiper from '../../components/SwiperJs/Swiper';
import SwiperMultipleCards from '../../components/SwiperJs/SwiperMultipleCards';
import useFetch from '../../customHooks/Fetch';
import TrendingMovie from '../../components/TrendingComponentsForHome/TrendingMovie';
import TrendingTv from '../../components/TrendingComponentsForHome/TrendingTv';

const Swiper = React.lazy(() => import("../../components/SwiperJs/Swiper"))

const Home = () => {
    const [content, setContent] = useState([]);
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
    // ----using custom hook Fetch data---- // 
    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
    }, [data])


    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Swiper data={content} read={'read'} />
            </Suspense>

            <TrendingMovie />
            <TrendingTv />
        </div>
    )
}

export default Home