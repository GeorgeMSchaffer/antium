import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import EmperorList from '../components/features/Emperors/EmperorList';
import {ThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { Theme,Grid,Box, Container,Button ,Card,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddEmperor from '../components/features/Emperors/AddEmperor';
import '../App.css';
import { Form } from '../demos/Form';

const width = 240;
const useStyles = makeStyles((theme: Theme) => {
  console.debug(` \r\n ------ THEME ----- \r\n`, theme);
  return createStyles({
    containerGrid: {
      border: '1px solid red',
      backgroundColor:'green'
    },
    paper: {
      /*
      border: '1px dotted green',
      width: 'auto',
      minWidth: '80%',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(620 + theme.spacing(6))]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
        3
      )}px`,
      */
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
      width: `calc(100% - ${width}px)`,
      marginLeft: width,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    container: {
      border: '1px dashed blue',
      // flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
      //height: `100%`,
     // width: '100%'      
    },
    box: {
      border: '1px solid black',
      width: '100%',
      //  margin: '20px'
    }
  })
}
);

/*
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
*/

const data = [{
  title: 'Title #2',
  description: 'Descriptions Number 2',
  dueDate: Date.now()
}, {
  title: 'Title #2',
  description: 'Descriptions Number 2',
  dueDate: Date.now()
  }];

function App() {
  const classes = useStyles();
  console.debug('\r\n ---- CLASSES ------- ', classes);
  const theme: Theme = useTheme();
  console.debug('\r\n ------ THEME ------', theme);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = (evt: MouseEvent) => {
    setOpen(!open);
  };
  /*
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={10} style={{padding: '24px'}}
  ></Grid>
          <Container maxWidth={'lg'} className={classes.container}>
            <h2>Container</h2>
            <Box className={classes.box}>
              <AppBar position={'static'}>
                <Toolbar>
                  <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              {/* 						<Sidebar open={open} width={width}>
                SIDE BAR STUFF HERE
              </Sidebar> 
              <h1 className="header">Header</h1>
              <AddEmperor />
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <EmperorList />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>THIS IS CARD 2
                 <UseReducerExample/>
                </Card>
              </Grid>
              :
              <Grid item xs={12} sm={6} md={3}>
                <Card>THIS IS CARD 3</Card>
              </Grid>
            </Box>
          </Container>
        </MuiThemeProvider>
        <Route path="/autogrid" exact component={AutoGrid} />
        <Route path="/muigrid" component={NestedGridDemo} />
      </Router>
    );
  }
  
  */
  return (
		<Container fixed maxWidth={'xl'} className={classes.container}>
			<Grid container spacing={5}>
				<AppBar position={'static'}>
					<Toolbar>
						<IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Grid container={true} spacing={5} xs={12}>
					<Grid item xs={12} md={6}>
						<Form action={'GET'} />
					</Grid>
				</Grid>
				<Grid container={true} spacing={5} xs={12}>
					<Typography variant={'caption'}>Use Context Example</Typography>
					<UseContextExample />
				</Grid>
				<Grid container={true} spacing={5} xs={12}>
					<Typography variant={'caption'}>Use Reducer Example</Typography>
					<UseReducerExample />
				</Grid>
				<Grid container={true} spacing={5} xs={12}>
					<Grid item xs={12} md={6}>
						<h2>Emperor List</h2>
						<EmperorList />
					</Grid>
					<Grid item xs={12} md={6}>
						<h2>Add Emperor</h2>
						<AddEmperor />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
  // later...
export default App;

/* 
4  function Index() {
5    return <h2>Home</h2>;
6  }
7 
8  function Product({ match }) {
9   return <h2>This is a page for product with ID: {match.params.id} </h2>;
10 }
11 
12 function AppRouter() {
13   return (
14     <Router>
15       <div>
16         <nav>
17           <ul>
18             <li>
19               <Link to="/">Home</Link>
20             </li>
21             <li>
22               <Link to="/products/1">First Product</Link>
23             </li>
24             <li>
25               <Link to="/products/2">Second Product</Link>
26             </li>
27           </ul>
28         </nav>
29 
30         <Route path="/" exact component={Index} />
31         <Route path="/products/:id" component={Product} />
32       </div>
33     </Router>
34   );
35 }
36 
*/
 //#endregion

/*
function Counter({ initialCount }: { initialCount: Number }) {
  const [count: number, setCount: function] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
*/