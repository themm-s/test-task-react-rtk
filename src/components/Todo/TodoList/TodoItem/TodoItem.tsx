import { ITodoItems } from '../TodoList';
import style from './TodoItem.module.scss';
import trash_icon from '@/assets/trash-icon.svg';
import checkmark_icon from '@/assets/checkmark-icon.svg';
import cross_icon from "@/assets/cross-icon.svg";
import { useDispatch } from 'react-redux';
import { removeTask, toggleCompliteTask } from '@/libs/redux/slices/taskSlice';
import { Icon } from './Icon';

export const TodoItem = ({ task }: { task: ITodoItems; }) => {
  const dispatch = useDispatch();
  return (
    <li className={`${style.todo__item} ${task.completed ? style.completed : ''}`}>
      <div className={style.todo__info}>
        <p>{task.name}</p>
      </div>
      <p className={style.todo__date}>{task.createdAt.toString()}</p>
      <div className={style.container__button}>
        <button onClick={() => dispatch(toggleCompliteTask(task.id))} className={style.button__complete}>
          {
            task.completed ?
              <Icon src={cross_icon} />
              :
              <Icon src={checkmark_icon} />
          }
        </button>
        <button onClick={() => dispatch(removeTask(task.id))} className={style.button__trash}>
          <Icon src={trash_icon} />
        </button>
      </div>
    </li>
  );
};