import React from 'react'
import './style.css'
const CardForCast = ({ data }) => {
    return (
        <div className='cast_card'>
            <div className='cast_img' >
                <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} />
            </div>
            <div className='cast_card_content'>
                <strong><p>{data.original_name}</p></strong>
                <p>{data.character}</p>
                <p>
                    {data.gender === 2 ? 'Male' : 'Female'}
                </p>
            </div>
        </div>
    )
}

export default CardForCast