import React from "react";
import Vote from "../../../components/VoteAverageCircular/Vote";
import INF from "../../../Images/image_not_found_500.gif";
import "./style.css";

const Season = ({ data }) => {
  return (
    <div className="season_component">
      {/* Left Section - Image */}
      <div className="sc_left">
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : INF
          }
          alt="season-poster"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="sc_right">
        {data.name && <h2>{data.name}</h2>}

        {data.episode_count > 0 && (
          <div className="_flex">
            <h4>Episodes:</h4>
            <h4>({data.episode_count})</h4>
          </div>
        )}

        {data.vote_average > 0 && <Vote data={data.vote_average} />}

        {data.overview && (
          <div>
            <h4>Overview</h4>
            <p>{data.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Season;
