import { useState, useId } from 'react'
import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'

const initialTodos: Todo[] = [
  {
    id: 1,
    text: 'Walk the dog',
    complete: false,
  },
  {
    id: 2,
    text: 'Write app',
    complete: true,
  },
]

function App() {
  const id = useId()
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { id: id, text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  )
}

export default App
