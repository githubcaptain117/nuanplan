import React from "react";
import { useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//components
import {
    BasicSelect,
    MultipleSelectChip,
    CustomizedTables,
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

function Plan({ handleettitlename }) {
    // const [textval, settextval] = useState('');

    useEffect(() => {
        handleettitlename("สร้างแผน");
    })

    let year = [
        '2561',
        '2562',
        '2563',
        '2564',
        '2565'
    ];

    let strategy = [
        'กลยุทธ์1',
        'กลยุทธ์2',
        'กลยุทธ์3'
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
                    <h1 className="font-weight-light">สร้างแผน</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"ปี"} data={year} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <MultipleSelectChip labelname={"กลยุทธ์"} data={strategy} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label={"พันธกิจ"}
                                            labelPlacement="end"
                                        />
                                        {/* </Grid>
                                    <Grid item xs={2}> */}
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label={"เป้าประสงค์"}
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"รหัสโครงการ / งาน"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"โครงการ / งาน"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"ชื่อแผนงานหลัก"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"ด้านมาตรฐานสากล"} data={year} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"มาตรฐานสากล"} data={year} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label={"มาตรฐานการศึกษาชาติ"}
                                            labelPlacement="end"
                                        />
                                        {/* </Grid>
                                    <Grid item xs={2}> */}
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label={"มาตรฐานการศึกษาของสถานศึกษา"}
                                            labelPlacement="end"
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
                                            label="หลักการและเหตุผล"
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
                                    <Grid item xs={1}>
                                        วัตถุประสงค์
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="ผลผลิต (outputs)"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="ผลลัพธ์ (outcomes)"
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
                                        เป้าหมาย
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="เชิงปริมาณ"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="เชิงคุณภาพ"
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
                                        <TextField fullWidth id="outlined-basic" label={"สถานที่ดำเนินการ"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"ระยะเวลาดำเนินการ"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        การประเมินผล
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="ตัวชี้วัดความสำเร็จ"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="วิธีการประเมิน"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="เครื่องมือที่ใช้"
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
                                            label="ผลที่คาดว่าจะได้รับ"
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
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"งบประมาณคุมโครงการตั้งไว้"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"ผู้รับผิดชอบโครงการ"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            เลือก
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
                                        <BasicSelect labelname={"ผู้เสนอโครงการ"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            เลือก
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
                                        <BasicSelect labelname={"ผู้เห็นชอบโครงการ"} data={year} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />} size="large">
                                            เลือก
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
                                    <Grid item xs={2}>
                                        <TextField fullWidth id="outlined-basic" label={"ลำดับที่"} variant="outlined" />
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
                                            ล้างข้อมูล
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button fullWidth variant="contained" endIcon={<FaSave />}>
                                            บันทึก
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

export default Plan;