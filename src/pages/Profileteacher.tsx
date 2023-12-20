import React from 'react'
import Headerteacher from '../components/Headerteacher';
import Menuteacher from '../components/Menuteacher';
import Paper from '@mui/material/Paper';
import { createTheme,ThemeProvider } from "@mui/material/styles";
import {
    Box,
    //  Typography,
     TableCell,
     TableRow,
    Avatar,
    Stack,
  } from "@mui/material";

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#DD5E95",
      },
    },
  });

export default function Profileteacher() {
    return(
        <div>
        <Headerteacher/>
        <Menuteacher/>
        <Box
      sx={{
        // display: 'flex',
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
        // display: 'flex',
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
                
                    <TableRow>
                        <Stack direction="row" spacing={1}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    </TableRow>
                </div>
            </TableCell>
        </ThemeProvider>
        </Paper>
        </Paper>
    </Box>
        </div>
    )
}
