import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai'
import './Card.css';
import MuiModal from '../Modal/MuiModal';

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='card_' key={data.id}>
      {/* <Badge className='badge' badgeContent={data.vote_average} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 14, height: 20, minWidth: 25 } }} /> */}
      <div className='card_img'>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' />
      </div>
      <div className='card_content'>
        <div className='upper'>
          <h3 className='title'>{data.title ? data.title : data.name}</h3>
          <div className='vote'>
            <span>{data.vote_average ? data.vote_average.toFixed(1) : ''}</span>
          </div>
        </div>
        <p className='date'>{data.release_date}</p>
        <div className='card_btn_'>
          <span className='details_btn'><MuiModal id={data.id} /></span>

          <AiOutlineHeart className='heart' />
        </div>
      </div>


    </div >

  )
}

export default Card