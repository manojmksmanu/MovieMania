import React from 'react'
import './SingleCarousel.css'
import Vote from '../VoteAverageCircular/Vote'
import { Link } from 'react-router-dom'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SingleCarouseItem = ({ data }) => {
  console.log(data, 'single')
  return (
    <div className='singleCarouselItem'>

      <img className='fill' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt='poster' />

      <div className='display1 trending_data_container'>

        <div className='left'>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='poster' className='' />
        </div>
        <div className='right'>

          <div>
            <h2>
              {data.original_title ? data.original_title : data.original_name}
            </h2>
            <p>{data.media_type}</p>
            {
              data.release_date ? <p className='banner_release'> <strong>R</strong> {data.release_date}
              </p> : ''
            }
            <Vote data={data.vote_average} />
            {data.spoken_languages.length>0 ? <p className='banner_spoken_language'><strong>L</strong> {data.spoken_languages[0].english_name}
            </p> : ""
            }
            {
              data.number_of_seasons ? <p className='banner_spoken_language'><strong>Seasons</strong> {data.number_of_seasons} </p> : ''
            }
            <p className='banner_overview'>
              <strong>Overview</strong>
            </p>
            <p>
              {data.overview}
            </p>
          </div>

          <div>
            {data.production_companies
              ?
              <a href={data.homepage} target='blank' >
                <FaArrowUpRightFromSquare className='home_page_redirect' />
              </a>
              :
              <Link className='read_more_btn banner_btn_readmore' to={`/movies/${data.id}`}>
                Read More
              </Link>
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default SingleCarouseItem