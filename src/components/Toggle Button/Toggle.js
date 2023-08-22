import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './toggle.css'

export default function ColorToggleButton({ setShowList, showList, List }) {

    const handleChange = (newValue) => {
        setShowList(newValue);
    };
    console.log(showList)

    return (
        <div className='togglebtn'>
            {/* <ToggleButtonGroup
                color="primary"
                value={showList}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px', borderRadius: '50px' }}
            > */}
            {/* {
                    List && List.map((e) => {
                        return (
                            <ToggleButton sx={{ fontSize: "10px", fontWeight: 700 }} className='togglebutton' value={e.listname}>{e.name}</ToggleButton>
                        )

                    })
                } */}
            {
                List && List.map((e) => {
                    return <div className='_toggle_singlebtn'>
                        <label className={showList === e.listname ? 'active_' : 'label'} htmlFor={e.listname} >{e.name}</label>
                        <input id={e.listname} type='radio' name='m' value={e.listname} onChange={(e) => {
                            setShowList(e.target.value)
                        }} checked={showList === e.listname} />
                    </div>

                })

            }

            {/* </ToggleButtonGroup> */}
        </div>

    );
}