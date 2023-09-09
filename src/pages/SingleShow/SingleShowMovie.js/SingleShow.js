import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../customHooks/Fetch';
import SingleCarouseItem from '../../../components/CarouselCard/SingleCarouseItem';
import Recommendations from '../SingleShowComponents/Recommendations';
import Casts from '../SingleShowComponents/Casts';
import './SingleShow.css';
import '../../../global.css'
import Video from '../SingleShowComponents/Video';
import SideData from '../SingleShowComponents/SideData';

const SingleShow = () => {
    const [content, setContent] = useState('');
    const { id } = useParams();
    const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

    useEffect(() => {
        window.scroll(0, 0);
    }, [content]);

    useEffect(() => {
        data ? (setContent(data)) : (setContent(''))
    });

    return (
        <div>
            {/* <h1>{id}</h1> */}
            {
                content ? (<SingleCarouseItem data={content} />) : ''
            }

            <div className='show_cast_with_sidedata display1'>
                <div className=' show_cast'>
                    <h4 className='display1 title_3'>Top Casts</h4>
                    <Casts id={id} type={'movie'} />
                </div>
                <div className='side_data'>
                    <SideData data={content} />
                </div>
            </div>
            <div>
                {
                    content ? (<Video id={id} />) : ('')
                }
            </div>

            <Recommendations id={id} type={'movie'} />
        </div>
    )
}

export default SingleShow