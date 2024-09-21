import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos"


const Todo = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos()

  const [searchParam] = useSearchParams();
  let todosData = searchParam.get('todos');
  console.log('todosData', todosData)

  let filterData = todos;
  
  if (todosData === 'active') {
    filterData = filterData.filter((task)=> !task.completed)
  } else if (todosData === 'completed') {
    filterData = filterData.filter((task)=> task.completed)
  }


  return (
    <ul className="main-task">
      {
        filterData.map((todo) => {
          return <li key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {/* <input type="text" id={`todo-${todo.id}`} /> */}

            {
              todo.completed && (
                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              )
            }
          </li>
        })
      }
    </ul>
  )
}

export default Todo