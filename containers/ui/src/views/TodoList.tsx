import React, { useEffect, useContext, useState } from 'react';
import { ApolloProvider,gql,ApolloClient, InMemoryCache,useQuery  } from '@apollo/client';



interface ITodoListProps{
	todos?: ITodo[]
}

interface ITodo {
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
	query getTodos{
		todos{
		_id
		title
		description
		dueDate
		}
	}
	`;

function TodoList(props: ITodoListProps) {
	console.debug(`---- TODO LIST PROPS`, props);
	const { loading, error, data } = useQuery(GET_TODOS);
	console.debug('TODO DATA',data);
	//const { todos } = props;
	return (
		<div className={'root'}>
				{(data) ? (
					<div>
						{data.map((todo:ITodo, idx: any) => {
							const { title, description, dueDate } = todo;
							return (
								<div key={`todo-${idx}`} className={'TodoListContainer'}>
									<div id={`${idx}`}>{title}</div>
									<div>{description}</div>
									<div>{dueDate}</div>
								</div>
							)
						})}
					</div>
				) : (<div>Loading...</div>)
			}
		</div>
	);
}
// later...
export default TodoList;


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