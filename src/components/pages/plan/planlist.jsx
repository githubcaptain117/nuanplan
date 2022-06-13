import React from "react";
import { useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


//---------------------------- icon
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import EnhancedTable from "../../table/plan/tableplanlist";


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function Planlist({ handleettitlename }) {

    useEffect(() => {
        handleettitlename("รายการแผน");
    })

    const FormRow = () => {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <h1 className="font-weight-light">รายการแผน</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid container item spacing={3}>
                                <FormRow />
                            </Grid>
                            {/* <Grid container item spacing={3}>
                                <FormRow />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow />
                            </Grid> */}


                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button fullWidth variant="outlined" startIcon={<FaTimesCircle />}>
                                            ล้างข้อมูล
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button fullWidth variant="contained" endIcon={<FaSearch />}>
                                            ค้นหา
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </Box>

                    <EnhancedTable />
                </div>
            </div>
        </div>
    );
}

export default Planlist;