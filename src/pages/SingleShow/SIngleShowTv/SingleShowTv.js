import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../../customHooks/Fetch';
import SingleCarouseItem from '../../../components/CarouselCard/SingleCarouseItem';
import Recommendations from '../SingleShowComponents/Recommendations';
import Casts from '../SingleShowComponents/Casts';
import './SingleShowTv.css';
import Video from '../SingleShowComponents/Video';
import SideData from '../SingleShowComponents/SideData';
import Season from '../SingleShowComponents/Season';
import '../../../global.css'
const SingleShowTv = () => {
    const [content, setContent] = useState('');
    const { id } = useParams();
    const { data } = useFetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);

    useEffect(() => {
        window.scroll(0, 0);
    }, [content]);

    useEffect(() => {
        data ? (setContent(data)) : (setContent(''))
    });
    return (
        <div >
            {id}
            {
                content ? (<SingleCarouseItem data={content} />) : ''
            }
            <h4 className='display1 title_3'>Top Casts</h4>
            <div className='show_cast_with_sidedata display1'>
                <div className=' show_cast'>
                    <Casts id={id} type={'tv'} />
                </div>
                <div className='side_data'>
                    <SideData data={content} />
                </div>
            </div>
            <h4 className='display1 title_3'>Seasons</h4>
            <div className='display1'>
                {
                    content && content.seasons.map((e) => {
                        return <Season  data={e} />

                    })
                }

            </div>

            <h4 className='display1 title_3'>Recommendations</h4>
            <Recommendations className='display1' id={id} type={'tv'} />
        </div>
    )
}

export default SingleShowTv