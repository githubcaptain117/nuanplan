import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtons({ labelname, data, isdisabled = false }) {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{`${labelname}`}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >

                {data.map((thisdata) => (
                    <FormControlLabel value={`${thisdata.value}`} control={<Radio />} label={`${thisdata.name}`} />
                ))}
                {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
            </RadioGroup>
        </FormControl>
    );
}
