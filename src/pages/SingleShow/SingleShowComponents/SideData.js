import React from 'react'
import './style.css'
const SideData = ({ data }) => {
    return (
        <div>
            <div className='side_card_component'>
                <strong>
                    <p className='side_data_title'>Status:-</p>
                </strong>
                <p>{data.status ? (data.status) : "-"}</p>

                <strong>
                    <p className='side_data_title'>Budget:-</p>
                </strong>
                <p>{data.budget ? (`$${data.budget}`) : "-"}</p>

                <strong>
                    <p className='side_data_title'>Revenue:-</p>
                </strong>
                <p>{data.revenue ? (`$${data.revenue}`) : "-"}</p>

                <strong className='side_data_title'>
                    <p>Popularity:-</p>
                </strong>
                <p>{data.popularity ? (`${data.popularity}`) : "-"}</p>
            </div>
        </div>
    )
}

export default SideData