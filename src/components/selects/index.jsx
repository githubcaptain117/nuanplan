import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ labelname, data }) {
    const [selectval, setselectval] = React.useState('');

    const handleChange = (event) => {
        setselectval(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{`${labelname}`}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectval}
                    label={`${labelname}`}
                    onChange={handleChange}
                >
                    {data.map((thisdata) => (
                        <MenuItem
                            key={thisdata}
                            value={thisdata}
                            // style={getStyles(name, personName, theme)}
                        >
                            {thisdata}
                        </MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}
