import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { AiOutlineClose } from 'react-icons/ai'
import LanguageIcon from '@mui/icons-material/Language';
import './MovieDetails.css'
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const MoviesDetails = ({ id, handleClose }) => {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmMwZTViODZkMjZiNjYzZjMwZGI4Njg1ZDgwYjUxYiIsInN1YiI6IjYzZjIzYzBkYTI0YzUwMDBhMTNkMDhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V0LM3lbW5-j0xG2HQYYR2kYltowJK7fNSEcwnLy22Kc'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setData(response)
      )
      .catch(err => console.error(err));
  }, [])
  console.log(data);
  return (
    <div>{
      data ? (<div className='movie_details'>
        <AiOutlineClose className='close' onClick={handleClose} />
        <div className='top' >
          <div className='img'>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} />
            <span className='website_home'>
            <a href={data.homepage} target='blank'> <LanguageIcon className='LanguageIcon' sx={{fontSize : '50px'}} /></a>
            </span>
          </div>
          <div className='right'>
            <span className='title' > {data.original_title} </span>
            <span className='tag'>  <strong>Tags:</strong> {
              data.genres && data.genres.map((e) => {
                return (
                  <Chip color='primary' label={e.name} />
                )
              })
            }
            </span>
            
            {/* <h3><strong>Popularity:</strong> {data.popularity} </h3>
            <h3><strong>Release Date:</strong> {data.release_date} </h3>
            <h3><strong>Tag Line:</strong> {data.tagline} </h3>
            <h3><strong>Average Vote:</strong> {data.vote_average} </h3> */}
          </div>
        </div>


        <p className='overview'>{data.overview}</p>
        {/* <h1>{params.id}</h1> */}
      </div>) : (<img className='loading' src='./loading.gif' />)


    }</div>
  )
}

export default MoviesDetails