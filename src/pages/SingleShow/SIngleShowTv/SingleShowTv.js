import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../../customHooks/Fetch";
import SingleCarouseItem from "../../../components/CarouselCard/SingleCarouseItem";
import Recommendations from "../SingleShowComponents/Recommendations";
import Casts from "../SingleShowComponents/Casts";
import "./SingleShowTv.css";
import Video from "../SingleShowComponents/Video";
import SideData from "../SingleShowComponents/SideData";
import Season from "../SingleShowComponents/Season";
import "../../../global.css";
import Loader from "../../../components/Loading/Loading";
const SingleShowTv = () => {
  const [content, setContent] = useState("");
  const [singleLoading, setSingleLoading] = useState();
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, [content]);

  useEffect(() => {
    setSingleLoading(loading);
  }, [loading]);

  useEffect(() => {
    data ? setContent(data) : setContent("");
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {content ? <SingleCarouseItem data={content} /> : ""}
      <div className="show_cast_with_sidedata display1">
        <div className=" show_cast">
          <Casts id={id} type={"tv"} setSingleLoading={setSingleLoading} />
        </div>
        <SideData data={content} />
      </div>
      <div className="display1">
        {content &&
          content.seasons.map((e) => {
            return <Season data={e} />;
          })}
      </div>

      <Recommendations className="display1" id={id} type={"tv"} />
    </div>
  );
};

export default SingleShowTv;
