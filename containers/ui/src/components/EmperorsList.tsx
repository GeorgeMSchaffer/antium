import React, { useEffect, useContext, useState } from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';
import { Grid,Container } from '@material-ui/core';



interface IEmperorListProps{
	emperors?: IEmperor[]
}

interface IEmperor {
	title: string
	description: string
	dueDate?: any
};

const handleClick = ((event: MouseEvent) => {
	event.preventDefault();
	console.debug('\r\n ------ EVENT ------ ', event);

});
/*
	const handleClick = function(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
			console.debug(`HANDLE CLICK EVENT`,event);
			event.preventDefault();
	}
	*/
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
  const GET_TODOS = gql`
	query getEmperors{
		emperors{
		_id
		title
		description
		dueDate
		}
	}
	`;

function EmperorList(props: IEmperorListProps) {
	console.debug(`---- TODO LIST PROPS`, props);
	//const { loading, error, data } = useQuery(GET_TODOS);
	let data:any= [];
	//console.debug('TODO DATA',data);
	//const { emperors } = props;
	return (
		<Grid container className={'root'}>
				{(data) ? (
					<Grid>
						{data.map((emperor:IEmperor, idx: any) => {
							const { title, description, dueDate } = emperor;
							return (
								<Grid key={`emperor-${idx}`} className={'EmperorListContainer'}>
									<Grid id={`${idx}`}>{title}</Grid>
									<Grid>{description}</Grid>
									<Grid>{dueDate}</Grid>
								</Grid>
							)
						})}
					</Grid>
				) : (<div>Loading...</div>)
			}
		</Grid>
	);
}
// later...
export default EmperorList;


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