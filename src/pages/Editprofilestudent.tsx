
import React from 'react'
import Headerstudent from '../components/Headerstudent';
// import Container from '../components/Container';
// import {Button} from  "@material-ui/core";
import Menustudent from '../components/Memustudent';
// import Footer from '../components/Footer'; 
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import {
  Box,
  Button,
  TextField,
  // Typography,
  Grid,
  TableCell,
  // TableRow,
  // Container,
  // CssBaseline,
  // Form,
} from "@mui/material";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import ListSubheader from '@mui/material/ListSubheader';



 export default function Editprofilestudent() {

  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

   return (
     <div> 
        <Headerstudent/>
        <Menustudent/>
        <Box sx={{ bgcolor: '#bfc3c7', height: '100vh',width:"50vh",margin: "auto"
 }} >
   <form >
          <TableCell rowSpan={4} sx={{ height: 150, width: 150, display: "flex",justifyContent: "center", marginLeft: "auto",  marginRight: "auto"}}
>
          {/* <div  style={{ display: "inline-block" }}>
                    <TableRow >
                      <img
                        // src={file}
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 20,
                        }}
                      ></img>
                      
                    </TableRow>
                    <TableRow>
                      <Button variant="outlined" component="label" size="small">
                        เปลี่ยนรูปภาพ
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                        />
                      </Button>
                    </TableRow>
                  </div> */}
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ height: 150, width: 150, display: "flex",justifyContent: "center", marginLeft: "auto",  marginRight: "auto"}}
                    component="label"
                  >
                    <AddPhotoAlternateIcon />
                    เพิ่มรูปภาพ
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                    />
                  </Button>
          </TableCell>
        </form>
        <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid style={{ padding:"30px",borderRadius:"50px"}}>
              <TextField id="outlined-basic" label="ชื่อ" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"1px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="นามสกุล" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="เลขบัตรประจำตัวประชาชน" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="รหัสประจำตัวนักเรียน" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="e-mail" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"2px",borderRadius:"5px"}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="เลขที่" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">ระดับชั้น</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>1/1</MenuItem>
          <MenuItem value={21}>1/2</MenuItem>
          <MenuItem value={22}>2/1</MenuItem>
          <MenuItem value={22}>2/2</MenuItem>
          <MenuItem value={22}>3/1</MenuItem>
          <MenuItem value={22}>3/2</MenuItem>
          <MenuItem value={22}>4/1</MenuItem>
          <MenuItem value={22}>4/2</MenuItem>
          <MenuItem value={22}>5/1</MenuItem>
          <MenuItem value={22}>5/2</MenuItem>
          <MenuItem value={22}>6/1</MenuItem>
          <MenuItem value={22}>6/2</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              </Grid>
 </Box>
       
        </div>
   )
 }