
import React, { useRef, FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'store'
//import { addTodo, getTodoList } from 'store/todos'
import { addEmperor, getEmperorList } from 'store/emperors';
import { IEmperor } from '../store/types';

const Demo: FC = () => {
  const navigate = useNavigate()
//  const { todos } = useAppSelector(state => state)
  const { emperors } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [loading, setLoading] = useState(false)

  const onAdd = () => {
    const text = inputRef.current?.value
    if (text) {
      dispatch(
        addEmperor({
          nomen: 'Gaius',
          cognomen: 'Julius',
          praenomen: 'Caesar',
          id: Math.random()*10000, // REPLACE ANTI-PATTERN
          active: false
        })
      )
    }
  }

  const onLoadMore = async () => {
    setLoading(true)
    await dispatch(getEmperorList(1000))
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
          {JSON.stringify(emperors)}
        </ul>
        <br />
        {loading ? <span>Loading...</span> : <button onClick={onLoadMore}>Load More</button>}
      </div>
    </div>
  )
}

export default Demo
