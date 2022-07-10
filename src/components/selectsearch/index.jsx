import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { FormControl } from '@mui/material';

const options = ['Option 1', 'Option 2'];

export default function ControllableStates({ labelname, data, isdisabled = false }) {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        // <FormControl>
        <div style={{ width: '100%' }}>
            {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                // size = {'medium'}
                // sx={{ width: 850 }}
                fullWidth={true}
                renderInput={(params) => <TextField {...params} label={`${labelname}`} />}
            />
        </div>
        // </FormControl>
    );
}
