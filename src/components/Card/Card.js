import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai'
import './Card.css';
import { Badge } from '@mui/material';
import MuiModal from '../Modal/MuiModal';

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  // console.log(data)
  return (
    <div className='card_' key={data.id}>
      {/* <Badge badgeContent={data.vote_average}/> */}
      {/* <Badge badgeContent={data.vote_average}/> */}
      <Badge className='badge' badgeContent={data.vote_average} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 14, height: 20, minWidth: 25 } }} />
      <div className='card_content'>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' />

        <h3 className='title'>{data.title ? data.title : data.name}</h3>
      </div>
      <div className='card_btn_'>
        <span className='details_btn'><MuiModal id={data.id} /></span>

        <AiOutlineHeart className='heart' />
      </div>

    </div>

  )
}

export default Card