import React, { useEffect, useState, MouseEvent } from 'react';
import { useRoutes } from 'react-router-dom'
import Layout from 'pages/layout'
//import Demo from 'pages/demo'
import Detail from 'pages/detail'
import Login from 'pages/login'
import Form from 'pages/Form'
import Emperors from './components/views/Emperors';
import {ThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { Theme,Grid,Box, Container,Button ,Card,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UseForm from './pages/UseForm';
import {getEmperorList } from './store/emperors';
import './App.css';


const width = 240;



const useStyles = makeStyles((theme: Theme) => {
  console.debug(` \r\n ------ THEME ----- \r\n`, theme)
  return createStyles({
  
    grid: {
      //backgroundColor: '#ddd'
    },
    paper: {
    
      
    },
    root: {
      display: 'flex',
      //padding: '10px 20px'
    },
    appBar: {
      // transition: theme.transitions.create(['margin', 'width'], {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.leavingScreen,
      // }),
    },
    appBarShift: {
     
    },
    menuButton: {
     // marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    container: {
      border: '1px dotted gray',
    },
    box: {
      border: '1px solid black',
      width: '100%'
      //  margin: '20px'
    }
  })
});

function App() {
  const classes = useStyles();
  const element = useRoutes([
    {
      element: <Login />,
      path: '/login'
    },
    {
      element: <Layout />,
      path: '/',
      children: [
        {
          element: <UseForm />,
          path: '/'
        },
        {
          element: <Form />,
          path: '/'
        },
        /*{
          element: <Detail />,
          path: '/detail'
        }*/
      ]
    }
  ]);
  console.debug('\r\n ---- CLASSES ------- ', classes);
  const theme: Theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (evt: MouseEvent) => {
    setOpen(!open)
  }

  return (
       <Paper>
        <Container fixed maxWidth={'xl'} className={classes.container}>
          <Grid container={true} spacing={2}>
            <AppBar position={'static'}>
              <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
          </AppBar>
          </Grid>
        <Grid style={{ border: '1px solid gray' }} container={true} spacing={2}>
            <Grid style={{ border: '1px dotted blue' }} className={classes.grid} item xs={12} md={6}>
                <Form />
            </Grid>
            <Grid item xs={12} md={6} className={classes.grid}>
                <Emperors />
            </Grid>
          </Grid>
        </Container>
      </Paper>
  )
}
export default App;
