import React from 'react'
import useFetch from '../../../customHooks/Fetch'

const Images = ({ id }) => {
    const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}/images`)
    console.log(data)
    return (
        <div>Images</div>
    )
}

export default Images