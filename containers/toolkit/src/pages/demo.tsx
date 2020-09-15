import React, { useRef, FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'store'
import { addTodo, getTodoList } from 'store/todos'

let id = 2

const Demo: FC = () => {
  const navigate = useNavigate()
  const { todos } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [loading, setLoading] = useState(false)

  const onAdd = () => {
    const text = inputRef.current?.value
    if (text) {
      dispatch(
        addTodo({
          text,
          id: ++id,
          completed: false
        })
      )
    }
  }

  const onLoadMore = async () => {
    setLoading(true)
    await dispatch(getTodoList(1000))
    setLoading(false)
  }

  const goToDetail = () => {
    navigate('/detail')
  }

  return (
    <div>
      <button onClick={goToDetail}> go to detail</button>
      <h1>Demo</h1>
      <div style={{ border: '1px solid #ccc', padding: 20 }}>
        <input ref={inputRef} />
        <button onClick={onAdd}>+</button>
        <br />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <br />
        {loading ? <span>Loading...</span> : <button onClick={onLoadMore}>Load More</button>}
      </div>
    </div>
  )
}

export default Demo
