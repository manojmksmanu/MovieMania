import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres/Genres'
import Card from '../../components/Card/Card';
import '../../global.css'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import useFetch from '../../customHooks/Fetch';
import RadioButton from '../../components/RadioGroup/RadioButton'
import Title from '../../components/TitleOfPages/Title';
import ShowAllCards from '../../components/ShowAllCards/ShowAllCards';
const Movies = () => {

    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [content, setContent] = useState();
    const [showList, setShowList] = useState('airing_today')
    const url = `https://api.themoviedb.org/3/tv/${showList}?language=en-US&page=${pageNo}`;

    const List = [
        {
            name: 'Airing Today',
            listname: 'airing_today',
        },
        {
            name: 'On The Air',
            listname: 'on_the_air',
        },
        {
            name: 'Popular',
            listname: 'popular',
        },
        {
            name: 'Top Rated',
            listname: 'top_rated',
        },
    ]

    // ----using custom hook Fetch data---- // 
    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])

    console.log(data);
    return (
        <>
            <Title title={'TvShows'} />
            <RadioButton showList={showList} setShowList={setShowList} List={List} />
            <h3 className='container'>{showList}</h3>
            {/* <Genres type='movie' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPageNo={setPageNo} /> */}
            <div className='movies wrap_cards container'>
                <ShowAllCards content={content} />
            </div>
            <CustomPagination pages={pages} setPageNo={setPageNo} />
        </>

    )
}

export default Movies