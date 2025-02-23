import TodoListItem from "./TodoListItem";
import { useState } from 'react';

export default function TodoList({todos, removeTodo, handleCheck}) {

  return (
    <div style={{marginTop: '10px'}}>
        {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} handleCheck={handleCheck}/>
        ))}
    </div>
  );
}