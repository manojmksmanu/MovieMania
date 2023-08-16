import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres/Genres'
import Card from '../../components/Card/Card';
import '../../global.css'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import useFetch from '../../customHooks/Fetch';
const Movies = () => {

    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [content, setContent] = useState();
    const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`;

    // ----using custom hook Fetch data---- //
    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])
    console.log(data);
    return (
        <>
            <div>Tv Series</div>
            {/* <Genres type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPageNo={setPageNo} /> */}
            <div className='movies wrap_cards container'>
                {
                    content && content.map((c) => {
                        return (
                            <Card data={c} />
                        )
                    })
                }
            </div>
            <CustomPagination pages={pages} setPageNo={setPageNo} />
        </>

    )
}

export default Movies