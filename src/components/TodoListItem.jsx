import './TodoListItem.css';

export default function TodoListItem({ todo, removeTodo, handleCheck }) {
    return (
      <div>
        <input type="checkbox" checked={todo.checked} onClick={() => handleCheck(todo.id)}/>
        <span class={todo.checked ? 'done-task' : ''}>{todo.text}</span>
        <button>수정</button>
        <button onClick={()=>removeTodo(todo.id)}>삭제</button>
      </div>
    );
  }