import React, { useEffect, useRef } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useCallback } from "react";

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

function Home({ handleettitlename }) {
  let ref = useRef(null);

  useEffect(() => {
    handleettitlename("Dashboard");
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

    return (<React.Fragment><Bar ref={ref} options={options} data={data} /></React.Fragment>);
  }

  const Piechart = () => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (<React.Fragment><Pie data={data} /></React.Fragment>);
  }

  const Doughnutchart = () => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (<React.Fragment><Doughnut data={data} /></React.Fragment>);
  }

  const Linechart = () => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    return (<React.Fragment><Line options={options} data={data} /></React.Fragment>);
  }

  const downloadImage = useCallback(() => {
    console.log("downloadIamge")
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  // const downloadIamge = () => {
  //   console.log("downloadIamge")
  //   const link = document.createElement("a");
  //   link.download = "chart.png";
  //   link.href = ref.current.toBase64Image();
  //   link.click();
  // };

  return (
    <div className="home">
      <div className="container">
      <button type="button" onClick={downloadImage}>Download BarChart</button>
        <div className="row align-items-center my-5">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid container item spacing={3}>
                <React.Fragment>
                  <Grid item xs={6}>
                    <Barchart />
                  </Grid>
                  <Grid item xs={6}>
                    <Linechart />
                  </Grid>
                </React.Fragment>
              </Grid>
              <Grid container item spacing={3}>
                <React.Fragment>
                  <Grid item xs={6}>
                    <Doughnutchart />
                  </Grid>
                  <Grid item xs={6}>
                    <Piechart />
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

export default Home;