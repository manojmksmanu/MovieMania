import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css'

import SingleCarouseItem from '../CarouselCard/SingleCarouseItem';

export default ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data && data.map((c) => {
          return (
            <SwiperSlide>
              <SingleCarouseItem data={c} />
            </SwiperSlide>
          )
        })
      }


    </Swiper>
  );
};

