import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';
import './App.css';
import TodoList from './views/TodoList';
import TestView from './views/TestView';
import { MuiThemeProvider, createMuiTheme,makeStyles,useTheme } from '@material-ui/core/styles';
import { IconButton,Theme, Container,Button ,AppBar, Menu, MenuItem, Toolbar,Snackbar,Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  title: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  }
}));

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
  const theme = useTheme<Theme>();
  const classes = useStyles(theme);
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <header>
            <Toolbar> Tool bar </Toolbar>
          </header>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
            <Container>
                <h1 className="header">
                  <TodoList todos={data}/>
                </h1>
            </Container>
          </div>
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