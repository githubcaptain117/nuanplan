import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
// import { AgChartsReact } from 'ag-charts-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
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


function GridExample() {
    const gridRef = useRef();
    let barchartRef = useRef(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            editable: true,
            resizable: true,
            minWidth: 100,
            flex: 1,
        };
    }, []);

    const popupParent = useMemo(() => {
        return document.body;
    }, []);

    const tagimg = () => {
        return (
            <React.Fragment>
                <img
                    alt={"test"}
                    src={barchartRef.current.toBase64Image()}
                />
            </React.Fragment>
        )
    }

    const [columnDefs] = useState([
        {
            field: 'country',
            headerName: 'country',
            minWidth: 250,
            width: 250,
            maxWidth: 250,
            cellRenderer: tagimg,
        },
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
    ]);

    const onBtnExport = useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, []);

    const onBtnUpdate = useCallback(() => {
        document.querySelector(
            '#csvResult'
        ).value = gridRef.current.api.getDataAsCsv(); //gridRef.current.api.getDataAsCsv();

        document.querySelector(
            '#chartimg'
        ).src = barchartRef.current.toBase64Image();
    }, []);

    // const defaultExcelExportParams = useMemo(() => {
    //     return {
    //         addImageToCell: (rowIndex, col, value) => {
    //             if (col.getColId() !== 'country') {
    //                 return;
    //             }
    //             const countryCode = barchartRef.current.toBase64Image();
    //             return {
    //                 image: {
    //                     id: 'country',
    //                     base64: countryCode,
    //                     imageType: 'png',
    //                     width: 200,
    //                     height: 110,
    //                     position: {
    //                         offsetX: 30,
    //                         offsetY: 5.5,
    //                     },
    //                 },
    //             };
    //         },
    //     };
    // }, []);

    // const defaultExcelExportParams = {
    //     addImageToCell: (rowIndex, column, value) => {
    //         if (rowIndex === 1 && column.colId === 'athlete') {
    //             const myCompanyLogo = barchartRef.current.toBase64Image();
    //             console.log("myCompanyLogo: " + myCompanyLogo);
    //             return {
    //                 image: {
    //                     id: 'company_logo',
    //                     base64: myCompanyLogo,
    //                     imageType: 'png',
    //                     fitCell: false
    //                 }
    //             };
    //         }
    //     }
    // };

    function getBase64Image(url, callback) {
        console.log('getBase64Image')
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                console.log('reader.result: ' + reader.result)
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    const defaultExcelExportParams = {
        addImageToCell: (rowIndex, column, value) => {
            // if (rowIndex === 1 && column.colId === 'athlete') {
            // let myCompanyLogo = null;
            // getBase64Image('./bgsidemenu.png', function (dataUrl) {
            //     console.log('dataUrl: ' + dataUrl)
            //     myCompanyLogo = dataUrl;
            // })

            let myCompanyLogo = barchartRef.current.toBase64Image();
            return {
                image: {
                    id: 'company_logo',
                    base64: myCompanyLogo,
                    imageType: 'png',
                    fitCell: false
                }
            };
            // }
        }
    };

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

        return (<React.Fragment><Bar ref={barchartRef} options={options} data={data} /></React.Fragment>);
    }

    return (
        <>
            <div style={containerStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ margin: '10px 0' }}>
                        <button onClick={onBtnUpdate}>Show CSV export content text</button>
                        <button onClick={onBtnExport}>Download CSV export file</button>
                    </div>
                    <div style={{ flex: '1 1 0', position: 'relative' }}>
                        <div id="gridContainer">
                            <Barchart />
                            <div className="ag-theme-alpine" style={{ width: '100%', height: 500 }}>
                                <AgGridReact
                                    ref={gridRef}
                                    defaultExcelExportParams={defaultExcelExportParams}
                                    rowData={rowData}
                                    defaultColDef={defaultColDef}
                                    suppressExcelExport={true}
                                    popupParent={popupParent}
                                    columnDefs={columnDefs}
                                ></AgGridReact>

                                {/* <AgGridReact
                                    ref={gridRef}
                                    rowData={rowData}
                                    columnDefs={columnDefs}
                                    defaultColDef={defaultColDef}
                                    defaultExcelExportParams={defaultExcelExportParams}
                                // context={context}
                                // onGridReady={onGridReady}
                                ></AgGridReact> */}

                                {/* <AgGridReact ref={gridRef} columnDefs={columnDefs} defaultExcelExportParams={defaultExcelExportParams}></AgGridReact> */}
                            </div>
                        </div>
                        <textarea id="csvResult">
                            Click the Show CSV export content button to view exported CSV here
                        </textarea>
                        <img id="chartimg" />
                    </div>
                </div>
            </div>
        </>
    );
};

// function GridExample() {
//     const gridRef = useRef(); // Optional - for accessing Grid's API
//     const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

//     // Each Column Definition results in one Column.
//     const [columnDefs, setColumnDefs] = useState([
//         { field: 'make', filter: true },
//         { field: 'model', filter: true },
//         { field: 'price' }
//     ]);

//     // DefaultColDef sets props common to all Columns
//     const defaultColDef = useMemo(() => ({
//         sortable: true
//     }));

//     // Example of consuming Grid Event
//     const cellClickedListener = useCallback(event => {
//         console.log('cellClicked', event);
//     }, []);

//     // Example load data from sever
//     useEffect(() => {
//         fetch('https://www.ag-grid.com/example-assets/row-data.json')
//             .then(result => result.json())
//             .then(rowData => setRowData(rowData))
//     }, []);

//     // Example using Grid's API
//     const buttonListener = useCallback(e => {
//         gridRef.current.api.deselectAll();
//     }, []);

//     return (
//         <div>

//             {/* Example using Grid's API */}
//             <button onClick={buttonListener}>Push Me</button>

//             {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
//             <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>

//                 <AgGridReact
//                     ref={gridRef} // Ref for accessing Grid's API

//                     rowData={rowData} // Row Data for Rows

//                     columnDefs={columnDefs} // Column Defs for Columns
//                     defaultColDef={defaultColDef} // Default Column Properties

//                     animateRows={true} // Optional - set to 'true' to have rows animate when sorted
//                     rowSelection='multiple' // Options - allows click selection of rows

//                     onCellClicked={cellClickedListener} // Optional - registering for Grid Event
//                 />
//             </div>
//         </div>
//     );
// }

export default GridExample;