import React, { useEffect, useState } from 'react'
import useFetch from '../../../customHooks/Fetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardForCast from './CardForCast';
import Loader from '../../../components/Loading/Loading';

const Casts = ({ id, type }) => {
    const [content, setContent] = useState();
    const url = (type === 'movie') ? `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US` : `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`
    const { data, loading, error } = useFetch(url);

    useEffect(() => {
        data ? (setContent(data.cast)) : (setContent(''))
    })
    if (data) {
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    300: {
                        width: 300,
                        slidesPerView: 2,
                    },
                    600: {
                        width: 600,
                        slidesPerView: 2,
                    },
                    800: {
                        width: 800,
                        slidesPerView: 2,
                    },
                    1000: {
                        width: 1000,
                        slidesPerView: 6,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 6,
                    },
                    1300: {
                        width: 1300,
                        slidesPerView: 7,
                    },
                }}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data ?
                        data && Array.from(content).map((c) => {
                            return (
                                <div>

                                    <SwiperSlide>
                                        <CardForCast data={c} />
                                    </SwiperSlide>
                                </div>

                            )
                        }) : <p>Cast Not specified</p>
                }

            </Swiper>
        )
    }
    if (loading) {
        <Loader setLoader={'true'} />
    }
    if (error) {
        <p>something went wrong!!!</p>
    }
}

export default Casts