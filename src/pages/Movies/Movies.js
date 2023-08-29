import React, { useEffect, useState } from 'react'
import '../../global.css'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import useFetch from '../../customHooks/Fetch';
import Title from '../../components/TitleOfPages/Title';
import ShowAllCards from '../../components/ShowAllCards/ShowAllCards';
import Toggle from '../../components/Toggle Button/Toggle'
const Movies = () => {

    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [content, setContent] = useState();
    const [search, searchMovie] = useState();
    const [showList, setShowList] = useState('now_playing');

    // array of objects for radio button component  
    const List = [
        {
            name: "Now Playing",
            listname: "now_playing",
        },
        {
            name: "Popular",
            listname: "popular",
        },
        {
            name: "Top Rated",
            listname: "top_rated",
        },
        {
            name: "Upcoming",
            listname: "upcoming",
        },
    ]
    // ----using custom hook Fetch data---- //
    var url;
    search ? (url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNo}`) : (url = `https://api.themoviedb.org/3/movie/${showList}?language=en-US&page=${pageNo}`)

    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])
    console.log(content)
    return (
        <div>
            <Title title={'Movies'} />
            <Toggle setShowList={setShowList} showList={showList} List={List} />

            {/* <Genres type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPageNo={setPageNo} /> */}
            <ShowAllCards content={content} />
            {
                pages ? (<CustomPagination pages={pages} setPageNo={setPageNo} />) : (<p>sorry</p>)
            }

        </div>

    )
}

export default Movies