import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai'
import INF from '../../Images/image_not_found_500.gif'
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='card_'>

      <div className='card_img'>
        {
          data.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' /> : <img src={INF} alt='poster' />
        }
      </div>

      <div className='card_content'>
        <div className='upper'>
          <h3 className='title'>{data.title ? data.title : data.name}</h3>
          <div className='vote'>
            <span>{data.vote_average ? data.vote_average.toFixed(1) * 10 : ''}</span>
          </div>
        </div>

        <p className='date'>{data.release_date}</p>

        <div className='card_btn_'>
          {
            data.title ? (<span className='details_btn'>
              <Link className='read_more_btn' to={`/movies/${data.id}`} >Read More</Link>
            </span>) : (<span className='details_btn'>
              <Link className='read_more_btn' to={`/tv/${data.id}`} >Read More</Link>
            </span>)
          }
          {/* <AiOutlineHeart className='heart' /> */}
        </div>
      </div>
    </div >

  )
}

export default Card