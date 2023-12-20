import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import sc from '../assets/sc.png';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';

const drawerWidth = 240;



interface Props {

  window?: () => Window;
}

export default function Menuteacher(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:"#dd5e9589",height:"100%"}}>
        <Grid>
        <img
            src={sc}
            alt="sc"
            style={{
                height: 150,
                width: 150,
                marginLeft:"auto",
                marginRight:"auto",
                display:"flex"
              }}
        /> 
        </Grid>
      <Toolbar/>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List style={{backgroundColor:"#dd5e9589"}}>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <FeedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="ฟีดข่าว" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BackupTableRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="ตารางคุมสอบ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="ข้อมูลนักรียน" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DonutSmallRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="สถิติ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="บันทึกตารางสอบ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QrCode2RoundedIcon />
              </ListItemIcon>
              <ListItemText primary="สร้างQrCode" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LaptopChromebookRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="สถานะเข้าสอบ" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Box>
      <Divider />
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div >
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Drawer 
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> เมนูด้านข้าง
      </Box>
      <Box 
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </div>
  );
}

