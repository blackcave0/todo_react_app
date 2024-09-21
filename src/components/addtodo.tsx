import { FormEvent,  useState } from "react"
import { useTodos } from "../store/todos"

const AddTodo = () => {
  const [todo, setTodo] = useState('')
  //importing the context from todos.tsx
  const { handleAddTodo } = useTodos()

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddTodo(todo)
    setTodo('')
  }

  /* const handleAddTodo = (todo:string) => {
    console.log('Adding todo:', todo)
  } */

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}
// adding some test comment
export default AddTodo