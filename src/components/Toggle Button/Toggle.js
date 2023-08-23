import * as React from 'react';
import './toggle.css'

export default function ColorToggleButton({ setShowList, showList, List }) {

    const handleChange = (newValue) => {
        setShowList(newValue);
    };

    return (
        <div className='togglebtn'>
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