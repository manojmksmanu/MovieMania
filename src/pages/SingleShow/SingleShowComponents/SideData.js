import React from 'react'
import './style.css'
const SideData = ({ data }) => {
    return (
        <div>
            <div className='side_card_component'>
                {
                    data.status ?
                        <div>
                            <strong>
                                <p className='side_data_title'>Status:-</p>
                            </strong>
                            <p>{data.status ? (data.status) : "-"}</p>
                        </div> : ''
                }
                {
                    data.budget ?
                        <div>
                            <strong>
                                <p className='side_data_title'>Budget:-</p>
                            </strong>
                            <p>{data.budget ? (`$${data.budget}`) : "-"}</p>
                        </div> : ''
                }
                {
                    data.revenue ?
                        <div>
                            <strong>
                                <p className='side_data_title'>Revenue:-</p>
                            </strong>
                            <p>{data.revenue ? (`$${data.revenue}`) : "-"}</p>
                        </div> : ''
                }
                {
                    data.popularity ?
                        <div>
                            <strong className='side_data_title'>
                                <p>Popularity:-</p>
                            </strong>
                            <p>{data.popularity ? (`${data.popularity}`) : "-"}</p>
                        </div> : ''
                }
                {
                    data.networks ?
                        <div>
                            <strong className='side_data_title'>
                                <p>Networks:-</p>
                            </strong>
                            {
                                data.networks.map((e) => {
                                    return (<img className='network_logo' key={e.id} src={`https://image.tmdb.org/t/p/w500${e.logo_path}`} />)
                                })
                            }
                        </div>


                        : ('')
                }
            </div>
        </div>
    )
}

export default SideData