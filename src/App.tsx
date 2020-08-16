import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';
import './App.css';
import TodoList from './views/TodoList';
import TestView from './views/TestView';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ExchangeRates from '../src/views/ExchangeRates';
console.debug('EXCHANGE RATE',ExchangeRates);
// const client = ...

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
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          Put Menu Here
        </header>
          <Container className="p-3">
            <Jumbotron>
              <h1 className="header">
                <TodoList todos={data}/>
              </h1>
              <h2>Exchange Rates</h2>
              <TodoList/>
            </Jumbotron>
          </Container>
      </div>
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