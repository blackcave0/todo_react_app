import AddTodo from "./components/addtodo"
import './App.css'
import Todo from "./components/Todo"
import Navbar from "./components/navbar"
const App = () => {
  return (
    <main>
      <Navbar/>
      <h1>TODO React App + TypeScript </h1>
      <AddTodo />
      <Todo />
      {/* <Names/> */}
    </main>
  )
}

export default App