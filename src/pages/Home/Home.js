import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../global.css'
import Card from '../../components/Card/Card'
import { Carousel } from 'bootstrap';
import Swiper from '../../components/SwiperJs/Swiper';
const Home = () => {
    const [content, setContent] = useState([]);
    const [pageNO, setPageNO] = useState(1);

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/all/day`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmMwZTViODZkMjZiNjYzZjMwZGI4Njg1ZDgwYjUxYiIsInN1YiI6IjYzZjIzYzBkYTI0YzUwMDBhMTNkMDhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V0LM3lbW5-j0xG2HQYYR2kYltowJK7fNSEcwnLy22Kc'
        }
    };



    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setContent(response.data.results)
            })
            .catch(function (error) {
                console.error(error);
            });

    }, []);
    return (
        <>
            <Swiper data={content} />
            <div className='movies wrap_cards container'>
                {
                    content && content.map((c) => {
                        return (
                            <Card data={c} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home