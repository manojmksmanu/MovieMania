import React, { useState, useEffect } from 'react'
import Title from '../../components/TitleOfPages/Title'
import InputField from '../../components/InputField/InputField'
import useFetch from '../../customHooks/Fetch'
import ShowAllCards from '../../components/ShowAllCards/ShowAllCards';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Toggle from '../../components/Toggle Button/Toggle'
import Loader from '../../components/Loading/Loading';
const Search = () => {
    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [showList, setShowList] = useState('movie');
    const [content, setContent] = useState();
    const [search, setSearch] = useState(showList);
    const url = `https://api.themoviedb.org/3/search/${showList}?query=${search}&include_adult=false&language=en-US&page=${pageNo}`

    const { data, loading, error } = useFetch(url);
    // console.log(search)
    
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])
    const List = [
        {
            name: 'Movies',
            listname: 'movie',
        },
        {
            name: 'TvSeries',
            listname: 'tv',
        },
        // {
        //     name: 'Person',
        //     listname: 'person',
        // },
    ]
    if (data) {
        return (
            <div>
                <Title title={'Search'} />
                <Toggle showList={showList} setShowList={setShowList} List={List} />
                <div className='container'>
                    <InputField value={showList} setSearch={setSearch} />
                </div>
                {
                    <ShowAllCards content={content} />
                }
                {
                    pages && pages > 1 ? (<CustomPagination pages={pages} setPageNo={setPageNo} />) : (<p></p>)
                }
            </div>
        )
    }

    if (loading) {
        <Loader setLoader={'true'} />
    }

    if (error) {
        <p>something went wrong!!!</p>
    }
}

export default Search