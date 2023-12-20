
import React from 'react'
import Headerstudent from '../components/Headerstudent';
import Menuteacher from '../components/Menuteacher';

import {
  Box,
  Button,
  TextField,
  // Typography,
  Grid,
  TableCell,
  Paper,
  ThemeProvider,
//   TableRow,
//   Stack,
//   Avatar,
  // TableRow,
  // Container,
  // CssBaseline,
  // Form,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
      secondary: {
        main: "#DD5E95",
      },
    },
  });
 export default function Editprofileteacher() {

  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

   return (
     <div> 
        <Headerstudent/>
        <Menuteacher/>

        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: -10,
          width: 1150,
          height: 600,
          borderRadius:10,
          marginRight:3,
          marginLeft:"auto",
          backgroundColor:"#FAEBF1",
        },
      }}
    >

      <Paper sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 550,
          height: 600,
          borderRadius:10,
          marginRight:"auto",
          marginLeft:"auto",
          backgroundColor:"#ffffff",
        },
      }}>
      <Paper elevation={3}>
      <ThemeProvider theme={theme}>
            <TableCell>
                <div>
                    {/* <Box sx={{ bgcolor: '#bfc3c7', height: '100vh',width:"50vh",margin: "auto"
 }} > */}
   <form >
          <TableCell rowSpan={4} sx={{ height: 150, width: 150, display: "flex",justifyContent: "center", marginLeft: "auto",  marginRight: "auto"}}
>
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
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="กลุ่มสาระการเรียนรู้" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="E-mail" variant="outlined" />
              </Grid>
              <Grid style={{ padding:"10px",borderRadius:"5px"}}>
              <TextField id="outlined-basic" label="เบอร์โทร" variant="outlined" />
              </Grid> 
      </FormControl>

              </Grid>
 {/* </Box> */}
                </div>
            </TableCell>
        </ThemeProvider>
        </Paper>
        </Paper>
    </Box>
       
        </div>
   )
 }


