import { TaskResponse } from "../interfaces/task.interface";

interface Props {
  toggleTask: (id: number) => void;
  task: TaskResponse;
}

export const TodoItem = ({ toggleTask, task }: Props) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-2 shadow rounded cursor-pointer">
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={() => toggleTask(task.id)}
          checked={task.completed}
          className="mr-3"
        />
        <span
          className={`text-lg ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
    </div>
  );
};
