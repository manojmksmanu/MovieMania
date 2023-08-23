import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleCarouseItem from '../CarouselCard/SingleCarouseItem';

export default ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // breakpoints={{
      //     600: {
      //         width: 600,
      //         slidesPerView: 1,
      //       },
      //     800: {
      //         width: 800,
      //         slidesPerView: 2,
      //       },
      //     1000: {
      //         width: 1000,
      //         slidesPerView: 3,
      //       },
      //     1200: {
      //       width: 1200,
      //       slidesPerView: 3,
      //     },
      //     1300: {
      //       width: 1300,
      //       slidesPerView: 4,
      //     },
      //   }}
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