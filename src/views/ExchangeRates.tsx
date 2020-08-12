
import React,{useEffect,useContext,useState,MouseEvent} from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';

	const handleClick = function(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
			console.debug(`HANDLE CLICK EVENT`,event);
			event.preventDefault();
	}
	interface IUser {
			_id : number,
			email: string,
			name: string,
			password: string,
			createdAt: Date
			updatedAt: Date
	}
	interface IUsers {
		[index: string]: IUser;
	}
	/*
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
	});
*/	
  const GET_USERS = gql`
    query getUsers{
      users{
        _id
        email
        name
        password
        createdAt
        updatedAt
      }
		}
	`;
		
  function ExchangeRates(props:any) {

    console.log('PROPS',props);
    const qryRes = useQuery(GET_USERS);
		console.debug('QRY RES',qryRes);
		const { loading, error, data } = useQuery(GET_USERS);
		console.debug('DATA',data);  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <div className='root'>
  
        <ul>
         <li>RATES? {JSON.stringify(data.rates)}</li>
        </ul>
        </div>      
    );
	}
	export default ExchangeRates;
  