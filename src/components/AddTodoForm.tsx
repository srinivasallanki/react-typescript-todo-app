import { useState } from 'react'

interface Props {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button>Add Todo</button>
    </form>
  )
}
