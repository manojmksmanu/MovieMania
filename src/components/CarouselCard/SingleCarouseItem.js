import React from 'react'
import './SingleCarousel.css'
import ScoreSlider from '../ScoreSlider/ScoreSlider'

const SingleCarouseItem = ({ data }) => {
  console.log(data)
  return (
    <div className='singleCarouselItem'>
      <img className='fill' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt='poster' />
      <div className='container trending_data_container'>
        <div className='left'>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' className='' />
          <ScoreSlider/>
        </div>
     <div className='right'></div>
      </div>

    </div>
  )
}

export default SingleCarouseItem