import React, { useState, useEffect } from 'react'
import Title from '../../components/TitleOfPages/Title'
import RadioButton from '../../components/RadioGroup/RadioButton'
import InputField from '../../components/InputFieldMui/InputField'
import useFetch from '../../customHooks/Fetch'
import ShowAllCards from '../../components/ShowAllCards/ShowAllCards';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
const Search = () => {
    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState();
    const [showList, setShowList] = useState('movie');
    const [content, setContent] = useState();
    const [search, setSearch] = useState(showList);
    const url = `https://api.themoviedb.org/3/search/${showList}?query=${search}&include_adult=false&language=en-US&page=${pageNo}`

    const { data } = useFetch(url);
    console.log(search)
    useEffect(() => {
        data ? setContent(data.results) : setContent(null);
        data ? setPages(data.total_pages) : setPages();
    }, [data])
    // console.log(data.result)
    console.log(content)
    const List = [
        {
            name: 'Movies',
            listname: 'movie',
        },
        {
            name: 'TvSeries',
            listname: 'tv',
        },
        {
            name: 'Person',
            listname: 'person',
        },
    ]
    return (
        <div>
            <Title title={'Search'} />
            <RadioButton showList={showList} setShowList={setShowList} List={List} />
            <div className='container'>
                <InputField value={showList} setSearch={setSearch} />
            </div>
            <ShowAllCards content={content} />
            {
                pages && pages > 1 ? (<CustomPagination pages={pages} setPageNo={setPageNo} />) : (<p></p>)
            }
        </div>
    )
}

export default Search