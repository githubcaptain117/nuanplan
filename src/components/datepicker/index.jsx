import React from 'react';
import TextField from '@mui/material/TextField';


export default function DatePickers({ labelname, data, isdisabled = false }) {
    return (
        <form noValidate>
            <TextField
                fullWidth
                id="date"
                label={`${labelname}`}
                type="date"
                defaultValue="2017-05-24"
                // className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}
