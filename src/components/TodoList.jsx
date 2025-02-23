import TodoListItem from "./TodoListItem";
import { useState } from 'react';

export default function TodoList({todos, removeTodo, handleCheck}) {

  return (
    <div>
        {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} handleCheck={handleCheck}/>
        ))}
    </div>
  );
}