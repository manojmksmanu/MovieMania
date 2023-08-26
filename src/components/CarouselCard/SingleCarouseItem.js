import React from 'react'
import './SingleCarousel.css'

const SingleCarouseItem = ({ data }) => {
  
  return (
    <div className='singleCarouselItem'>
      <img className='fill' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt='poster' />
      <div className='display1 trending_data_container'>
        <div className='left'>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' className='' />
        </div>
        <div className='right'>
          <h2>
            {data.original_title ? data.original_title : data.original_name}
          </h2>
          <p>{data.media_type}</p>
          <p>{data.release_date}</p>
          <p> {data.vote_average}</p>
          <p>
            {
              data.overview
            }
          </p>
        </div>
      </div>

    </div>
  )
}

export default SingleCarouseItem