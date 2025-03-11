import React, { useEffect, useState } from "react";
import useFetch from "../../../customHooks/Fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardForCast from "./CardForCast";
import Loader from "../../../components/Loading/Loading";
import "./style.css";

const Casts = ({ id, type, setSingleLoading }) => {
  const [content, setContent] = useState(null);
  const url =
    type === "movie"
      ? `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`
      : `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setContent(data.cast);
    }
  }, [data]); // Only run when data changes

  useEffect(() => {
    setSingleLoading(loading);
  }, [loading]);
 
  if(loading){
    return null
  }

  if (error) {
    return <div className="cast-error">Unable to load cast information</div>;
  }

  if (!content || content.length === 0) {
    return <p className="no-cast">Cast information not available</p>;
  }

  return (
    <div className="casts-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
        }}
        navigation
        scrollbar={{ draggable: true, hide: true }}
        className="cast-swiper"
      >
        {content.map((castMember) => (
          <SwiperSlide key={`${castMember.id}-${castMember.cast_id}`}>
            <CardForCast data={castMember} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Casts;
