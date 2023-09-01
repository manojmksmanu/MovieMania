import React, { useState, useEffect } from 'react'
import useFetch from '../../../customHooks/Fetch';

const Video = ({ id }) => {
    const [content, setContent] = useState();
    const [videoKey, setVideoKey] = useState(null);
    const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);

    useEffect(() => {
        data ? (setContent(data.results)) : (setContent(null))
        // Check if the movie has videos
        if (content && content.length > 0) {
            setVideoKey(content[0].key);
        }
    })
    return (
        <div className='display1'>
            {

                videoKey && <iframe className='iframe'
                   
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    title="Trailer"
                    frameborder="0"
                    allowfullscreen
                >
                </iframe>

            }

        </div>
    )
}

export default Video