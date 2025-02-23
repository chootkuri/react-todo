import { useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const handleAddTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        checked: false,
      },
    ])
  };

  const [todos, setTodos] = useState([]);
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos(todos.map((todo)=>(todo.id===id ? { ...todo, checked: !todo.checked} : todo)));
  }

  return (
    <div>
      <h1>일정관리2</h1>
      <TodoInsert handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} removeTodo={handleRemoveTodo} handleCheck={handleCheck}/>
    </div>
  );
}

export default App;

