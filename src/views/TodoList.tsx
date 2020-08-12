import React, { useEffect, useContext, useState } from 'react';


interface ITodoListProps{
	todos?: ITodo[]
}

interface ITodo {
	title: string
	description: string
	dueDate?: any
};


function TodoList(props: ITodoListProps) {
	console.debug(`---- TODO LIST PROPS`, props);
	const { todos } = props;
	return (
		<div className={'root'}>
				{(todos) ? (
					<div>
						{todos.map((todo:ITodo, idx: any) => {
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