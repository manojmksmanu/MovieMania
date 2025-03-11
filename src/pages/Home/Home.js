import React, { useEffect, useState } from "react";
import "./Home.css";
import useFetch from "../../customHooks/Fetch";
import TrendingMovie from "../../components/TrendingComponentsForHome/TrendingMovie";
import TrendingTv from "../../components/TrendingComponentsForHome/TrendingTv";
import Loader from "../../components/Loading/Loading";

const Swiper = React.lazy(() => import("../../components/SwiperJs/Swiper"));

const Home = () => {
  const [content, setContent] = useState([]);
  const [homeloading, setHomeLoading] = useState();

  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;

  // ----using custom hook Fetch data---- //
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setHomeLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (data) {
      setContent(data.results || []);
    }
  }, [data]);

  console.log("Welcome to my app");

  if (loading) {
    return (
      <div className="LoadingContainer">
        <Loader setLoader="true" />
      </div>
    );
  }

  if (error) {
    return <p className=" ">Something went wrong</p>;
  }

  return (
    <div>
      <Swiper data={content} read={"read"} />
      <div>
        <TrendingMovie setHomeLoading={setHomeLoading} />
        <TrendingTv setHomeLoading={setHomeLoading} />
      </div>
    </div>
  );
};

export default Home;
