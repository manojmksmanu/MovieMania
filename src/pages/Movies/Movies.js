import React, { useEffect, useState } from 'react'
import '../../global.css'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import useFetch from '../../customHooks/Fetch';
import Title from '../../components/TitleOfPages/Title';
import ShowAllCards from '../../components/ShowAllCards/ShowAllCards';
import Toggle from '../../components/Toggle Button/Toggle'
import Loader from '../../components/Loading/Loading';
const Movies = () => {

    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
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
    const url = `https://api.themoviedb.org/3/movie/${showList}?language=en-US&page=${pageNo}`;
    const { data, loading, error } = useFetch(url);
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])

     if (loading ) {
       <Loader setLoader={"true"} />;
     }

    if (data) {
        return (
            <div>
                <Title title={'Movies'} />
                <Toggle setShowList={setShowList} showList={showList} List={List} />
                <ShowAllCards content={content} />
                {
                    pages ? (<CustomPagination pages={pages} setPageNo={setPageNo} />) : (<p>sorry</p>)
                }
            </div>
        )
    }
   
    if (error) {
        <p>something went wrong!!!</p>
    }

}

export default Movies