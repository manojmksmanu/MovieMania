import React from 'react'
import Vote from '../../../components/VoteAverageCircular/Vote'
import INF from '../../../Images/image_not_found_500.gif'
const Season = ({ data }) => {
    return (
        <div className='season_component'>
            <div className='sc_left'>
             {
                data.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='img' />
                :
                <img src={INF} alt='img'/>

             }   
            </div>
            <div className='sc_right'>
                {
                    data.season_number ? <div className='_flex'>
                        <h2>{data.name}</h2>
                    </div> : ''
                }
                {
                    data.episode_count ? <div className='_flex'>
                        <h4>Episodes</h4>
                        <h4>({data.episode_count})</h4>
                    </div> : ''
                }
                {
                    data.vote_average ? <Vote data={data.vote_average} /> : ''
                }
                {
                    data.overview ? <div>
                        <h4>Overview</h4>
                        <p>{data.overview}</p>
                    </div> : ''
                }


            </div>
        </div>
    )
}

export default Season