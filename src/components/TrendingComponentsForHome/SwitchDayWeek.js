import React, { setState, useState } from 'react'
import './TrendingStyle.css'
const SwitchDayWeek = ({ dayWeek, setDayWeek }) => {
    return (
        <div className='switch_container display1'>
            <div className='trendingSwitch' >
                <span onClick={() => { setDayWeek('day') }}
                    className={dayWeek === 'day' ? 'active_switchtr' : ''}
                >ToDay</span>
                <span onClick={() => { setDayWeek('week') }} className={dayWeek === 'week' ? 'active_switchtr' : ''} >ThisWeek</span>
            </div>

        </div>
    )
}

export default SwitchDayWeek