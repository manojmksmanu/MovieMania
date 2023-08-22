import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Radio.css'

export default function RowRadioButtonsGroup({ setShowList, showList, List }) {
    const [value, setValue] = React.useState(showList)
    const handleChange = (event) => {
        setValue(event.target.value);

    };
    React.useEffect(() => {
        setShowList(value);
    }, [value])
    console.log(List)
    return (
        <div className='radio-container'>
            <FormControl>
                {/* <FormLabel id="demo-row-radio-buttons-group-label">Select Category</FormLabel> */}
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={value}
                    onChange={handleChange}
                >
                    {
                        List && List.map((e) => {
                            return (
                                <FormControlLabel key={e.name} value={e.listname} control={<Radio />} label={e.name} />
                            )

                        })
                    }
                  

                </RadioGroup>
            </FormControl>

        </div>

    );
}