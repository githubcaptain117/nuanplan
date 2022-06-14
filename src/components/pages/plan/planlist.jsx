import React from "react";
import { useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


//---------------------------- icon
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import EnhancedTable from "../../table/plan/tableplanlist";


ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Planlist({ handleettitlename }) {

    useEffect(() => {
        handleettitlename("รายการแผน");
    })

    const Barchart = () => {
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                },
            },
        };

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        const data = {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        };

        return (<React.Fragment><Bar options={options} data={data} /></React.Fragment>);
    }

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
                    <Barchart />
                    <EnhancedTable />
                </div>
            </div>
        </div>
    );
}

export default Planlist;