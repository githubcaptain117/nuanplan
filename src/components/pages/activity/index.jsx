import React from "react";
import { useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import * as constants from "../../../constants";

//components
import {
    BasicSelect,
    CustomizedTables,
    RowRadioButtons,
    ControllableStates,
    DatePickers,
} from "../../index";

//---------------------------- icon
import { FaSave, FaTimesCircle } from "react-icons/fa";
// import { useState } from "react";


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//         color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: 'red',
//         },
//         '&:hover fieldset': {
//             borderColor: 'yellow',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: 'green',
//         },
//     },
// });

// const ValidationTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//         borderColor: 'green',
//         borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//         borderColor: 'red',
//         borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//         borderLeftWidth: 6,
//         padding: '4px !important', // override inline-style
//     },
// });

function Activity({ handleettitlename }) {
    // const [textval, settextval] = useState('');

    useEffect(() => {
        handleettitlename("????????????????????????????????????");
    })

    let year = [
        '2561',
        '2562',
        '2563',
        '2564',
        '2565'
    ];

    let activitytype = [
        { name: '?????????????????????????????????', value: 'type01' },
        { name: '????????????????????????????????????????????????', value: 'type02' },
        { name: '????????????????????????', value: 'type03' }
    ];

    // const FormRow = () => {
    //     return (
    //         <React.Fragment>
    //             <Grid item xs={4}>
    //                 <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
    //             </Grid>
    //             <Grid item xs={4}>
    //                 <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
    //             </Grid>
    //             <Grid item xs={4}>
    //                 <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
    //             </Grid>
    //         </React.Fragment>
    //     );
    // }

    // const onchangehandletextval = (e) => {
    //     settextval(e.target.value)
    // }

    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <h1 className="font-weight-light">????????????????????????????????????</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"??????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"??????????????????????????????"} data={year} isdisabled={true} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"?????????????????????????????????"} data={constants.DEFUALT_TREM} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"??????"} data={year} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <RowRadioButtons labelname={"??????????????????"} data={activitytype} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"?????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ControllableStates labelname={"?????????????????????"} data={year} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"?????????????????????????????????"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField fullWidth id="outlined-basic" label={"?????????????????????"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"????????????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"????????????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={1}>
                                        ????????????????????????
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="??????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="??????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={8}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="??????????????????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>???????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>????????????????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>

                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"??????????????????????????????????????????????????????"}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"???????????????????????????"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={"??????????????????????????????????????????????????????????????????????????? "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"????????????????????????????????????????????????????????????"}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"???????????????????????????"}
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>

                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>-- ????????????????????????????????????????????????????????? --</label>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>?????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>(P) ???????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>(D) ???????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>(C) ?????????????????????????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>(A) ???????????????????????????????????????????????????</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={" "} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        ??????????????????????????????????????????????????????
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????????????????????????? (?????????????????????)"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="??????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={8}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="?????????????????????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={8}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="????????????????????????????????????????????????"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={"????????????????????????"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"????????????????????????????????????/???????????????????????????????????????????????????"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"?????????????????????????????????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"???????????????????????????????????????????????????/??????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"??????????????????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"???????????????????????????????????????????????????"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            ???????????????
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <CustomizedTables />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            {/* <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <ValidationTextField
                                            fullWidth
                                            label="CSS validation style"
                                            required
                                            variant="outlined"
                                            defaultValue="Success"
                                            id="validation-outlined-input"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ValidationTextField
                                            fullWidth
                                            label="CSS validation style"
                                            required
                                            variant="outlined"
                                            id="validation-outlined-input"
                                            value={textval}
                                            onChange={onchangehandletextval}
                                            error={textval === ''}
                                            helperText={textval === '' ? "Incorrect entry." : ''}
                                        // helperText="Incorrect entry."
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="Multiline"
                                            multiline
                                            rows={4}
                                            defaultValue="Default Value"
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid> */}

                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button fullWidth variant="outlined" startIcon={<FaTimesCircle />}>
                                            ??????????????????????????????
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />}>
                                            ??????????????????
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Activity;