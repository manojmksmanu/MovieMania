import React, { useState } from 'react'
import './InputField.css'
const InputField = ({ value, setSearch }) => {

    return (
        <div className='search_input' ><input placeholder={`search for ${value}`}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
        /></div>
    )
}

export default InputField