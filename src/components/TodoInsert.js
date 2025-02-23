import { useState } from "react";
export default function TodoInsert({ handleAddTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const addTodo = (text) => {
    setValue("");
    handleAddTodo(text);
  };
  
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={() => addTodo(value)}>등록</button>
    </div>
  );
}