import { ReactNode ,createContext, useContext, useState } from "react";
import Todo from "../components/Todo";

//creating useContext Api :-> createContext, Provider and Consumer, components can easily communicate and share important data without passing it through all the components in between...

export type TodosProviderProps = {
  children : ReactNode
}

export type Todo = {
  id: string
  task: string
  completed: boolean
  createdAt : Date
}

//.. defining the context for Array of Todos (add, check, and delete)...
export type TodosContext = {
  todos : Todo[]
  handleAddTodo : (task:string) => void;
  toggleTodoAsCompleted : (id:string) => void;
  handleDeleteTodo : (id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children} : TodosProviderProps) => {

  const [todos, setTodos] = useState<Todo[]>(():Todo[] =>{
    try {
      const newTodos = localStorage.getItem('todosItem') || "[]"
      return JSON.parse(newTodos) as Todo[]  
    } catch (error) {
      return []
    }
  })
  
  const handleAddTodo = (task:string) => {
    setTodos((prev)=>{
      const newTods : Todo[] = [
        {
          id:Math.random().toString(),
          task : task,
          completed:false,
          createdAt:new Date()
        }, 
        ...prev
      ]
      // console.log('my prev value ', ...prev );
      // console.log(newTods)
      localStorage.setItem('todosItem', JSON.stringify(newTods))
      return newTods
    })
  }

  // mark to completed
  const toggleTodoAsCompleted =(id:string) => {
    setTodos((prev)=> {
      let newTodos = prev.map((todo) => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo
      })
      return newTodos
    })
  }

  //delete todo
  const handleDeleteTodo = (id:string) => {
    setTodos((prev)=> {
      let newTodo = prev.filter((todo) => todo.id !== id)
      localStorage.setItem('todosItem', JSON.stringify(newTodo)) 
      return newTodo
    })
  }
  
  return <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo}}>
    {children}
  </todosContext.Provider>
}

//consumer 
export const useTodos =()=> {
  const todosConsumer = useContext(todosContext);
  if(!todosConsumer){
    throw new Error('useTodos must be used within a TodosProvider')
  }
  return todosConsumer
}