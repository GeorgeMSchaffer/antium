import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';
import './App.css';
import TodoList from './components/TodoList';
import TestView from './components/TestView';
import { MuiThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { IconButton,Theme, Container,Button ,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import Sidebar from './views/Sidebar';
import Header from './views/Header';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    }
  }
));

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

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
  const [open, setOpen] = React.useState(false);

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
          <header>
            <Toolbar> Tool bar </Toolbar>
          </header>
          <Sidebar open={open} width={drawerWidth}>drawerWidth</Sidebar>
            <h1 className="header">
              <TodoList todos={data}/>
            </h1>
        </Paper>
        </MuiThemeProvider>
     </ApolloProvider>
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