import React from 'react'

interface TodoProps {
  completed?: boolean,
  title: string,
  description?: string,
  dueDate?: Date
}

export default function TodoListItem({ completed, title,description,dueDate }: TodoProps) {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {title}
      <hr/>
      {description}
      <hr/>
      {dueDate}x
    </li>
  )
}