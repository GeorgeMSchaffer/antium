import React from 'react'

interface TodoProps {
  completed?: boolean,
  text: string,
  description?: string,
  dueDate?: Date
}

export default function TodoListItem({ completed, text,description,dueDate }: TodoProps) {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
      <hr/>
      {description}
      <hr/>
      {dueDate}
    </li>
  )
}