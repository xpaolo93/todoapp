import useTaskStore from "../store";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  return (
    <>
      <div className="w-full max-w-md">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </>
  );
};
