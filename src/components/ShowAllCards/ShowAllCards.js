import React from 'react'
import Card from '../Card/Card'
const ShowAllCards = ({ content }) => {
    return (
        <div>
            {
                content ? (<div className='wrap_cards display1'>
                    {
                        content && content.map((c) => {
                            return (
                                <Card data={c} key={c.id} />
                            )
                        })
                    }
                </div>) : (<h2>Item does not exist (something went wrong!!)</h2>)
            }
        </div>
    )
}

export default ShowAllCards