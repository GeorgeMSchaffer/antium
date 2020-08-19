import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';
import '../App.css';
import TodoList from '../components/TodoList';
import TestView from '../components/TestView';
import { MuiThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { Theme, Container,Button ,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Sidebar from '../views/Sidebar';
import Header from '../views/Header';
import { Provider } from 'react-redux'
import * as serviceWorker from '../serviceWorker';
import store from './store'
import AddTodo from '../features/todoList/AddTodo';

const width = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
  }),
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = (evt:MouseEvent)=>{
    setOpen(!open);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
          <header>
            <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
          </header>
          <Sidebar open={open} width={width}> SIDE BAR STUFF HERE</Sidebar>
            <h1 className="header">
              <AddTodo/>
              <TodoList todos={data}/>
            </h1>
        </Paper>
      </MuiThemeProvider>
  );
}
// later...
export default App;

//#region Greeter

interface gretterState {}
interface gretterProps {
  fname: string,
  lname: string,
  age?: number
}
/*
Interface Example

However, many hooks are initialized with null-ish default values, and you may wonder how to provide types. 
Explicitly declare the type, and use a union type:
*/
interface IUser {
  fname: string,
  lname: string,
  age?: number //optinal parameter
}

function Greet(props: gretterProps){
  const {fname,lname,age} = props;
  return(
    <div>
     <div>First Name: {fname}</div>
     <div>Last Name: {lname}</div>
    </div>
  )
}


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