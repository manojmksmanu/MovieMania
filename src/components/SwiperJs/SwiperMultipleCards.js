import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card/Card';;

export default ({ data }) => {
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
                    slidesPerView: 4,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 4,
                },
                1300: {
                    width: 1300,
                    slidesPerView: 5,
                },
            }}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {
                data && data.map((c) => {
                    return (
                        <SwiperSlide>
                            <Card className='formargin' data={c} />
                        </SwiperSlide>
                    )
                })
            }


        </Swiper>
    );
};