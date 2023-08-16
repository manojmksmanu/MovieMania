
import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
import axios from 'axios'

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPageNo, }) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPageNo(1);
    }
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/genre/movie/list',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmMwZTViODZkMjZiNjYzZjMwZGI4Njg1ZDgwYjUxYiIsInN1YiI6IjYzZjIzYzBkYTI0YzUwMDBhMTNkMDhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V0LM3lbW5-j0xG2HQYYR2kYltowJK7fNSEcwnLy22Kc'
            }
        };
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setGenres(response.data.genres)
            })
            .catch(function (error) {
                console.error(error);
            });
            console.log("hello world")
        // return () => {
        //     setGenres({}); // unmounting
        // };
    }, [])

    // console.log(genres)

    return (
        <div>
            {
                selectedGenres && selectedGenres.map((e) => {
                    return (
                        <Chip onClick={() => handleAdd(genres)} key={e.id} label={e.name} size='large' color='primary' clickable />
                    )

                })
            }
            {
                Array.from(genres).map((d) => {
                    return (
                        <Chip onClick={(g) => handleAdd(g)} key={d.id} label={d.name} size='large' clickable />
                    )

                })
            }
        </div>
    )
}

export default Genres