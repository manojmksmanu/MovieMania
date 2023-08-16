import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres/Genres'
import Card from '../../components/Card/Card';
import '../../global.css'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import useFetch from '../../customHooks/Fetch';
import InputField from '../../components/InputFieldMui/InputField'
const Movies = () => {

    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [content, setContent] = useState();
    const [search, searchMovie] = useState();

    // const url = `https://api.themoviedb.org/3/discover/movie?page=${pageNo}`;
    // const urlSearchMovie = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${pageNo}`
    console.log(search, 'search')
    // ----using custom hook Fetch data---- //
    var url;
    search ? (url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNo}`) : (url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`)

    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])

    return (
        <div className='container'>
            <div>Movies</div>
            <InputField searchMovie={searchMovie} />
            {/* <Genres type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPageNo={setPageNo} /> */}
            {
                content ? (<div className='movies wrap_cards container'>
                    {
                        content && content.map((c) => {
                            return (
                                <Card data={c} />
                            )
                        })
                    }
                </div>) : (<h2>Item does not exist</h2>)
            }

            {/* <div className='movies wrap_cards container'>
                {
                    content && content.map((c) => {
                        return (
                            <Card data={c} />
                        )
                    })
                }
            </div> */}
            {
                pages ? (<CustomPagination pages={pages} setPageNo={setPageNo} />) : (<p>sorry</p>)
            }

        </div>

    )
}

export default Movies