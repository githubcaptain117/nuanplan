import React, { useState, useEffect, useRef } from "react";
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
// import { faker } from '@faker-js/faker';
import EnhancedTable from "../../table/plan/tableplanlist";
import jsPDF from "jspdf";
import 'jspdf-autotable'

//---------------------------- icon
import { FaFileExport, FaSearch, FaTimesCircle } from "react-icons/fa";



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
    const ref = useRef(null);
    const [headers, setheaders] = useState([]);
    // const [datarows, setdatarows] = useState([]);
    const people = useState([{ "name": "Frozen yoghurt", "calories": 159, "fat": 6, "carbs": 24, "protein": 4 }, { "name": "Ice cream sandwich", "calories": 237, "fat": 9, "carbs": 37, "protein": 4.3 }, { "name": "Eclair", "calories": 262, "fat": 16, "carbs": 24, "protein": 6 }, { "name": "Cupcake", "calories": 305, "fat": 3.7, "carbs": 67, "protein": 4.3 }, { "name": "Marshmallow", "calories": 318, "fat": 0, "carbs": 81, "protein": 2 }, { "name": "Gingerbread", "calories": 356, "fat": 16, "carbs": 49, "protein": 3.9 }, { "name": "Nougat", "calories": 360, "fat": 19, "carbs": 9, "protein": 37 }, { "name": "Jelly Bean", "calories": 375, "fat": 0, "carbs": 94, "protein": 0 }, { "name": "Lollipop", "calories": 392, "fat": 0.2, "carbs": 98, "protein": 0 }, { "name": "Honeycomb", "calories": 408, "fat": 3.2, "carbs": 87, "protein": 6.5 }])

    useEffect(() => {
        handleettitlename("รายการแผน");
    });

    useEffect(() => {
        let header = []
        for (let key in people[0]) {
            if (people[0].hasOwnProperty(key)) {
                // console.log(key);
                header.push(key)
            }
        }

        setheaders(header);
    }, [people]);

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

        // const labels = ['calories', 'fat', 'carbs', 'protein'];
        const labels = people.map((data) => data.name);

        const data = {
            labels,
            // datasets: [
            //     {
            //         label: 'Dataset 1',
            //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
            //     },
            //     {
            //         label: 'Dataset 2',
            //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
            //     },
            // ],
            datasets: [
                {
                    label: 'calories',
                    data: people.map((data) => data.calories),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }, {
                    label: 'fat',
                    data: people.map((data) => data.fat),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }, {
                    label: 'carbs',
                    data: people.map((data) => data.carbs),
                    backgroundColor: 'rgba(200, 99, 100, 0.5)',
                }, {
                    label: 'protein',
                    data: people.map((data) => data.protein),
                    backgroundColor: 'rgba(185, 72, 234, 0.5)',
                }
            ]
        };

        return (<React.Fragment><Bar ref={ref} options={options} data={data} /></React.Fragment>);
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

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "My Awesome Report";
        // const headers = [["name", "calories", "fat", "carbs", "protein"]];
        // var jsonArray = '{"required":1, "minlength":2}'
        // var jsonParsedArray = JSON.parse(jsonArray);
        // for (let key in people[0]) {
        //     if (people[0].hasOwnProperty(key)) {
        //         // console.log(key);
        //         headers.push(key)
        //     }
        // }

        console.log(`${headers}`);

        // const data = people.map(elt => [elt.name, elt.calories, elt.fat, elt.carbs, elt.protein]);
        // console.log(headers.map((head) => {return [`${head}`]} ));
        const data = people.map(elt => headers.map((head) => { return elt[`${head}`] }));

        console.log(`${people.map(elt => { return '{' + headers.map((head) => { return elt[`${head}`] }) + '}' })}`);
        // console.log(`${people.map(elt => headers.map((head) => {return elt[`${head}`]} ))}`);

        let content = {
            startY: 310,
            head: [headers],
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.addImage(ref.current.toBase64Image(), 'png', 40, 50, 515, 250);
        doc.autoTable(content);
        doc.save("report.pdf")
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
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container item spacing={3}>
                                            <React.Fragment>
                                                <Grid item xs={1}>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button fullWidth variant="contained" endIcon={<FaFileExport />} onClick={exportPDF}>
                                                        PDF
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button fullWidth variant="contained" endIcon={<FaFileExport />}>
                                                        EXCEL(เฉพาะข้อมูลเท่านั้น)
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button fullWidth variant="contained" endIcon={<FaFileExport />}>
                                                        WORD
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={1}>
                                                </Grid>
                                            </React.Fragment>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    </Box>
                    <Barchart />
                    <EnhancedTable datarow={people} />
                </div>
            </div>
        </div>
    );
}

export default Planlist;