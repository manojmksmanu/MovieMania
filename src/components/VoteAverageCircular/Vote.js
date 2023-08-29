import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'
import './Vote.css'

const Vote = ({ data }) => {
    const percentage = data.toFixed(1) * 10;
    return (
        <div className='circular_vote_bar'>
            <CircularProgressbar value={percentage} text={`${percentage}`}
                styles={{
                    // Customize the text
                    text: {
                        fill: ' #1e78d2',
                        fontWeight: 'bold',
                        fontSize: '40px',
                    },
                }}
            />;
        </div>
    )
}

export default Vote