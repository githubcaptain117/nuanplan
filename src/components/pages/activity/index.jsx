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
        handleettitlename("สร้างกิจกรรม");
    })

    let year = [
        '2561',
        '2562',
        '2563',
        '2564',
        '2565'
    ];

    let activitytype = [
        { name: 'กิจกรรมใหม่', value: 'type01' },
        { name: 'กิจกรรมต่อเนื่อง', value: 'type02' },
        { name: 'งานประจำ', value: 'type03' }
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
                    <h1 className="font-weight-light">สร้างกิจกรรม</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"ปีการศึกษา"} data={year} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"ปีงบประมาณ"} data={year} isdisabled={true} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"ภาคเรียนที่"} data={constants.DEFUALT_TREM} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BasicSelect labelname={"ปี"} data={year} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <RowRadioButtons labelname={"ประเภท"} data={activitytype} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"กลยุทธ์"} data={year} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ControllableStates labelname={"โครงการ"} data={year} />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"รหัสกิจกรรม"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField fullWidth id="outlined-basic" label={"กิจกรรม"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"หน่วยงาน"} data={year} />
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
                                        <BasicSelect labelname={"หน่วยงานย่อย"} data={year} />
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
                                        <BasicSelect labelname={"ผู้รับผิดชอบ"} data={year} />
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
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="หลักการและเหตุผล"
                                            multiline
                                            rows={4}
                                        // defaultValue="Default Value"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="วัตถุประสงค์"
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
                                    <Grid item xs={8}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="ผู้เข้าร่วมกิจกรรม"
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
                                            <label>ติดตามงาน</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>ปฏิทินปฏิบัติงาน</label>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>

                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"วันที่ทำแผนกิจกรรม"}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"ถึงวันที่"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField fullWidth id="outlined-basic" label={"จำนวนวันเตือนก่อนถึงกำหนด "} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"วันที่ปฏิบัติกิจกรรม"}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <DatePickers
                                            labelname={"ถึงวันที่"}
                                        />
                                    </Grid>
                                </React.Fragment>
                            </Grid>

                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>-- ขั้นตอนการดำเนินงาน --</label>
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
                                            <label>การดำเนินงาน</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>ระยะเวลา</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>สถานที่</label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>ผู้รับผิดชอบ</label>
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <div style={{ width: '100%', textAlign: "center" }}>
                                            <label>(P) ขั้นเตรียมการ</label>
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
                                            <label>(D) ขั้นดำเนินการ</label>
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
                                            <label>(C) ขั้นติดตามประเมินผล</label>
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
                                            <label>(A) ขั้นปรับปรุงแก้ไข</label>
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
                                        การติดตามประเมินผล
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="การประเมินผล"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="ตัวชี้วัดความสำเร็จ (ผลลัพธ์)"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="วิธีการประเมิน"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
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
                                    <Grid item xs={8}>
                                        <TextField
                                            fullWidth
                                            id="outlined-multiline-static"
                                            label="สถานที่ดำเนินการ"
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
                                        <TextField fullWidth id="outlined-basic" label={"ลำดับที่"} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth id="outlined-basic" label={"ปริมาณผลผลิต/ผลลัพธ์ที่คาดหวัง"} variant="outlined" />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                            <Grid container item spacing={3}>
                                <React.Fragment>
                                    <Grid item xs={4}>
                                        <BasicSelect labelname={"ผู้รับผิดชอบกิจกรรม"} data={year} />
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
                                        <BasicSelect labelname={"หัวหน้ากลุ่มสาระฯ/หัวหน้างาน"} data={year} />
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
                                        <BasicSelect labelname={"ผู้เสนอกิจกรรม"} data={year} />
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
                                        <BasicSelect labelname={"ผู้เห็นชอบกิจกรรม"} data={year} />
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

export default Activity;