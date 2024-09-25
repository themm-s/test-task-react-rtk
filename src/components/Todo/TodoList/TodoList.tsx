import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem/TodoItem";
import style from './TodoList.module.scss';

export interface ITodoItems {
  id: number;
  name: string;
  completed: boolean;
  createdAt: Date;
}

export type TTasks = {
  tasks: ITodoItems[];
};

export const TodoList = () => {
  const tasks = useSelector((state: TTasks) => state.tasks);
  console.log(tasks);

  const sortedTasks = [...tasks].sort((a, b) => +a.completed - +b.completed);
  return tasks?.length > 0 ? (
    <ul className={style.todo__list}>
      {sortedTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  ) : (
    <p>
      Тасков нету
    </p>
  );
};