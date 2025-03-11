import React, { useEffect, useState } from "react";
import SwiperMultipleCards from "../SwiperJs/SwiperMultipleCards";
import useFetch from "../../customHooks/Fetch";
import SwitchDayWeek from "./SwitchDayWeek";
import "./TrendingStyle.css";

const Movie = ({ setHomeLoading }) => {
  const [content, setContent] = useState([]);
  const [dayWeek, setDayWeek] = useState("day");

  const url = `https://api.themoviedb.org/3/trending/movie/${dayWeek}?language=en-US`;

  // ----using custom hook Fetch data---- //
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setHomeLoading(loading);
  }, [loading]);

  useEffect(() => {
    data ? setContent(data.results) : setContent(null);
  }, [data]);

  if(!data && loading){
    return null
  }

  return (
    <div className="display1">
      <div className="switch_with_title">
        <span className="title_trending">Trending Movies</span>
        <span>
          <SwitchDayWeek dayWeek={dayWeek} setDayWeek={setDayWeek} />
        </span>
      </div>
      <div className="movies wrap_cards ">
        <SwiperMultipleCards data={content} />
      </div>
    </div>
  );
};

export default Movie;
