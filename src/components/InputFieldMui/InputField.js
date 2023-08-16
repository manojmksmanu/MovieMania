import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './InputField.css'
export default function MultilineTextFields({ searchMovie }) {
    const [search, setSearch] = useState();
    // const [movie, setMovie] = useState();
    useEffect(() => {
        searchMovie(search);
    }, [search])
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='input_field'>
                <TextField id="standard-basic" label="Search For Movie" variant="standard"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                {/* <SearchIcon className='SearchIcon' sx={{ fontSize: '50px' }}
                    onClick={() => {
                        setMovie(search)
                        console.log('clicked')
                    }}
                /> */}
            </div>
        </Box>
    );
}
