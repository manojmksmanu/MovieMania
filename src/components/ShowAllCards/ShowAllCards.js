import React from 'react'
import Card from '../Card/Card'
const ShowAllCards = ({ content }) => {
    return (
        <div>
            {
                content ? (<div className='movies wrap_cards container'>
                    {
                        content && content.map((c) => {
                            return (
                                <Card data={c} />
                            )
                        })
                    }
                </div>) : (<h2>Item does not exist</h2>)
            }
        </div>
    )
}

export default ShowAllCards