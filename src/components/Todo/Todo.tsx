import { useState } from "react";
import style from "./Todo.module.scss";
import { TodoList } from "./TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTask } from "../../libs/redux/slices/taskSlice";

export const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const addTodo = () => {
    if (!inputValue) return setError(true);
    setError(false);
    dispatch(addTask(inputValue));
    setInputValue('');
  };

  return (
    <section className={style.section__todo}>
      <h1>Todo List</h1>
      <div className={style.todo__container}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      {error &&
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Название не может быть пустым
        </p>}
      <TodoList />
    </section>
  );
};