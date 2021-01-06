import React, { useEffect, useState, MouseEvent } from 'react';
import { useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Layout from 'pages/layout'
//import Demo from 'pages/demo'
import Detail from 'pages/detail'
import Login from 'pages/login'
import Form from 'pages/Form'
import {ThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { Theme,Grid,Box, Container,Button ,Card,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UseForm from './pages/UseForm';
import ObjectScans from './components/views/ObjectScans';
import './App.css';
import { getScanList } from "./store/objectScans";
import MUIDataTable, { ExpandButton, MUIDataTableColumn, MUIDataTableOptions, MUIDataTableProps } from 'mui-datatables';
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

 const dispatch = useDispatch();

  const objectScans = useSelector((state: any) => {
    console.debug("\r\n ------- ObjectScans state on selector", state.objectScans);
		return state.objectScans;
	});

  useEffect(() => {
    console.debug('USE EFFECT FIRED FOR GET SCAN LIST')
    dispatch(getScanList)
  }, [dispatch, objectScans])


  console.debug('\r\n ---- CLASSES ------- ', classes);
  const theme: Theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (evt: MouseEvent) => {
    setOpen(!open)
  }

  const Todos = [
    { id: 1, name: 'Buy apples', color: 'Red', amount: 4 },
    { id: 2, name: 'Eat apple', color: 'Green', amount: 1 },
    { id: 3, name: 'Eat some more apple', color: 'Yellow', amount: 3 },
];

const todoOptions: MUIDataTableOptions = {
    textLabels: {
        body: {
            noMatch: <p>You have no apples, go an buy some.</p>,
        },
    },
};

  const TableFruits = [
    { id: 1, name: 'Apple', color: 'Red', amount: 1 },
    { id: 2, name: 'Pear', color: 'Green', amount: 2 },
    { id: 3, name: 'Strawberry', color: 'Red', amount: 5 },
    { id: 4, name: 'Banana', color: 'Yellow', amount: 7 },
    { id: 5, name: 'Orange', color: 'Orange', amount: 9 },
];
const TableOptions: MUIDataTableOptions = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
};
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
          <Grid item xs={12} md={6} className={classes.grid}>
            <h2>Object Scans</h2>
            DATA? {JSON.stringify(objectScans)}
            <ObjectScans data={TableFruits} title={'Test Title'} options={TableOptions} />

            </Grid>
          </Grid>
        </Container>
      </Paper>
  )
}

export default App;


