import React from 'react'
import styles from '../../styles/Home.module.scss'
import { AppBar, Container ,Toolbar, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';


const Footer = () => {
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0070f3',
    },
  },
});


  return (
    <div className={styles.footer}>
   <ThemeProvider theme={darkTheme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>    
    </div>
  )
}

export default Footer